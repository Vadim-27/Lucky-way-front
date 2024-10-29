import { FieldValues, Path } from 'react-hook-form';

import AdminInput from '@/components/ui/Admin/AdminInput';
import AdminTextarea from '@/components/ui/Admin/AdminTextarea';
import PrevText from '@/components/ui/Admin/PrevText';

import { IRegister } from '../Hero';

import scss from './ServicesHighlights.module.scss';

const ServicesHighlights = <T extends FieldValues>({ register }: IRegister<T>) => {
    const servicesData = [
        {
            id: 1,
            title: 'Toll roads',
            description:
                'Purchase vignettes for toll roads, explore green zones in cities, and pay fines effortlessly. Travel smart, drive smoothly.',
        },
        {
            id: 2,
            title: 'Low Emission Zone',
            description:
                'Purchase vignettes for toll roads, explore green zones in cities, and pay fines effortlessly. Travel smart, drive smoothly.',
        },
        {
            id: 3,
            title: 'Payment of Fines',
            description:
                'Purchase vignettes for toll roads, explore green zones in cities, and pay fines effortlessly. Travel smart, drive smoothly.',
        },
    ];
    return (
        <section className={scss.servicesHighlights}>
            <ul className={scss.servicesHighlightsList}>
                {servicesData.map(({ id, title, description }) => (
                    <li key={title} className={scss.servicesHighlightsItem}>
                        <div>
                            <AdminInput<T>
                                register={register}
                                name={`serviceHighlights[${id}].title` as Path<T>}
                                label="Title"
                            />
                            <PrevText>{title}</PrevText>
                        </div>

                        <div>
                            <AdminTextarea<T>
                                register={register}
                                name={`serviceHighlights[${id}].description` as Path<T>}
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

export default ServicesHighlights;
