import { IImage, IPost, ISection, IUpdateSection } from '../../types/all.types';
import { apiService } from '../ApiServices';

const postService = {
    createPost: (data: IPost) => apiService.post(`posts`, data),
    getAllPostsBySection: (sectionId: number) => apiService.get(`posts/?section_id=${sectionId}`),
    deletePostById: (id: number) => apiService.delete(`posts/${id}`),
    deletePostTranslation: (id: number) => apiService.delete(`post-translations/${id}`),
    updatePostById: (id: number, data: IPost) => apiService.patch(`posts/${id}`, data),
    getAllSections: () => apiService.get(`sections`),
    getSectionById: (id: number) => apiService.get(`sections/${id}`),
    updateSectionById: (id: number, data: IUpdateSection) =>
        apiService.patch(`sections/${id}`, data),
    createSection: (data: ISection) => apiService.post(`sections`, data),
    deleteSectionById: (id: number) => apiService.delete(`sections/${id}`),
    addImageToPost: (imageData: IImage) => apiService.post('images', imageData),
    updateImageOfPost: (id: string, url: string) => {
        console.log('ja vidpravl', url);
        apiService.patch(`images/${id}`, { url });
    },
    deleteImageById: (id: number) => apiService.delete(`images/${id}`),
};

export { postService };
