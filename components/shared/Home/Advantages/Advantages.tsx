import clsx from 'clsx';

import Container from '@/components/ui/Container';
import Icon, { IconVariant } from '@/components/ui/Icon';

import advantagesData from './advantagesData.json';

import scss from './Advantages.module.scss';

const Advantages = () => {
    return (
        <section className={scss.advantages}>
            <Container>
                <ul className={scss.advantagesList}>
                    {advantagesData.map(({ icon, title, description }) => (
                        <li key={title} className={scss.advantagesItem}>
                            <div>
                                <div className={scss.iconWrapper}>
                                    <Icon
                                        variant={icon as IconVariant}
                                        className={clsx(
                                            scss.iconStroke,
                                            (icon === 'directly' || icon === 'payments') &&
                                                scss.iconFill
                                        )}
                                    />
                                </div>

                                <h3 className={scss.title}>{title}</h3>
                                <p className={scss.description}>{description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
};

export default Advantages;
