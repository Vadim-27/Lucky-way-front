import { ChangeEvent, useEffect, useState } from 'react';
import { Path } from 'react-hook-form';

import AdminButton from '@/components/ui/Admin/AdminButton';
import AdminInput from '@/components/ui/Admin/AdminInput';
import AdminTextarea from '@/components/ui/Admin/AdminTextarea';
import PrevText from '@/components/ui/Admin/PrevText';
import Form from '@/components/ui/Form';
import { getLanguages } from '@/services/languages.api';
import { getHomeHeroText, updateHomeHeroText } from '@/services/translation/home';
import { ILanguage } from '@/types/languages.types';
import { ISection, ITranslation } from '@/types/sections.types';

import {
    buttonPrimaryValidationSchema,
    buttonSecondaryValidationSchema,
    descriptionValidationSchema,
    titleValidationSchema,
} from './heroValidationSchema';

import scss from './Hero.module.scss';

interface IHeroData {
    title?: string;
    description?: string;
    buttonPrimary?: string;
    buttonSecondary?: string;
    languageId?: number;
}

const Hero = () => {
    const [languages, setLanguages] = useState<ILanguage[]>([]);
    const [hero, setHero] = useState<ISection>();
    const [selectedLanguageId, setSelectedLanguageId] = useState<number>(1);

    useEffect(() => {
        const fetchLanguages = async () => {
            const languages = await getLanguages();
            setLanguages(languages);
        };
        fetchLanguages();
    }, []);

    useEffect(() => {
        const fetchHero = async () => {
            const hero = await getHomeHeroText();
            setHero(hero);
        };
        fetchHero();
    }, []);

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguageId(Number(e.target.value));
    };

    const currentTranslation: ITranslation | undefined = hero?.translations.find(
        (t) => t.languageId === selectedLanguageId
    );

    const handleTitleSubmit = async (data: IHeroData) => {
        const normalizeData: ISection = {
            translations: [
                {
                    languageId: Number(data.languageId),
                    title: data.title,
                },
            ],
        };

        await updateHomeHeroText(normalizeData);

        const hero = await getHomeHeroText();
        setHero(hero);

        console.log(normalizeData);
    };

    const handleDescriptionSubmit = async (data: IHeroData) => {
        const normalizeData: ISection = {
            translations: [
                {
                    languageId: Number(data.languageId),
                    description: data.description,
                },
            ],
        };

        await updateHomeHeroText(normalizeData);

        const hero = await getHomeHeroText();
        setHero(hero);

        console.log(normalizeData);
    };

    const handlePrimaryButtonSubmit = async (data: IHeroData) => {
        console.log(data);
    };

    const handleSecondaryButtonSubmit = async (data: IHeroData) => {
        console.log(data);
    };

    return (
        <section className={scss.hero}>
            <Form onSubmit={handleTitleSubmit} validationSchema={titleValidationSchema}>
                {(register, isSubmitting, errors) => (
                    <div>
                        {languages && languages.length > 0 && (
                            <select
                                id="languageId"
                                {...register('languageId' as Path<IHeroData>)}
                                onChange={handleLanguageChange}
                                className={scss.select}
                            >
                                {languages.map((lang) => (
                                    <option key={lang.id} value={lang.id}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                        )}
                        <div className={scss.titleWrapper}>
                            <AdminInput<IHeroData>
                                register={register}
                                errors={errors}
                                name={'title' as Path<IHeroData>}
                                label="Title"
                            />
                            <PrevText>{currentTranslation?.title}</PrevText>
                        </div>

                        <AdminButton loading={isSubmitting} />
                    </div>
                )}
            </Form>

            <Form onSubmit={handleDescriptionSubmit} validationSchema={descriptionValidationSchema}>
                {(register, isSubmitting, errors) => (
                    <div>
                        {languages && languages.length > 0 && (
                            <select
                                id="languageId"
                                {...register('languageId' as Path<IHeroData>)}
                                onChange={handleLanguageChange}
                                className={scss.select}
                            >
                                {languages.map((lang) => (
                                    <option key={lang.id} value={lang.id}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                        )}
                        <div className={scss.descriptionWrapper}>
                            <AdminTextarea<IHeroData>
                                register={register}
                                errors={errors}
                                name={'description' as Path<IHeroData>}
                                label="description"
                            />
                            <PrevText>{currentTranslation?.description}</PrevText>
                        </div>
                        <AdminButton loading={isSubmitting} />
                    </div>
                )}
            </Form>

            <div className={scss.buttonsWrapper}>
                <Form
                    onSubmit={handlePrimaryButtonSubmit}
                    validationSchema={buttonPrimaryValidationSchema}
                    className={scss.button}
                >
                    {(register, isSubmitting, errors) => (
                        <div>
                            <div className={scss.wrapper}>
                                <AdminInput<IHeroData>
                                    register={register}
                                    errors={errors}
                                    name={'buttonPrimary' as Path<IHeroData>}
                                    label="Primary Button"
                                />
                                <PrevText>Get Started</PrevText>
                            </div>
                            <AdminButton loading={isSubmitting} />
                        </div>
                    )}
                </Form>

                <Form
                    onSubmit={handleSecondaryButtonSubmit}
                    validationSchema={buttonSecondaryValidationSchema}
                    className={scss.button}
                >
                    {(register, isSubmitting, errors) => (
                        <div>
                            <div className={scss.wrapper}>
                                <AdminInput<IHeroData>
                                    register={register}
                                    errors={errors}
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
