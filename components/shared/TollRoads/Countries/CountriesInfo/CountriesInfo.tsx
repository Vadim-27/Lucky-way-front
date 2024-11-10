import scss from './CountriesInfo.module.scss';

const CountriesInfo = () => {
    return (
        <section className={scss.countriesInfo}>
            <h2 className={scss.title}>Toll Roads</h2>
            <p className={scss.description}>
                Need to pay a toll? We&apos;ve gathered all the information you need to make paying
                your toll simple and stress-free, just like driving on our roads.
            </p>
        </section>
    );
};

export default CountriesInfo;
