import Hero from '@/components/shared/TollRoadsCountry/Hero';

const CountryPage = ({ params }: { params: { slug: string } }) => {
    return (
        <main>
            <Hero slug={params.slug} />
        </main>
    );
};

export default CountryPage;
