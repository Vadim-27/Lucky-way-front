import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import AdminInput from '@/components/ui/Admin/AdminInput';
import AdminTextarea from '@/components/ui/Admin/AdminTextarea';
import PrevText from '@/components/ui/Admin/PrevText';

import scss from './Hero.module.scss';

export interface IRegister<T extends FieldValues> {
    register: UseFormRegister<T>;
}

const Hero = <T extends FieldValues>({ register }: IRegister<T>) => {
    return (
        <section className={scss.hero}>
            <div className={scss.titleWrapper}>
                <AdminInput<T> register={register} name={'hero.title' as Path<T>} label="Title" />
                <PrevText>Start Your Easy Way with Company Name</PrevText>
            </div>

            <div className={scss.descriptionWrapper}>
                <AdminTextarea<T>
                    register={register}
                    name={'hero.description' as Path<T>}
                    label="description"
                />
                <PrevText>
                    Purchase vignettes for toll roads, explore green zones in cities, and pay fines
                    effortlessly. Travel smart, drive smoothly.
                </PrevText>
            </div>

            <div className={scss.buttonsWrapper}>
                <div className={scss.button}>
                    <AdminInput<T>
                        register={register}
                        name={'hero.buttonPrimary' as Path<T>}
                        label="Primary Button"
                    />
                    <PrevText>Get Started</PrevText>
                </div>
                <div className={scss.button}>
                    <AdminInput<T>
                        register={register}
                        name={'hero.buttonSecondary' as Path<T>}
                        label="Secondary Button"
                    />
                    <PrevText>Learn More</PrevText>
                </div>
            </div>
        </section>
    );
};

export default Hero;
