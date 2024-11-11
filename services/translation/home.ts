import { isAxiosError } from 'axios';

import { ISection } from '@/types/sections.types';

import instance from '../axios.config';
import ENDPOINTS from '../endpoints';

export const getHomeHeroText = async () => {
    try {
        const response = await instance.get<ISection>(ENDPOINTS.translation.home.hero);

        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error.response?.data.message);
        }
    }
};

export const updateHomeHeroText = async (body: ISection) => {
    try {
        const response = await instance.patch(ENDPOINTS.translation.home.hero, body);

        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error.response?.data.message);
        }
    }
};
