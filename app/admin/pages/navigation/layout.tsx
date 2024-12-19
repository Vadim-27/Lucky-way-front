'use client';
import { FC, ReactNode, useEffect } from 'react';

import { useAppDispatch } from '../../../../hooks/hooks';
import { languageActions } from '../../../../redux/slices/LanguageSlice';
import { getLangIdFromCoockiee } from '../../../../services/locale';

export interface IRootLayout {
    children: ReactNode;
}

const RootLayout: FC<IRootLayout> = ({ children }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchLanguageId = async () => {
            const langId = await getLangIdFromCoockiee();
            console.log('langId', langId);
            dispatch(languageActions.setCurrentLang(langId));
        };

        fetchLanguageId();
    }, [dispatch]);

    return <div>{children}</div>;
};

export default RootLayout;
