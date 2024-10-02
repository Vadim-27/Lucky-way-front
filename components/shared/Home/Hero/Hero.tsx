import { useTranslations } from 'next-intl';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

import scss from './Hero.module.scss';

const Hero = () => {
    const t = useTranslations('Hero');

    // const locale = await getUserLocale();
    // const text = await getHeroText(locale as Locale);

    return (
        <section className={scss.hero}>
            <Container>
                <div className={scss.wrapper}>
                    <h1 className={scss.title}>{t('title')}</h1>
                    <p className={scss.description}>{t('description')}</p>

                    <div className={scss.buttonGroup}>
                        <Button>{t('cta')}</Button>
                        <Button variant="secondary">{t('secondary')}</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
