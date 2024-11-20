export type Locale = (typeof locales)[number];

export const locales = [
    'en',
    'de',
    'cz',
    'uk',
    'sk',
    'pl',
    'lv',
    'lt',
    'et',
    'hu',
    'ro',
    'bg',
    'tr',
    'sl',
    'da',
    'nl',
    'fr',
    'it',
    'ru',
    'es',
    'no',
    'sv',
    'fi',
] as const;
export const defaultLocale: Locale = 'en';
