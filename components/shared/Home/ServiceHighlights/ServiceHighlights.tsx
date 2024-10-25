import clsx from 'clsx';

import Container from '@/components/ui/Container';
import Icon, { IconVariant } from '@/components/ui/Icon';

import servicesData from './servicesData.json';

import scss from './ServiceHighlights.module.scss';

const ServiceHighlights = () => {
    return (
        <section className={scss.serviceHighlights}>
            <Container>
                <ul className={scss.serviceHighlightsList}>
                    {servicesData.map(({ icon, title, description }) => (
                        <li key={title} className={scss.serviceHighlightsItem}>
                            <div className={scss.iconWrapper}>
                                <Icon
                                    variant={icon as IconVariant}
                                    className={clsx(
                                        scss.icon,
                                        icon === 'payment-of-fines' && scss.iconStroke
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

export default ServiceHighlights;
