import { ILanguage } from '../../types/languages.types';
import { apiService } from '../ApiServices';

const langService = {
    createLanguage: (data: ILanguage) => apiService.post(`languages`, data),
    getAllLanguages: () => apiService.get(`languages`),
};

export { langService };
