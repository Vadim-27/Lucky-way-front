import { useTranslations } from 'next-intl';

import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

import scss from './FinesPayment.module.scss';

const FinesPayment = () => {
    const t = useTranslations('FinesPayment');

    return (
        <section className={scss.finesPayment}>
            <Container className={scss.container}>
                <div className={scss.wrapper}>
                    <div className={scss.line}></div>

                    <h3 className={scss.title}>{t('title')}</h3>
                    <p className={scss.description}>{t('description')}</p>

                    <div className={scss.buttonWrapper}>
                        <Button variant="primary">{t('button')}</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FinesPayment;
