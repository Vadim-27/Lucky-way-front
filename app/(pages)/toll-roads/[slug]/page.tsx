import Categories from '@/components/shared/TollRoadsCountry/Categories';
import Hero from '@/components/shared/TollRoadsCountry/Hero';
import VehicleTypes from '@/components/shared/TollRoadsCountry/VehicleTypes';
import GeneralInformationSection from '@/components/ui/GeneralInformationSection';
import { getGeneralInformationById } from '@/data/generalInformationSection/generalInformationData';

const CountryPage = ({ params }: { params: { slug: string } }) => {
    const data = getGeneralInformationById(2);
    if (!data) {
        return <p>Data not found</p>;
    }
    return (
        <main>
            <Hero slug={params.slug} />
            <Categories />
            <VehicleTypes />
            <GeneralInformationSection sectionData={data} />
        </main>
    );
};

export default CountryPage;
