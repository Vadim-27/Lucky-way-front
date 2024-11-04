import { Path } from 'react-hook-form';

import AdminButton from '@/components/ui/Admin/AdminButton';
import AdminInput from '@/components/ui/Admin/AdminInput';
import AdminTextarea from '@/components/ui/Admin/AdminTextarea';
import PrevText from '@/components/ui/Admin/PrevText';
import Form from '@/components/ui/Form';

import scss from './TollRoads.module.scss';

export interface ITollRoads {
    title: string;
    description: string;
}

const TollRoads = () => {
    const handleTitleSubmit = (data: ITollRoads) => {
        console.log(data);
    };

    const handleDescriptionSubmit = (data: ITollRoads) => {
        console.log(data);
    };

    return (
        <section className={scss.tollRoads}>
            <Form onSubmit={handleTitleSubmit}>
                {(register, isSubmitting) => (
                    <div className={scss.titleWrapper}>
                        <div>
                            <AdminInput<ITollRoads>
                                register={register}
                                name={'title' as Path<ITollRoads>}
                                label="Title"
                            />
                            <PrevText>Toll roads</PrevText>
                        </div>
                        <AdminButton loading={isSubmitting} />
                    </div>
                )}
            </Form>

            <Form onSubmit={handleDescriptionSubmit}>
                {(register, isSubmitting) => (
                    <div className={scss.descriptionWrapper}>
                        <div>
                            <AdminTextarea<ITollRoads>
                                register={register}
                                name={'description' as Path<ITollRoads>}
                                label="description"
                            />
                            <PrevText>
                                Need to pay a toll? We&apos;ve gathered all the information you need
                                to make paying your toll simple and stress-free, just like driving
                                on our roads.
                            </PrevText>
                        </div>
                        <AdminButton loading={isSubmitting} />
                    </div>
                )}
            </Form>
        </section>
    );
};

export default TollRoads;
