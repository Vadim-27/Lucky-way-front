import { getUserLocale } from '@/services/locale';

import { ILanguage } from '../types/languages.types';

const getCurrentLanguage = async (languages: ILanguage[]) => {
    const [locale] = await Promise.all([getUserLocale()]);

    if (!languages || languages.length === 0) {
        throw new Error('No languages available');
    }

    return languages.find((lang) => lang.code === locale) || languages[0];
};

export default getCurrentLanguage;
