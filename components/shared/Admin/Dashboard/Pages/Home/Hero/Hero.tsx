import { Path } from 'react-hook-form';

import AdminButton from '@/components/ui/Admin/AdminButton';
import AdminInput from '@/components/ui/Admin/AdminInput';
import AdminTextarea from '@/components/ui/Admin/AdminTextarea';
import PrevText from '@/components/ui/Admin/PrevText';
import Form from '@/components/ui/Form';

import scss from './Hero.module.scss';

interface IHeroData {
    title?: string;
    description?: string;
    buttonPrimary?: string;
    buttonSecondary?: string;
}

const Hero = () => {
    const handleTitleSubmit = async (data: IHeroData) => {
        console.log(data);
    };

    const handleDescriptionSubmit = async (data: IHeroData) => {
        console.log(data);
    };

    const handlePrimaryButtonSubmit = async (data: IHeroData) => {
        console.log(data);
    };

    const handleSecondaryButtonSubmit = async (data: IHeroData) => {
        console.log(data);
    };

    return (
        <section className={scss.hero}>
            <Form onSubmit={handleTitleSubmit}>
                {(register, isSubmitting) => (
                    <div>
                        <div className={scss.titleWrapper}>
                            <AdminInput<IHeroData>
                                register={register}
                                name={'title' as Path<IHeroData>}
                                label="Title"
                            />
                            <PrevText>Start Your Easy Way with Company Name</PrevText>
                        </div>

                        <AdminButton loading={isSubmitting} />
                    </div>
                )}
            </Form>

            <Form onSubmit={handleDescriptionSubmit}>
                {(register, isSubmitting) => (
                    <div>
                        <div className={scss.descriptionWrapper}>
                            <AdminTextarea<IHeroData>
                                register={register}
                                name={'description' as Path<IHeroData>}
                                label="description"
                            />
                            <PrevText>
                                Purchase vignettes for toll roads, explore green zones in cities,
                                and pay fines effortlessly. Travel smart, drive smoothly.
                            </PrevText>
                        </div>
                        <AdminButton loading={isSubmitting} />
                    </div>
                )}
            </Form>

            <div className={scss.buttonsWrapper}>
                <Form onSubmit={handlePrimaryButtonSubmit} className={scss.button}>
                    {(register, isSubmitting) => (
                        <div>
                            <div className={scss.wrapper}>
                                <AdminInput<IHeroData>
                                    register={register}
                                    name={'buttonPrimary' as Path<IHeroData>}
                                    label="Primary Button"
                                />
                                <PrevText>Get Started</PrevText>
                            </div>
                            <AdminButton loading={isSubmitting} />
                        </div>
                    )}
                </Form>

                <Form onSubmit={handleSecondaryButtonSubmit} className={scss.button}>
                    {(register, isSubmitting) => (
                        <div>
                            <div className={scss.wrapper}>
                                <AdminInput<IHeroData>
                                    register={register}
                                    name={'buttonSecondary' as Path<IHeroData>}
                                    label="Secondary Button"
                                />
                                <PrevText>Learn More</PrevText>
                            </div>
                            <AdminButton loading={isSubmitting} />
                        </div>
                    )}
                </Form>
            </div>
        </section>
    );
};

export default Hero;
