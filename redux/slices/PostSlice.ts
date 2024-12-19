import { createAsyncThunk, createSlice, isFulfilled, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { postService } from '../../services/posts/PostServices';
import { IImage, IPost, ISection, IUpdateSection } from '../../types/all.types';

interface PostState {
    error: string | null;
    posts: IPost[];
    sections: ISection[];
    createUpdateDeleteTriggerSection: boolean;
}

const initialState: PostState = {
    error: null,
    posts: [],
    sections: [],
    createUpdateDeleteTriggerSection: true,
};

interface ErrorResponse {
    message?: string;
}

const createPost = createAsyncThunk<IPost, IPost, { rejectValue: string }>(
    'postSlice/createPost',
    async (data, { rejectWithValue }) => {
        try {
            const response = await postService.createPost(data);
            return response.data; // Повертаємо тільки дані з відповіді
        } catch (e) {
            const err = e as AxiosError<ErrorResponse>;
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Unknown error occurred'
            );
        }
    }
);

const updatePostById = createAsyncThunk<
    ISection[], // Тип даних, які повертає thunk
    { id: number; data: IPost }, // Параметри, що передаються у thunk
    { rejectValue: string } // Тип для обробки помилок
>('postSlice/updatePostById', async ({ id, data }, { rejectWithValue }) => {
    try {
        const response = await postService.updatePostById(id, data);
        return response.data; // Повертаємо тільки дані з відповіді
    } catch (e) {
        const err = e as AxiosError<ErrorResponse>;
        return rejectWithValue(
            err.response?.data?.message || err.message || 'Unknown error occurred'
        );
    }
});

const createSection = createAsyncThunk<ISection, ISection, { rejectValue: string }>(
    'postSlice/createSection',
    async (data, { rejectWithValue }) => {
        try {
            const response = await postService.createSection(data);
            return response.data; // Повертаємо тільки дані з відповіді
        } catch (e) {
            const err = e as AxiosError<ErrorResponse>;
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Unknown error occurred'
            );
        }
    }
);

const getAllPostsBySection = createAsyncThunk<IPost[], number, { rejectValue: string }>(
    'postSlice/getAllPostsBySection',
    async (id, { rejectWithValue }) => {
        try {
            const response = await postService.getAllPostsBySection(id);
            return response.data; // Повертаємо тільки дані з відповіді
        } catch (e) {
            const err = e as AxiosError<ErrorResponse>;
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Unknown error occurred'
            );
        }
    }
);

const updateSectionById = createAsyncThunk<
    ISection[], // Тип даних, які повертає thunk
    { id: number; data: IUpdateSection }, // Параметри, що передаються у thunk
    { rejectValue: string } // Тип для обробки помилок
>('postSlice/updateSectionById', async ({ id, data }, { rejectWithValue }) => {
    try {
        const response = await postService.updateSectionById(id, data);
        return response.data; // Повертаємо тільки дані з відповіді
    } catch (e) {
        const err = e as AxiosError<ErrorResponse>;
        return rejectWithValue(
            err.response?.data?.message || err.message || 'Unknown error occurred'
        );
    }
});

const getAllSections = createAsyncThunk<ISection[], void, { rejectValue: string }>(
    'postSlice/getAllSections',
    async (_, { rejectWithValue }) => {
        try {
            const response = await postService.getAllSections();
            return response.data; // Повертаємо тільки дані з відповіді
        } catch (e) {
            const err = e as AxiosError<ErrorResponse>;
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Unknown error occurred'
            );
        }
    }
);

const deleteSectionById = createAsyncThunk<IPost[], number, { rejectValue: string }>(
    'postSlice/deleteSectionById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await postService.deleteSectionById(id);
            return response.data; // Повертаємо тільки дані з відповіді
        } catch (e) {
            const err = e as AxiosError<ErrorResponse>;
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Unknown error occurred'
            );
        }
    }
);

// //deletePostTranslation
const deletePostTranslation = createAsyncThunk<string, number, { rejectValue: string }>(
    'postSlice/deletePostTranslation',
    async (id, { rejectWithValue }) => {
        try {
            const response = await postService.deletePostTranslation(id);
            return response.data; // Повертаємо тільки дані з відповіді
        } catch (e) {
            const err = e as AxiosError<ErrorResponse>;
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Unknown error occurred'
            );
        }
    }
);

//deletePostById
const deletePostById = createAsyncThunk<string, number, { rejectValue: string }>(
    'postSlice/deletePostById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await postService.deletePostById(id);
            return response.data; // Повертаємо тільки дані з відповіді
        } catch (e) {
            const err = e as AxiosError<ErrorResponse>;
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Unknown error occurred'
            );
        }
    }
);

//deleteImageById
const deleteImageById = createAsyncThunk<string, number, { rejectValue: string }>(
    'postSlice/deleteImageById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await postService.deleteImageById(id);
            return response.data; // Повертаємо тільки дані з відповіді
        } catch (e) {
            const err = e as AxiosError<ErrorResponse>;
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Unknown error occurred'
            );
        }
    }
);

const getSectionById = createAsyncThunk<ISection, number, { rejectValue: string }>(
    'postSlice/getSectionById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await postService.getSectionById(id);
            return response.data; // Повертаємо тільки дані з відповіді
        } catch (e) {
            const err = e as AxiosError<ErrorResponse>;
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Unknown error occurred'
            );
        }
    }
);

export const addImageToPost = createAsyncThunk(
    'post/addImageToPost',
    async (imageData: IImage, thunkAPI) => {
        try {
            const response = await postService.addImageToPost(imageData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Створюємо асинхронний action для оновлення зображення
export const updateImageOfPost = createAsyncThunk(
    'post/updateImageOfPost',
    async ({ id, url }: { id: string; url: string }, thunkAPI) => {
        try {
            const response = await postService.updateImageOfPost(id, url); // Викликаємо API-сервіс
            return response.data; // Повертаємо дані відповіді
        } catch (error) {
            // Обробка помилок
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const PostSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setShowSuccessMessage: (state, action) => {
            console.log(state, action.payload);
        },
        setCreateUpdateDeleteTriggerSection: (state) => {
            state.createUpdateDeleteTriggerSection = !state.createUpdateDeleteTriggerSection;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getAllPostsBySection.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.error = null; // Очищення помилки
            })
            .addCase(getAllSections.fulfilled, (state, action) => {
                state.sections = action.payload;
                state.error = null; // Очищення помилки
            })
            .addMatcher(
                isRejected(
                    createPost,
                    createSection,
                    deleteSectionById,
                    updatePostById,
                    deletePostTranslation,
                    deletePostById,
                    getSectionById,
                    addImageToPost,
                    updateImageOfPost,
                    deleteImageById
                ),
                (state, action) => {
                    const errorMessage = action.payload || 'Unknown error occurred';
                    state.error = errorMessage; // Встановлення помилки при невдачі
                }
            )
            .addMatcher(
                isFulfilled(
                    createPost,
                    updateSectionById,
                    createSection,
                    deleteSectionById,
                    updatePostById,
                    deletePostTranslation,
                    deletePostById,
                    getSectionById,
                    addImageToPost,
                    updateImageOfPost,
                    deleteImageById
                ),
                (state) => {
                    state.error = null; // Очищення помилки при успішному виконанні
                }
            );
    },
});

const { reducer: postReducer, actions } = PostSlice;

const postActions = {
    ...actions,
    createPost,
    getAllPostsBySection,
    getAllSections,
    getSectionById,
    updateSectionById,
    createSection,
    deleteSectionById,
    updatePostById,
    deletePostTranslation,
    deletePostById,
    addImageToPost,
    updateImageOfPost,
    deleteImageById,
};

export { postActions, postReducer };
