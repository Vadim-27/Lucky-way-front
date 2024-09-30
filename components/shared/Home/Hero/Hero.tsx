import { useTranslations } from 'next-intl';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

import scss from './Hero.module.scss';

const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <section className={scss.hero}>
            <Container>
                <div className={scss.wrapper}>
                    <h1 className={scss.title}>{t('title')}</h1>
                    <p className={scss.description}>
                        Purchase vignettes for toll roads, explore green zones in cities, and pay
                        fines effortlessly. Travel smart, drive smoothly.
                    </p>

                    <div className={scss.buttonGroup}>
                        <Button>Get Started</Button>
                        <Button variant="secondary">Learn More</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
