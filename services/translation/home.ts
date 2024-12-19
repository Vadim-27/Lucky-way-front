import { isAxiosError } from 'axios';

import { getLangIdFromCoockiee } from '../locale';
import { postService } from '../posts/PostServices';

//getHomeHeroText
export const getDataSectionById = async (sectionId: number) => {
    try {
        const langId = await getLangIdFromCoockiee();
        const response = await postService.getSectionById(sectionId);
        if (langId) {
            const translation = response.data?.translations?.find((t) => t.languageId === +langId);
            return translation;
        }
    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error.response?.data.message);
        }
    }
};

export const getDataPostsSectionById = async (sectionId: number) => {
    try {
        const response = await postService.getAllPostsBySection(sectionId);
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log(error.response?.data.message);
        }
    }
};
