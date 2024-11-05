import { getLanguages } from '@/services/languages.api';
import { getUserLocale } from '@/services/locale';

const getCurrentLanguage = async () => {
    const locale = await getUserLocale();
    const languages = await getLanguages();

    return languages.find((lang) => lang.code === locale) || languages[0];
};

export default getCurrentLanguage;
