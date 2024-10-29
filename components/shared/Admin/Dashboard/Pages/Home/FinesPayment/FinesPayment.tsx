import { FieldValues, Path } from 'react-hook-form';

import AdminInput from '@/components/ui/Admin/AdminInput';
import AdminTextarea from '@/components/ui/Admin/AdminTextarea';
import PrevText from '@/components/ui/Admin/PrevText';

import { IRegister } from '../Hero';

import scss from './FinesPayment.module.scss';

const FinesPayment = <T extends FieldValues>({ register }: IRegister<T>) => {
    return (
        <section className={scss.finesPayment}>
            <div className={scss.titleWrapper}>
                <AdminInput<T>
                    register={register}
                    name={'finesPayment.title' as Path<T>}
                    label="Title"
                />
                <PrevText>payment of fines</PrevText>
            </div>

            <div className={scss.descriptionWrapper}>
                <AdminTextarea<T>
                    register={register}
                    name={'finesPayment.description' as Path<T>}
                    label="description"
                />
                <PrevText>
                    Quick and easy fine payments! Pay your fines in just a minute through ours
                    website – simple and convenient.
                </PrevText>
            </div>

            <div className={scss.buttonWrapper}>
                <AdminTextarea<T>
                    register={register}
                    name={'finesPayment.button' as Path<T>}
                    label="Primary Button"
                />
                <PrevText>Pay Now</PrevText>
            </div>
        </section>
    );
};

export default FinesPayment;
