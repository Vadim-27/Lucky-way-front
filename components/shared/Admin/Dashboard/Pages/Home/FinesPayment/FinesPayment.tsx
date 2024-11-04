import { Path } from 'react-hook-form';

import AdminButton from '@/components/ui/Admin/AdminButton';
import AdminInput from '@/components/ui/Admin/AdminInput';
import AdminTextarea from '@/components/ui/Admin/AdminTextarea';
import PrevText from '@/components/ui/Admin/PrevText';
import Form from '@/components/ui/Form';

import scss from './FinesPayment.module.scss';

interface IFinesPayment {
    title: string;
    description: string;
    button: string;
}

const FinesPayment = () => {
    const handleTitleSubmit = async (data: IFinesPayment) => {
        console.log(data);
    };

    const handleDescriptionSubmit = async (data: IFinesPayment) => {
        console.log(data);
    };

    const handleButtonSubmit = async (data: IFinesPayment) => {
        console.log(data);
    };
    return (
        <section className={scss.finesPayment}>
            <Form onSubmit={handleTitleSubmit}>
                {(register, isSubmitting) => (
                    <div className={scss.titleWrapper}>
                        <div>
                            <AdminInput<IFinesPayment>
                                register={register}
                                name={'title' as Path<IFinesPayment>}
                                label="Title"
                            />
                            <PrevText>payment of fines</PrevText>
                        </div>
                        <AdminButton loading={isSubmitting} />
                    </div>
                )}
            </Form>

            <Form onSubmit={handleDescriptionSubmit}>
                {(register, isSubmitting) => (
                    <div className={scss.descriptionWrapper}>
                        <div>
                            <AdminTextarea<IFinesPayment>
                                register={register}
                                name={'description' as Path<IFinesPayment>}
                                label="description"
                            />
                            <PrevText>
                                Quick and easy fine payments! Pay your fines in just a minute
                                through ours website – simple and convenient.
                            </PrevText>
                        </div>
                        <AdminButton loading={isSubmitting} />
                    </div>
                )}
            </Form>

            <Form onSubmit={handleButtonSubmit}>
                {(register, isSubmitting) => (
                    <div className={scss.buttonWrapper}>
                        <div>
                            <AdminTextarea<IFinesPayment>
                                register={register}
                                name={'button' as Path<IFinesPayment>}
                                label="Button"
                            />
                            <PrevText>Pay Now</PrevText>
                        </div>
                        <AdminButton loading={isSubmitting} />
                    </div>
                )}
            </Form>
        </section>
    );
};

export default FinesPayment;
