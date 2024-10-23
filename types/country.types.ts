import { StaticImageData } from 'next/image';

export interface ICountry {
    id: number;
    image: StaticImageData | string;
    image_2: StaticImageData | string;
    contour: StaticImageData | string;
    name: string;
    slug: string;
}
