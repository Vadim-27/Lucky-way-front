import { Path } from 'react-hook-form';

import AdminButton from '@/components/ui/Admin/AdminButton';
import AdminInput from '@/components/ui/Admin/AdminInput';
import AdminTextarea from '@/components/ui/Admin/AdminTextarea';
import PrevText from '@/components/ui/Admin/PrevText';
import Form from '@/components/ui/Form';

import { ITollRoads } from '../TollRoads';

import scss from './Advantages.module.scss';

const Advantages = () => {
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

    const handleTitleSubmit = (data: ITollRoads, id: number) => {
        console.log(data, id);
    };

    const handleDescriptionSubmit = (data: ITollRoads, id: number) => {
        console.log(data, id);
    };

    return (
        <section className={scss.advantages}>
            <ul className={scss.advantagesList}>
                {advantagesData.map(({ id, title, description }) => (
                    <li key={title} className={scss.advantagesItem}>
                        <Form onSubmit={(data: ITollRoads) => handleTitleSubmit(data, id)}>
                            {(register, isSubmitting) => (
                                <div>
                                    <div>
                                        <AdminInput<ITollRoads>
                                            register={register}
                                            name={'title' as Path<ITollRoads>}
                                            label="Title"
                                        />
                                        <PrevText>{title}</PrevText>
                                    </div>
                                    <AdminButton loading={isSubmitting} />
                                </div>
                            )}
                        </Form>

                        <Form onSubmit={(data: ITollRoads) => handleDescriptionSubmit(data, id)}>
                            {(register, isSubmitting) => (
                                <div>
                                    <div>
                                        <AdminTextarea<ITollRoads>
                                            register={register}
                                            name={'description' as Path<ITollRoads>}
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

export default Advantages;
