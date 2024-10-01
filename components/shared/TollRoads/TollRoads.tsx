import Container from '@/components/ui/Container';

import TollRoadsInfo from './TollRoadsInfo';
import TollRoadsList from './TollRoadsList';

import scss from './TollRoads.module.scss';

const TollRoads = () => {
    return (
        <section className={scss.tollRoads}>
            <Container>
                <TollRoadsInfo />
            </Container>
            <TollRoadsList />
        </section>
    );
};

export default TollRoads;