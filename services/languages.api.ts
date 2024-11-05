import { ILanguage } from '@/types/languages.types';

import instance from './axios.config';
import ENDPOINTS from './endpoints';

export const getLanguages = async () => {
    const response = await instance.get<ILanguage[]>(ENDPOINTS.languages);

    return response.data;
};
