import { useEffect, useState } from 'react';

import Container from '@/components/ui/Container';
import CountriesSlider from '@/components/ui/CountriesSlider';
import TitleLinkDescription from '@/components/ui/TitleLinkDescription';
import countries from '@/data/countries';

import { useAppSelector } from '../../../../hooks/hooks';
import { RootState } from '../../../../redux/store';
import { getDataSectionById } from '../../../../services/translation/home';
import { ISectionTranslation } from '../../../../types/all.types';

import scss from './TollRoads.module.scss';

const TollRoads = () => {
    const [tollRoadsTranslation, setTollRoadsSectionTranslation] =
        useState<ISectionTranslation | null>(null);

    const { triggerLang, currentLangId } = useAppSelector((state: RootState) => state.lang);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getDataSectionById(9);
            setTollRoadsSectionTranslation(res);
        };

        fetchData();
    }, [triggerLang]);

    if (!tollRoadsTranslation || !currentLangId) {
        return <div>Loading...</div>; // Додаємо індикатор завантаження
    }

    return (
        <section id="about" className={scss.tollRoads}>
            <Container>
                <TitleLinkDescription
                    title={tollRoadsTranslation.title}
                    description={
                        tollRoadsTranslation.description ? tollRoadsTranslation.description : ''
                    }
                    link="/toll-roads"
                />

                <CountriesSlider countries={countries} title="Toll roads" />
            </Container>
        </section>
    );
};

export default TollRoads;
