import { FC, useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { postActions } from '../../../../redux/slices/PostSlice';
import { RootState } from '../../../../redux/store';

import PostItem from './PostItem';
import PostModal from './PostModal';

const PostList: FC<{ sectionId: number }> = ({ sectionId }) => {
    const dispatch = useAppDispatch();
    const { currentLangId } = useAppSelector((state: RootState) => state.lang);
    const { createUpdateDeleteTriggerSection } = useAppSelector((state: RootState) => state.posts);
    const [posts, setPosts] = useState<any>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingPost, setEditingPost] = useState<any>(null);

    useEffect(() => {
        dispatch(postActions.getAllPostsBySection(sectionId)).then((response) => {
            setPosts(response.payload);
        });
    }, [sectionId, currentLangId, createUpdateDeleteTriggerSection, dispatch]);

    const handleEditPost = (post: any) => {
        setEditingPost(post);
        setShowModal(true);
    };

    return (
        <div>
            <Button variant="primary" onClick={() => setShowModal(true)} className="mb-3">
                Додати новий пост
            </Button>

            {/* Використовуємо Row та Col для створення адаптивного макету */}
            <Row>
                {Array.isArray(posts) &&
                    posts.map((post) => (
                        <Col key={post.id} sm={12} md={6} lg={4} className="mb-4">
                            <PostItem
                                post={post}
                                currentLangId={currentLangId}
                                onEdit={handleEditPost}
                            />
                        </Col>
                    ))}
            </Row>

            {/* Модальне вікно для додавання/редагування */}
            <PostModal
                show={showModal}
                onClose={() => {
                    setShowModal(false);
                    setEditingPost(null);
                }}
                sectionId={sectionId}
                post={editingPost}
            />
        </div>
    );
};

export default PostList;
