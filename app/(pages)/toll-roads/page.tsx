import Countries from '@/components/shared/TollRoads/Countries';
import Hero from '@/components/shared/TollRoads/Hero';
import GeneralInformationSection from '@/components/ui/GeneralInformationSection';
import { getGeneralInformationById } from '@/data/generalInformationSection/generalInformationData';

const TollRoads = () => {
    const data = getGeneralInformationById(2);
    if (!data) {
        return <p>Data not found</p>;
    }
    return (
        <main>
            <Hero />
            <Countries />
            <GeneralInformationSection sectionData={data} />
        </main>
    );
};

export default TollRoads;
