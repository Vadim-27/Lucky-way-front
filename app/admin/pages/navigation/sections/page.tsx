'use client';
import SectionList from '../../../../../components/shared/Admin/EditSectionPosts/SectionList';
import { useAppSelector } from '../../../../../hooks/hooks';
import { RootState } from '../../../../../redux/store';

const PostsPage = () => {
    const { currentLangId } = useAppSelector((state: RootState) => state.lang);

    return (
        <div>
            <h1>Редагування Секцій</h1>
            <SectionList key={currentLangId} /> {/* Виводимо всі секції з постами */}
        </div>
    );
};

export default PostsPage;
