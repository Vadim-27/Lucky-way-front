import { createAsyncThunk, createSlice, isFulfilled, isRejected } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { langService } from '../../services/lang/LangServices';
import { ILanguage } from '../../types/languages.types';

interface LanguageState {
    error: string | null;
    languages: ILanguage[];
    triggerLang: boolean;
    currentLangId: number;
}

const initialState: LanguageState = {
    error: null,
    languages: [],
    triggerLang: true,
    currentLangId: 1,
};

interface ErrorResponse {
    message?: string;
}

const createLanguage = createAsyncThunk<ILanguage, ILanguage, { rejectValue: string }>(
    'languageSlice/createLanguage',
    async (data, { rejectWithValue }) => {
        try {
            const response = await langService.createLanguage(data);
            return response.data; // Повертаємо тільки дані з відповіді
        } catch (e) {
            const err = e as AxiosError<ErrorResponse>;
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Unknown error occurred'
            );
        }
    }
);

const getAllLang = createAsyncThunk<ILanguage[], void, { rejectValue: string }>(
    'languageSlice/getAllLang',
    async (_, { rejectWithValue }) => {
        try {
            const response = await langService.getAllLanguages();
            return response.data; // Повертаємо тільки дані з відповіді
        } catch (e) {
            const err = e as AxiosError<ErrorResponse>;
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Unknown error occurred'
            );
        }
    }
);

export const LanguageSlice = createSlice({
    name: 'languageSlice',
    initialState,
    reducers: {
        setShowSuccessMessage: (state, action) => {
            console.log(state, action.payload);
        },
        setTriggerLang: (state) => {
            state.triggerLang = !state.triggerLang;
        },
        setCurrentLang: (state, action) => {
            state.currentLangId = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getAllLang.fulfilled, (state, action) => {
                state.languages = action.payload;
                state.error = null; // Очищення помилки
            })
            .addMatcher(isRejected(createLanguage), (state, action) => {
                const errorMessage = action.payload || 'Unknown error occurred';
                state.error = errorMessage; // Встановлення помилки при невдачі
            })
            .addMatcher(isFulfilled(createLanguage), (state) => {
                state.error = null; // Очищення помилки при успішному виконанні
            });
    },
});

const { reducer: languageReducer, actions } = LanguageSlice;

const languageActions = {
    ...actions,
    createLanguage,
    getAllLang,
};

export { languageActions, languageReducer };
