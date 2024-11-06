import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ICountry } from '@/types/country.types';

import scss from './CountriesList.module.scss';

interface ICountriesList {
    countries: ICountry[];
}

const CountriesList: FC<ICountriesList> = ({ countries }) => {
    return (
        <section className={scss.countries}>
            <ul className={scss.countriesList}>
                {countries.map(({ id, image_horizontal, name, slug }) => (
                    <li className={scss.item} key={id}>
                        <Link href={`/toll-roads/${slug}`} className={scss.link}>
                            <div className={scss.imageWrapper}>
                                <Image
                                    src={image_horizontal}
                                    priority
                                    alt={name}
                                    className={scss.image}
                                />
                            </div>

                            <p className={scss.name}>{name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CountriesList;
