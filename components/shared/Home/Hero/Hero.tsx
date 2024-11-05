import Container from '@/components/ui/Container';
import getCurrentLanguage from '@/helpers/getCurrentLanguage';
import { getHeroText } from '@/services/translation/home';

import ButtonsGroup from './ButtonsGroup';

import scss from './Hero.module.scss';

const Hero = async () => {
    const hero = await getHeroText();

    const language = await getCurrentLanguage();

    const translation = hero.translations.find((t) => t.languageId === language.id);

    const title = translation?.title;
    const description = translation?.description;

    return (
        <section className={scss.hero} id="hero">
            <Container>
                <div className={scss.wrapper}>
                    <h1 className={scss.title}>{title}</h1>
                    <p className={scss.description}>{description}</p>

                    <ButtonsGroup />
                </div>
            </Container>
        </section>
    );
};

export default Hero;
