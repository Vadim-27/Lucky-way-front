import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

import { dmSans } from '@/constants/fonts';

import { getDataPostsSectionById } from '../../../services/translation/home';
import { IPost } from '../../../types/all.types';
import Icon from '../Icon';
import Slider from '../Slider';

import CountryItem from './CountryItem';

import scss from './CountriesSlider.module.scss';

interface ICountriesSlider {
    title: string;
    section?: 'tollRoads' | 'lowEmissionZone';
}

const CountriesSlider: FC<ICountriesSlider> = ({ title, section = 'tollRoads' }) => {
    const [countries, setCountries] = useState<IPost[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getDataPostsSectionById(12);
                setCountries(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const defaultItem = (
        <div className={scss.defaultItem}>
            <Icon
                variant={section === 'tollRoads' ? 'road' : 'green-zone'}
                className={scss.defaultIcon}
            />
            <p
                className={clsx(
                    dmSans.className,
                    scss.title,
                    section === 'lowEmissionZone' && scss.lowEmission
                )}
            >
                {title}
            </p>
        </div>
    );

    return (
        <div className={scss.wrapper}>
            {defaultItem}
            <ul className={scss.countriesList}>
                <Slider className={scss.slider}>
                    {Array.isArray(countries) &&
                        countries.map((post) => (
                            <CountryItem key={post.id} post={post} section={section} />
                        ))}
                </Slider>
            </ul>
        </div>
    );
};

export default CountriesSlider;
