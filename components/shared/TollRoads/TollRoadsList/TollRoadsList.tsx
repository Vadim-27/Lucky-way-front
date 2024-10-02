import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import CustomSlider from '@/components/ui/CustomSlider';
import Icon from '@/components/ui/Icon';
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

    return (
        <ul className={scss.tollRoadsList}>
            <CustomSlider className={scss.slider}>
                {countries.map((country) => (
                    <li key={country.id} className={scss.item}>
                        <Link href={`/${country.slug}`} className={scss.link}>
                            <Image
                                src={country.image}
                                alt={country.name}
                                priority
                                className={scss.image}
                            />
                            <p className={scss.name}>{country.name}</p>
                        </Link>
                    </li>
                ))}
                {defaultItem}
            </CustomSlider>
        </ul>
    );
};

export default TollRoadsList;
