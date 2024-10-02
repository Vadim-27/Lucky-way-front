import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import Icon from '@/components/ui/Icon';
import Slider from '@/components/ui/Slider';
import { dmSans } from '@/constants/fonts';
import countries from '@/data/countries';

import scss from './TollRoadsList.module.scss';

export interface ITollRoadsList {
    id: number;
    image: StaticImageData;
    name: string;
    slug: string;
}

const TollRoadsList = () => {
    const defaultItem = (
        <li className={scss.roadItem}>
            <Icon variant="road" className={scss.roadIcon} />
            <p className={clsx(dmSans.className, scss.title)}>Toll Roads</p>
        </li>
    );

    console.log(defaultItem);

    return (
        <ul className={scss.tollRoadsList}>
            <Slider className={scss.slider}>
                {countries.map((country) => (
                    <li key={country.id} className={scss.item}>
                        <Link href={`/${country.slug}`}>
                            <Image
                                src={country.image}
                                priority
                                alt={country.name}
                                className={scss.image}
                            />
                            <p className={scss.name}>{country.name}</p>
                        </Link>
                    </li>
                ))}
            </Slider>
        </ul>
    );
};

export default TollRoadsList;
