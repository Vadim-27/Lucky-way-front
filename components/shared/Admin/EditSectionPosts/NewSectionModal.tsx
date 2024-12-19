import { FC } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';

import { useAppDispatch } from '../../../../hooks/hooks';
import { postActions } from '../../../../redux/slices/PostSlice';

interface NewSectionModalProps {
    show: boolean;
    handleClose: () => void;
}

const NewSectionModal: FC<NewSectionModalProps> = ({ show, handleClose }) => {
    const dispatch = useAppDispatch();
    const { control, handleSubmit } = useForm();

    const handleCreateSection = (data: any) => {
        // Формуємо об'єкт для створення нової секції
        const newSection = {
            name: data.name,
            translations: [
                {
                    languageId: 1, // Можна додавати динамічно або зберігати в state
                    title: data.title,
                    description: data.description,
                },
            ],
        };

        // Викликаємо дію для створення секції
        dispatch(postActions.createSection(newSection)); // Дія для створення секції
        dispatch(postActions.setCreateUpdateDeleteTriggerSection());
        handleClose(); // Закриваємо модальне вікно після успішного створення
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Створити нову секцію</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(handleCreateSection)}>
                    <Form.Group className="mb-3" controlId="formSectionName">
                        <Form.Label>Назва секції</Form.Label>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Form.Control {...field} type="text" placeholder="Назва секції" />
                            )}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSectionTitle">
                        <Form.Label>Заголовок</Form.Label>
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => (
                                <Form.Control {...field} type="text" placeholder="Заголовок" />
                            )}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formSectionDescription">
                        <Form.Label>Опис</Form.Label>
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <Form.Control
                                    {...field}
                                    as="textarea"
                                    rows={3}
                                    placeholder="Опис"
                                />
                            )}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Створити секцію
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default NewSectionModal;
