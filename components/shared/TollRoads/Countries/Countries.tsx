import Container from '@/components/ui/Container';
import CountriesList from '@/components/ui/CountriesList';
import countries from '@/data/countries';

import CountriesInfo from './CountriesInfo';

import scss from './Countries.module.scss';

const Countries = () => {
    return (
        <section className={scss.countries}>
            <Container>
                <CountriesInfo />

                <CountriesList countries={countries} />
            </Container>
        </section>
    );
};

export default Countries;
