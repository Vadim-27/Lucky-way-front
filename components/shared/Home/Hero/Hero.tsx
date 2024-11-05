import HeroCustom from '@/components/ui/HeroCustom';
import getCurrentLanguage from '@/helpers/getCurrentLanguage';
import { getHeroText } from '@/services/translation/home';

const Hero = async () => {
    const hero = await getHeroText();

    const language = await getCurrentLanguage();

    const translation = hero.translations.find((t) => t.languageId === language.id);

    const title = translation?.title;
    const description = translation?.description;

    return (
        <HeroCustom
            title={title}
            description={description}
            bgImage="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            url('/images/hero/hero-bg@2x.jpg')"
        />
    );
};

export default Hero;
