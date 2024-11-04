import { Path } from 'react-hook-form';

import AdminButton from '@/components/ui/Admin/AdminButton';
import AdminInput from '@/components/ui/Admin/AdminInput';
import AdminTextarea from '@/components/ui/Admin/AdminTextarea';
import PrevText from '@/components/ui/Admin/PrevText';
import Form from '@/components/ui/Form';

import scss from './ServicesHighlights.module.scss';

interface IServicesHighlightsData {
    title?: string;
    description?: string;
}

const ServicesHighlights = () => {
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

    const handleTitleSubmit = (data: IServicesHighlightsData, id: number) => {
        console.log(data, id);
    };

    const handleDescriptionSubmit = (data: IServicesHighlightsData, id: number) => {
        console.log(data, id);
    };

    return (
        <section className={scss.servicesHighlights}>
            <ul className={scss.servicesHighlightsList}>
                {servicesData.map(({ id, title, description }) => (
                    <li key={title} className={scss.servicesHighlightsItem}>
                        <Form
                            onSubmit={(data: IServicesHighlightsData) => {
                                handleTitleSubmit(data, id);
                            }}
                        >
                            {(register, isSubmitting) => (
                                <div>
                                    <div className={scss.wrapper}>
                                        <AdminInput<IServicesHighlightsData>
                                            register={register}
                                            name={'title' as Path<IServicesHighlightsData>}
                                            label="Title"
                                        />
                                        <PrevText>{title}</PrevText>
                                    </div>
                                    <AdminButton loading={isSubmitting} />
                                </div>
                            )}
                        </Form>

                        <Form
                            onSubmit={(data: IServicesHighlightsData) => {
                                handleDescriptionSubmit(data, id);
                            }}
                        >
                            {(register, isSubmitting) => (
                                <div>
                                    <div className={scss.wrapper}>
                                        <AdminTextarea<IServicesHighlightsData>
                                            register={register}
                                            name={'description' as Path<IServicesHighlightsData>}
                                            label="Description"
                                        />
                                        <PrevText>{description}</PrevText>
                                    </div>
                                    <AdminButton loading={isSubmitting} />
                                </div>
                            )}
                        </Form>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ServicesHighlights;
