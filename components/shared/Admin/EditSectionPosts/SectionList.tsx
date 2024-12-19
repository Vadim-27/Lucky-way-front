import { FC, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { postActions } from '../../../../redux/slices/PostSlice';
import { RootState } from '../../../../redux/store';

import NewSectionModal from './NewSectionModal'; // Імпортуємо компонент модального вікна
import SectionForm from './SectionForm'; // Імпортуємо новий компонент

const SectionList: FC = () => {
    const { currentLangId } = useAppSelector((state: RootState) => state.lang);
    const { sections, createUpdateDeleteTriggerSection } = useAppSelector(
        (state: RootState) => state.posts
    );
    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false); // Стан для відображення модального вікна

    useEffect(() => {
        dispatch(postActions.getAllSections());
    }, [dispatch, currentLangId, createUpdateDeleteTriggerSection]);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="container-fluid">
            <Button onClick={handleShowModal} className="btn-success btn-sm">
                Створити нову секцію
            </Button>

            {sections.map((section) => (
                <div key={section.id} className="mb-4 rounded border p-3 shadow-sm">
                    <SectionForm section={section} />
                </div>
            ))}

            {/* Модальне вікно для створення нової секції */}
            <NewSectionModal show={showModal} handleClose={handleCloseModal} />
        </div>
    );
};

export default SectionList;
