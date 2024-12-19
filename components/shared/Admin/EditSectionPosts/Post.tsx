import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '../../../../hooks/hooks';
import { postActions } from '../../../../redux/slices/PostSlice';

interface PostProps {
    postId: number;
    translationId: number;
    title: string;
    description: string;
    locale: string;
}

const Post: FC<PostProps> = ({ postId, title, description }) => {
    const { register, handleSubmit } = useForm();
    const dispatch = useAppDispatch();

    const onSubmit = (data: any) => {
        // Викликаємо метод оновлення поста
        dispatch(postActions.updatePostById({ id: postId, data: data }));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-3 rounded border p-3">
            <div className="mb-2">
                <label htmlFor={`title-${postId}`} className="form-label">
                    Title:
                </label>
                <input
                    id={`title-${postId}`}
                    defaultValue={title}
                    {...register('title')}
                    className="form-control"
                />
            </div>
            <div className="mb-2">
                <label htmlFor={`description-${postId}`} className="form-label">
                    Description:
                </label>
                <textarea
                    id={`description-${postId}`}
                    defaultValue={description}
                    {...register('description')}
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Update Post
            </button>
        </form>
    );
};

export default Post;
