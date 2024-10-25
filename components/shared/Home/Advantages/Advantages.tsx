import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import Container from '@/components/ui/Container';
import Icon, { IconVariant } from '@/components/ui/Icon';

import scss from './Advantages.module.scss';

const Advantages = () => {
    const t = useTranslations('Advantages');

    const advantagesData = [
        { icon: 'fast', title: t('fast.title'), description: t('fast.description') },
        { icon: 'use', title: t('use.title'), description: t('use.description') },
        { icon: 'directly', title: t('directly.title'), description: t('directly.description') },
        { icon: 'payments', title: t('payments.title'), description: t('payments.description') },
    ];
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
