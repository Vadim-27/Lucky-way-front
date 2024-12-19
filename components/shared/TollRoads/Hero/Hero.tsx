import HeroCustom from '@/components/ui/HeroCustom';
import getCurrentLanguage from '@/helpers/getCurrentLanguage';
import { getDataSectionById } from '@/services/translation/home';

const Hero = async () => {
    const hero = await getDataSectionById(9);

    const language = await getCurrentLanguage();

    if (!hero) {
        return null;
    }

    const translation = hero.translations.find((t) => t.languageId === language.id);

    const title = translation?.title;
    const description = translation?.description;

    return (
        <HeroCustom
            title={title}
            description={description}
            bgImage="linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            url('/images/toll-roads/hero/hero-bg.jpg')"
        />
    );
};

export default Hero;
