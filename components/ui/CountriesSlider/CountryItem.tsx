import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

import { useAppSelector } from '../../../hooks/hooks';
import { RootState } from '../../../redux/store';
import { IPost } from '../../../types/all.types';

import scss from './CountriesSlider.module.scss';

interface CountryItemProps {
    post: IPost;
    section: 'tollRoads' | 'lowEmissionZone';
}

const CountryItem: FC<CountryItemProps> = ({ post, section }) => {
    const { currentLangId } = useAppSelector((state: RootState) => state.lang);
    const [translation, setTranslation] = useState<any>(null);

    useEffect(() => {
        const fetchTranslation = async () => {
            if (currentLangId) {
                const foundTranslation = post?.translations?.find(
                    (t) => t.language_id === +currentLangId
                );
                setTranslation(foundTranslation);
            }
        };

        fetchTranslation();
    }, [post, currentLangId]);

    // Отримуємо тільки перше зображення
    const mainImage = post?.images?.[0]?.url || '';
    const contourImage = post?.images?.[2]?.url || '';

    return (
        <li key={post.id} className={scss.item}>
            <Link href={`/toll-roads/${post.id}`} className={scss.link}>
                <div className={scss.imageWrapper}>
                    <img
                        src={mainImage}
                        alt={translation?.title || 'Image'}
                        className={scss.image}
                        width={300}
                        height={200}
                    />
                </div>

                <p className={scss.name}>{translation?.title || 'No Title'}</p>

                {section === 'lowEmissionZone' && contourImage && (
                    <img
                        src={contourImage}
                        alt={translation?.title || 'Contour'}
                        className={scss.contour}
                        width={300}
                        height={200}
                    />
                )}
            </Link>
        </li>
    );
};

export default CountryItem;
