import { FC, useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { postActions } from '../../../../redux/slices/PostSlice';
import { RootState } from '../../../../redux/store';
import { IImage } from '../../../../types/all.types';

interface PostModalProps {
    show: boolean;
    onClose: () => void;
    sectionId: number;
    post?: any;
}

const PostModal: FC<PostModalProps> = ({ show, onClose, sectionId, post }) => {
    const dispatch = useAppDispatch();
    const { languages, currentLangId } = useAppSelector((state: RootState) => state.lang);
    const [formData, setFormData] = useState<any>(initializeFormData());

    useEffect(() => {
        setFormData(initializeFormData());
    }, [post, sectionId, currentLangId]);

    function initializeFormData() {
        return post
            ? {
                  ...post,
                  translations: post.translations.map((t: any) => ({
                      ...t,
                      language_id: +t.language_id || +currentLangId,
                  })),
                  images: post.images.map((img: IImage) => ({ id: img.id, url: img.url })),
              }
            : {
                  country_id: 0,
                  section_id: sectionId,
                  translations: [
                      {
                          language_id: +currentLangId,
                          title: '',
                          description: '',
                          post_id: post?.id,
                      },
                  ],
                  images: [{ id: '', url: '' }],
              };
    }

    const updateField = (key: string, value: any) =>
        setFormData((prev) => ({ ...prev, [key]: value }));

    const handleTranslationChange = (index: number, field: string, value: any) => {
        setFormData((prev) => {
            const translations = [...prev.translations];
            translations[index] = { ...translations[index], [field]: value };
            return { ...prev, translations };
        });
    };

    const handleImageChange = (index: number, url: string) => {
        setFormData((prev) => {
            const images = [...prev.images];
            images[index].url = url;
            return { ...prev, images };
        });
    };

    const handleImageDelete = async (id: number) => {
        await dispatch(postActions.deleteImageById(id));
        setFormData((prev) => ({
            ...prev,
            images: prev.images.filter((img: IImage) => img.id !== id),
        }));
    };

    const handleSubmit = async () => {
        if (post) {
            await dispatch(postActions.updatePostById({ id: post.id, data: formData }));
            for (const image of formData.images) {
                if (image.id) {
                    await dispatch(postActions.updateImageOfPost({ id: image.id, url: image.url }));
                } else if (image.url) {
                    await dispatch(
                        postActions.addImageToPost({ url: image.url, post_id: post?.id || 0 })
                    );
                }
            }
        } else {
            const images = formData.images.map((img) => img.url);
            await dispatch(postActions.createPost({ ...formData, images }));
        }

        dispatch(postActions.setCreateUpdateDeleteTriggerSection());
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{post ? 'Редагувати пост' : 'Додати новий пост'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Country ID</Form.Label>
                        <Form.Control
                            type="number"
                            value={formData.country_id}
                            onChange={(e) => updateField('country_id', +e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Section ID</Form.Label>
                        <Form.Control
                            type="number"
                            value={formData.section_id}
                            onChange={(e) => updateField('section_id', +e.target.value)}
                        />
                    </Form.Group>

                    {formData.translations.map((translation: any, index: number) => (
                        <div key={index} className="mb-3">
                            <Form.Group>
                                <Form.Label>Мова</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={translation.language_id}
                                    onChange={(e) =>
                                        handleTranslationChange(
                                            index,
                                            'language_id',
                                            +e.target.value
                                        )
                                    }
                                >
                                    <option value="">Оберіть мову</option>
                                    {languages.map((lang) => (
                                        <option key={lang.id} value={lang.id}>
                                            {lang.name} ({lang.label})
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Заголовок</Form.Label>
                                <Form.Control
                                    value={translation.title}
                                    onChange={(e) =>
                                        handleTranslationChange(index, 'title', e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Опис</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    value={translation.description}
                                    onChange={(e) =>
                                        handleTranslationChange(
                                            index,
                                            'description',
                                            e.target.value
                                        )
                                    }
                                />
                            </Form.Group>
                            <Button
                                variant="danger"
                                onClick={() => handleTranslationChange(index, 'id', null)}
                            >
                                Видалити переклад
                            </Button>
                        </div>
                    ))}

                    <Button
                        variant="secondary"
                        onClick={() =>
                            setFormData((prev) => ({
                                ...prev,
                                translations: [
                                    ...prev.translations,
                                    {
                                        language_id: +currentLangId,
                                        title: '',
                                        description: '',
                                        post_id: post?.id,
                                    },
                                ],
                            }))
                        }
                    >
                        Додати переклад
                    </Button>

                    <Form.Group>
                        <Form.Label>Зображення</Form.Label>
                        {formData.images.map((image: IImage, index: number) => (
                            <div key={index} className="d-flex mb-2">
                                <Form.Control
                                    type="text"
                                    value={image.url}
                                    onChange={(e) => handleImageChange(index, e.target.value)}
                                    placeholder={`Зображення ${index + 1}`}
                                />
                                {image.id && (
                                    <Button
                                        variant="danger"
                                        onClick={() => handleImageDelete(image.id)}
                                        className="ms-2"
                                    >
                                        Видалити
                                    </Button>
                                )}
                            </div>
                        ))}
                        <Button
                            variant="secondary"
                            onClick={() =>
                                setFormData((prev) => ({
                                    ...prev,
                                    images: [...prev.images, { id: '', url: '' }],
                                }))
                            }
                        >
                            Додати зображення
                        </Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Закрити
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {post ? 'Зберегти зміни' : 'Додати'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PostModal;
