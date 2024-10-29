import { FieldValues, Path } from 'react-hook-form';

import AdminInput from '@/components/ui/Admin/AdminInput';
import AdminTextarea from '@/components/ui/Admin/AdminTextarea';
import PrevText from '@/components/ui/Admin/PrevText';

import { IRegister } from '../Hero';

import scss from './LowEmissionZone.module.scss';

const LowEmissionZone = <T extends FieldValues>({ register }: IRegister<T>) => {
    return (
        <section className={scss.lowEmissionZone}>
            <div className={scss.titleWrapper}>
                <AdminInput<T>
                    register={register}
                    name={'lowEmissionZone.title' as Path<T>}
                    label="Title"
                />
                <PrevText>low emission zone</PrevText>
            </div>

            <div className={scss.descriptionWrapper}>
                <AdminTextarea<T>
                    register={register}
                    name={'lowEmissionZone.description' as Path<T>}
                    label="description"
                />
                <PrevText>
                    Need to pay a toll? We&apos;ve gathered all the information you need to make
                    paying your toll simple and stress-free, just like driving on our roads.
                </PrevText>
            </div>
        </section>
    );
};

export default LowEmissionZone;
