import { FC } from 'react';

import HeroCustom from '@/components/ui/HeroCustom';
import countries from '@/data/countries';

interface IHero {
    slug: string;
}

const Hero: FC<IHero> = ({ slug }) => {
    const country = countries.find((country) => country.slug === slug);

    return (
        <HeroCustom
            title={`Hello from ${country?.name}`}
            description="Purchase vignettes for toll roads, explore green zones in cities, and pay fines effortlessly. Travel smart, drive smoothly."
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            url(${country?.bgImage?.src || '/images/toll-roads/hero/hero-bg.jpg'})`}
        />
    );
};

export default Hero;
