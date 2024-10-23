import Container from '@/components/ui/Container';
import CountriesSlider from '@/components/ui/CountriesSlider';
import TitleLinkDescription from '@/components/ui/TitleLinkDescription';
import countries from '@/data/countries';

import scss from './LowEmissionZone.module.scss';

const LowEmissionZone = () => {
    return (
        <section id="about" className={scss.lowEmissionZone}>
            <Container>
                <TitleLinkDescription
                    title="low emission zone"
                    description="Need to pay a toll? We've gathered all the information you need to make paying your toll simple and stress-free, just like driving on our roads."
                    link="#"
                    isLongTitle
                />

                <CountriesSlider
                    countries={countries}
                    title="low emission zone"
                    section="lowEmissionZone"
                />
            </Container>
        </section>
    );
};

export default LowEmissionZone;
