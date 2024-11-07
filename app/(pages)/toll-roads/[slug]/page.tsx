import Categories from '@/components/shared/TollRoadsCountry/Categories';
import Hero from '@/components/shared/TollRoadsCountry/Hero';
import VehicleTypes from '@/components/shared/TollRoadsCountry/VehicleTypes';

const CountryPage = ({ params }: { params: { slug: string } }) => {
    return (
        <main>
            <Hero slug={params.slug} />
            <Categories />
            <VehicleTypes />
        </main>
    );
};

export default CountryPage;
