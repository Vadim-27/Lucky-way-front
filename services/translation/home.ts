import { ISection } from '@/types/sections.types';

import instance from '../axios.config';
import ENDPOINTS from '../endpoints';

export const getHeroText = async () => {
    const response = await instance.get<ISection>(ENDPOINTS.translation.home.hero);

    return response.data;
};
