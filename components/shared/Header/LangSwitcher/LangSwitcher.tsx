'use client';

import { FC, useEffect, useState } from 'react';
import ReactSelect from 'react-select';
import clsx from 'clsx';

import Icon from '@/components/ui/Icon';
import { dmSans } from '@/constants/fonts';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';

import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { languageActions } from '../../../../redux/slices/LanguageSlice';
import { RootState } from '../../../../redux/store';
import { ILanguage } from '../../../../types/languages.types';

import scss from './LangSwitcher.module.scss';

interface ILangSwitcher {
    className?: string;
    id?: string;
}

const LangSwitcher: FC<ILangSwitcher> = ({ id, className }) => {
    const { languages, currentLangId } = useAppSelector((state: RootState) => state.lang);
    const dispatch = useAppDispatch();

    const [selectedOption, setSelectedOption] = useState<ILanguage | null>(null);

    useEffect(() => {
        dispatch(languageActions.getAllLang());
    }, [dispatch]);

    // Оновлення selectedOption при зміні languages або currentLangId
    useEffect(() => {
        if (languages.length > 0 && currentLangId) {
            const matchedLanguage = languages.find(
                (lang) => String(lang.id) === String(currentLangId)
            );
            if (matchedLanguage) {
                setSelectedOption(matchedLanguage);
            }
        }
    }, [languages, currentLangId]);

    const options = languages.map((lang) => ({
        value: lang.code,
        label: (
            <div className={scss.option}>
                <Icon variant={lang.code} className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>{lang.name}</span>
            </div>
        ),
        id: lang.id,
    }));

    const changeOption = (option: any) => {
        if (option) {
            const selectedLang = languages.find((lang) => lang.code === option.value);
            if (selectedLang) {
                setSelectedOption(selectedLang);
                setUserLocale(selectedLang.code as Locale, String(selectedLang.id));
                dispatch(languageActions.setCurrentLang(selectedLang.id));
                dispatch(languageActions.setTriggerLang());
            }
        }
    };

    return (
        <div className={className}>
            <ReactSelect
                options={options}
                value={options.find((opt) => opt.value === selectedOption?.code) || null}
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
