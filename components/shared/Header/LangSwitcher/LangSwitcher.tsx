'use client';

import { FC, useState } from 'react';
import ReactSelect from 'react-select';

import options, { IOption } from './options';

import scss from './LangSwitcher.module.scss';

interface ILangSwitcher {
    className?: string;
    id?: string;
}

const LangSwitcher: FC<ILangSwitcher> = ({ id, className }) => {
    const [selectedOption, setSelectedOption] = useState<IOption | null>(options[0]);

    const filteredOptions = options.filter((option) => option.value !== selectedOption?.value);

    return (
        <div className={className}>
            <ReactSelect
                options={filteredOptions}
                value={selectedOption}
                onChange={setSelectedOption}
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
