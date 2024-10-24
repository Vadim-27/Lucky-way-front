import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

import scss from './FinesPayment.module.scss';

const FinesPayment = () => {
    return (
        <section className={scss.finesPayment}>
            <Container className={scss.container}>
                <div className={scss.wrapper}>
                    <div className={scss.line}></div>

                    <h3 className={scss.title}>payment of fines</h3>
                    <p className={scss.description}>
                        Quick and easy fine payments! Pay your fines in just a minute through ours
                        website – simple and convenient.
                    </p>

                    <div className={scss.buttonWrapper}>
                        <Button variant="primary">Pay Now</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FinesPayment;
