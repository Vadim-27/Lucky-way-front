import { Locale } from '@/i18n/config';

import instance from '../axios.config';
import ENDPOINTS from '../endpoints';

export const getHeroText = async (locale: Locale) => {
    const response = await instance.get(ENDPOINTS.translation.home.hero, {
        params: {
            lang: locale,
        },
    });

    return response.data;
};
