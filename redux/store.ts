import { configureStore } from '@reduxjs/toolkit';

import { postReducer } from './slices/PostSlice';
import { languageReducer } from './slices/LanguageSlice';
export const store = configureStore({
    reducer: {
        posts: postReducer,
        lang: languageReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

// типізація всіх states
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
