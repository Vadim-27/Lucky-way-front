import { StaticImageData } from 'next/image';

export interface ICountry {
    id: number;
    image: StaticImageData | string;
    image_2: StaticImageData | string;
    image_horizontal: StaticImageData | string;
    contour: StaticImageData | string;
    name: string;
    slug: string;
}
