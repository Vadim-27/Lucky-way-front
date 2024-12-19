'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Замість роутера, якщо ви використовуєте новий API

import PostList from '../../../../../../components/shared/Admin/EditSectionPosts/PostList';
import { useAppSelector } from '../../../../../../hooks/hooks';
import { RootState } from '../../../../../../redux/store';

const PostsPage = () => {
    const { currentLangId } = useAppSelector((state: RootState) => state.lang);
    const [sectionId, setSectionId] = useState<string | undefined>(undefined);

    const { sectionId: routeSectionId } = useParams(); // Використовуємо useParams для доступу до параметрів маршруту

    useEffect(() => {
        if (routeSectionId) {
            setSectionId(routeSectionId); // Збережемо sectionId
        }
    }, [routeSectionId]); // Викликається, коли routeSectionId змінюється

    return (
        <div>
            <h1>Редагування Постів до секції {sectionId}</h1>
            {sectionId ? (
                <PostList key={currentLangId} sectionId={+sectionId} />
            ) : (
                <p>Завантаження...</p>
            )}
        </div>
    );
};

export default PostsPage;
