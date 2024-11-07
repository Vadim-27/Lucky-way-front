import { FC } from 'react';
import clsx from 'clsx';

import Container from '../Container';
import Icon, { IconVariant } from '../Icon';

import scss from './CategoriesList.module.scss';

interface ICategoriesList {
    data: {
        icon: string;
        title: string;
        description: string;
    }[];
}

const CategoriesList: FC<ICategoriesList> = ({ data }) => {
    return (
        <section className={scss.serviceHighlights}>
            <Container>
                <ul className={scss.serviceHighlightsList}>
                    {data.map(({ icon, title, description }) => (
                        <li key={title} className={scss.serviceHighlightsItem}>
                            <div className={scss.iconWrapper}>
                                <Icon
                                    variant={icon as IconVariant}
                                    className={clsx(
                                        scss.icon,
                                        (icon === 'toll-roads' || icon === 'low-emission-zone') &&
                                            scss.iconFill
                                    )}
                                />
                            </div>

                            <h3 className={scss.title}>{title}</h3>
                            <p className={scss.description}>{description}</p>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default CategoriesList;
