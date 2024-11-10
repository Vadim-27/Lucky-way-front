import { FC } from 'react';

import Container from '../Container';

import ButtonsGroup from './ButtonsGroup';

import scss from './HeroCustom.module.scss';

interface IHeroCustom {
    title?: string;
    description?: string;
    bgImage: string;
}

const HeroCustom: FC<IHeroCustom> = ({ title, description, bgImage }) => {
    return (
        <section className={scss.hero} style={{ backgroundImage: bgImage }} id="hero">
            <Container>
                <div className={scss.wrapper}>
                    <h1 className={scss.title}>{title}</h1>
                    <p className={scss.description}>{description}</p>

                    <ButtonsGroup />
                </div>
            </Container>
        </section>
    );
};

export default HeroCustom;
