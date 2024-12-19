'use client';
import { useEffect } from 'react';

import Advantages from '@/components/shared/Home/Advantages';
import FinesPayment from '@/components/shared/Home/FinesPayment';
import Hero from '@/components/shared/Home/Hero';
import LowEmissionZone from '@/components/shared/Home/LowEmissionZone';
import ServiceHighlights from '@/components/shared/Home/ServiceHighlights';
import TollRoads from '@/components/shared/Home/TollRoads';

import { useAppDispatch } from '../../hooks/hooks';
import { languageActions } from '../../redux/slices/LanguageSlice';
import { getLangIdFromCoockiee } from '../../services/locale';

const HomePage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchLanguageId = async () => {
            const langId = await getLangIdFromCoockiee();
            console.log('langId', langId);
            dispatch(languageActions.setCurrentLang(langId));
        };

        fetchLanguageId();
    }, [dispatch]);
    return (
        <main>
            <Hero />
            <ServiceHighlights />
            <TollRoads />
            <Advantages />
            <LowEmissionZone />
            <FinesPayment />
        </main>
    );
};

export default HomePage;
