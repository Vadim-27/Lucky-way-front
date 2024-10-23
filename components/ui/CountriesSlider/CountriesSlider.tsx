import { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { dmSans } from '@/constants/fonts';
import { ICountry } from '@/types/country.types';

import Icon from '../Icon';
import Slider from '../Slider';

import scss from './CountriesSlider.module.scss';

interface ICountriesSlider {
    countries: ICountry[];
    title: string;
    section?: 'tollRoads' | 'lowEmissionZone';
}

const CountriesSlider: FC<ICountriesSlider> = ({ countries, title, section = 'tollRoads' }) => {
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
                    {countries.map(({ id, image, image_2, contour, name, slug }) => (
                        <li key={id} className={scss.item}>
                            <Link href={`/${slug}`} className={scss.link}>
                                <Image
                                    src={section === 'tollRoads' ? image : image_2}
                                    priority
                                    alt={name}
                                    className={scss.image}
                                />
                                <p className={scss.name}>{name}</p>

                                {section === 'lowEmissionZone' && (
                                    <Image
                                        src={contour}
                                        priority
                                        alt={name}
                                        className={scss.contour}
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </Slider>
            </ul>
        </div>
    );
};

export default CountriesSlider;
