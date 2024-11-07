import Container from '@/components/ui/Container';
import TitleLinkDescription from '@/components/ui/TitleLinkDescription';

import VehicleTypesList from './VehicleTypesList';

import scss from './VehicleTypes.module.scss';

const VehicleTypes = () => {
    return (
        <section className={scss.vehicleTypes}>
            <Container>
                <TitleLinkDescription
                    title="Cost calculation"
                    description="The price is determined by three factors: vehicle class, highway section type (plain or mountainous), and the operating company."
                />

                <VehicleTypesList />
            </Container>
        </section>
    );
};

export default VehicleTypes;
