'use client';
import { useEffect, useState } from 'react';

import HeroCustom from '@/components/ui/HeroCustom';
import { getDataSectionById } from '@/services/translation/home';

import { useAppSelector } from '../../../../hooks/hooks';
import { RootState } from '../../../../redux/store';
import { ISectionTranslation } from '../../../../types/all.types';

const Hero = () => {
    const [hero, setHero] = useState<ISectionTranslation | null>(null);
    const { triggerLang, currentLangId } = useAppSelector((state: RootState) => state.lang); //

    useEffect(() => {
        const fetchData = async () => {
            const heroData = await getDataSectionById(9);
            setHero(heroData);
        };

        fetchData();
    }, [triggerLang]);

    if (!hero || !currentLangId) {
        return <div>Loading...</div>; // Додаємо індикатор завантаження
    }

    return (
        <HeroCustom
            title={hero.title}
            description={hero.description}
            bgImage="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/home/hero/hero-bg@2x.jpg')"
        />
    );
};

export default Hero;
