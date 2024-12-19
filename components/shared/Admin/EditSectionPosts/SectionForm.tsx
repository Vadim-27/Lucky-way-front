'use client';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify'; // Імпортуємо toast
import { useRouter } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { postActions } from '../../../../redux/slices/PostSlice';
import { RootState } from '../../../../redux/store';
import { ISection } from '../../../../types/all.types';

import 'react-toastify/dist/ReactToastify.css'; // Стилі для toast

interface SectionFormProps {
    section: ISection;
}

const SectionForm: FC<SectionFormProps> = ({ section }) => {
    const { currentLangId } = useAppSelector((state: RootState) => state.lang);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(false); // Стан для відображення процесу

    const handleUpdate = async (data: any) => {
        setIsLoading(true); // Починаємо завантаження
        const updatedData = {
            name: data.name,
            translations: [
                {
                    id: data.translationId,
                    languageId: +currentLangId,
                    title: data.title,
                    description: data.description,
                },
            ],
        };

        try {
            // Викликаємо дію оновлення
            if (section.id)
                await dispatch(
                    postActions.updateSectionById({ id: section.id, data: updatedData })
                );

            toast.success('Секцію успішно оновлено!'); // Успішне оновлення
            dispatch(postActions.setCreateUpdateDeleteTriggerSection());
        } catch (error) {
            console.log(error);
            toast.error('Сталася помилка при оновленні секції. Спробуйте ще раз.'); // Помилка
        } finally {
            setIsLoading(false); // Завершуємо завантаження
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Ви впевнені, що хочете видалити цю секцію?')) {
            try {
                // Викликаємо дію для видалення секції
                if (section.id) await dispatch(postActions.deleteSectionById(section.id));
                toast.success('Секцію успішно видалено!'); // Успішне видалення
                dispatch(postActions.setCreateUpdateDeleteTriggerSection());
            } catch (error) {
                console.log(error);
                toast.error('Сталася помилка при видаленні секції. Спробуйте ще раз.'); // Помилка
            }
        }
    };

    const handleNavigate = () => {
        router.replace(`posts/${section.id}`);
    };

    const { control, handleSubmit, setValue } = useForm();

    // Запис значень у form
    const translation = section.translations.find(
        (t) => String(t.languageId) === String(currentLangId)
    );

    return (
        <>
            <form onSubmit={handleSubmit(handleUpdate)} className="row">
                <div className="col-12 mb-3">
                    <label className="form-label">Назва Секції: {section.id}</label>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue={section.name}
                        render={({ field }) => (
                            <input {...field} type="text" className="form-control w-100" />
                        )}
                    />
                </div>

                <div className="col-12 mb-3">
                    <label className="form-label">Заголовок:</label>
                    <Controller
                        name="title"
                        control={control}
                        defaultValue={translation?.title || ''}
                        render={({ field }) => (
                            <input {...field} type="text" className="form-control w-100" />
                        )}
                    />
                </div>

                <div className="col-12 mb-3">
                    <label className="form-label">Опис:</label>
                    <Controller
                        name="description"
                        control={control}
                        defaultValue={translation?.description}
                        render={({ field }) => (
                            <textarea {...field} className="form-control w-100" rows={4} />
                        )}
                    />
                </div>

                <input type="hidden" value={section.id} {...setValue('sectionId', section?.id)} />
                <input
                    type="hidden"
                    value={translation?.id}
                    {...setValue('translationId', translation?.id)}
                />

                {/* Контейнер для кнопок */}
                <div className="d-flex justify-content-start gap-2">
                    <button type="submit" className="btn btn-primary btn-sm" disabled={isLoading}>
                        {isLoading ? 'Оновлюю...' : 'Оновити Секцію'}
                    </button>

                    {/* Кнопка для видалення секції */}
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={handleDelete}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Видаляю...' : 'Видалити Секцію'}
                    </button>
                </div>
            </form>
            <button className="btn btn-info btn-sm" onClick={handleNavigate}>
                {'Переглянути пости до секції'}
            </button>
        </>
    );
};

export default SectionForm;
