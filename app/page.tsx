import Advantages from '@/components/shared/Home/Advantages';
import FinesPayment from '@/components/shared/Home/FinesPayment';
import Hero from '@/components/shared/Home/Hero';
import LowEmissionZone from '@/components/shared/Home/LowEmissionZone';
import TollRoads from '@/components/shared/Home/TollRoads';

const HomePage = () => {
    return (
        <main>
            <Hero />
            <TollRoads />
            <Advantages />
            <LowEmissionZone />
            <FinesPayment />
        </main>
    );
};

export default HomePage;
