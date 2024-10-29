import { FieldValues, Path } from 'react-hook-form';

import AdminInput from '@/components/ui/Admin/AdminInput';
import AdminTextarea from '@/components/ui/Admin/AdminTextarea';
import PrevText from '@/components/ui/Admin/PrevText';

import { IRegister } from '../Hero';

import scss from './Advantages.module.scss';

const Advantages = <T extends FieldValues>({ register }: IRegister<T>) => {
    const advantagesData = [
        {
            id: 1,
            title: 'Fast and convenient',
            description: 'Avoid the hassle of stopping at rest areas and waiting in line.',
        },
        {
            id: 2,
            title: 'Immediate use',
            description: 'E-vignettes are active right away and can be purchased just before.',
        },
        {
            id: 3,
            title: 'Directly on your phone',
            description: 'Buy the e-vignette on your mobile while still on the road.',
        },
        {
            id: 4,
            title: 'Safe online payments',
            description: 'Our Flex Vignette lets you adjust the start date later if needed.',
        },
    ];
    return (
        <section className={scss.advantages}>
            <ul className={scss.advantagesList}>
                {advantagesData.map(({ id, title, description }) => (
                    <li key={title} className={scss.advantagesItem}>
                        <div>
                            <AdminInput<T>
                                register={register}
                                name={`advantages[${id}].title` as Path<T>}
                                label="Title"
                            />
                            <PrevText>{title}</PrevText>
                        </div>

                        <div>
                            <AdminTextarea<T>
                                register={register}
                                name={`advantages[${id}].description` as Path<T>}
                                label="Description"
                            />
                            <PrevText>{description}</PrevText>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Advantages;
