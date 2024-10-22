import Container from '@/components/ui/Container';
import TitleLinkDescription from '@/components/ui/TitleLinkDescription';

import TollRoadsList from './TollRoadsList';

import scss from './TollRoads.module.scss';

const TollRoads = () => {
    return (
        <section id="about" className={scss.tollRoads}>
            <Container>
                <TitleLinkDescription
                    title="Toll roads"
                    description="Need to pay a toll? We've gathered all the information you need to make paying
                your toll simple and stress-free, just like driving on our roads."
                    link="/"
                />

                <TollRoadsList />
            </Container>
        </section>
    );
};

export default TollRoads;
