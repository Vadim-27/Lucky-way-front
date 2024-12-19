'use server';

import { cookies } from 'next/headers';

import { defaultLocale, Locale } from '@/i18n/config';
const LANGUAGE_CODE = 'NEXT_LOCALE';

export async function getUserLocale() {
    return cookies().get(LANGUAGE_CODE)?.value || defaultLocale;
}

export async function getLangIdFromCoockiee() {
    return await cookies().get('language_id')?.value;
}

export async function setUserLocale(locale: Locale, languageId: string) {
    cookies().set(LANGUAGE_CODE, locale);
    cookies().set('language_id', languageId);
}
