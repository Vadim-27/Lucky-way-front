import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';

import { useAppDispatch } from '../../../../hooks/hooks';
import { postActions } from '../../../../redux/slices/PostSlice';

interface PostItemProps {
    post: any;
    currentLangId: number;
    onEdit: (post: any) => void;
}

const PostItem: FC<PostItemProps> = ({ post, currentLangId, onEdit }) => {
    const dispatch = useAppDispatch();
    // Пошук перекладу для поточної мови або fallback на перший переклад
    const translation = post.translations.find(
        (t: any) => Number(t.language_id) === Number(currentLangId)
    ) || { title: 'Назва цією мовою відсутня', description: 'Опис цією мовою відсутній' };

    const onDelete = async (id: number) => {
        await dispatch(postActions.deletePostById(id));
        await dispatch(postActions.setCreateUpdateDeleteTriggerSection());
    };

    return (
        <Card>
            <Card.Body>
                <p>
                    <span>
                        <i>Країна прикріплена до посту:</i>
                    </span>{' '}
                    {post.country.name}{' '}
                </p>
                <p>
                    <span>
                        <i>POST ID:</i>
                    </span>{' '}
                    {post.id}{' '}
                </p>
                <Card.Title>{translation.title}</Card.Title>
                <Card.Text>{translation.description}</Card.Text>

                {/* Відображення кількох зображень */}
                {post.images?.length > 0 && (
                    <div className="image-gallery" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {post.images.map((image: any, index: number) => (
                            <div key={index} style={{ marginRight: '10px', marginBottom: '10px' }}>
                                <img
                                    src={image?.url}
                                    alt={`Зображення поста ${index + 1}`}
                                    style={{
                                        maxWidth: '150px',
                                        maxHeight: '150px',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                )}

                <Button
                    variant="warning"
                    onClick={() => onEdit(post)}
                    style={{ marginRight: '10px' }}
                >
                    Редагувати
                </Button>
                <Button variant="danger" onClick={() => onDelete(post.id)}>
                    Видалити
                </Button>
            </Card.Body>
        </Card>
    );
};

export default PostItem;
