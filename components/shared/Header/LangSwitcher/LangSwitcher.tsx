'use client';

import { FC, useState } from 'react';
import ReactSelect from 'react-select';
import { useLocale } from 'next-intl';

import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';

import options, { IOption } from './options';

import scss from './LangSwitcher.module.scss';

interface ILangSwitcher {
    className?: string;
    id?: string;
}

const LangSwitcher: FC<ILangSwitcher> = ({ id, className }) => {
    const locale = useLocale();
    const defaultOption = options.find((option) => option.value === locale) || null;
    const [selectedOption, setSelectedOption] = useState<IOption | null>(defaultOption);

    const filteredOptions = options.filter((option) => option.value !== selectedOption?.value);

    const changeOption = (option: IOption | null) => {
        if (option) {
            setSelectedOption(option);
            setUserLocale(option.value as Locale);
        }
    };

    return (
        <div className={className}>
            <ReactSelect
                options={filteredOptions}
                value={selectedOption}
                onChange={changeOption}
                isSearchable={false}
                instanceId={id}
                className={scss.selectContainer}
                classNamePrefix={scss.select}
                unstyled
            />
        </div>
    );
};

export default LangSwitcher;
