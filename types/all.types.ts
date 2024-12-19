interface ICountry {
    id: number;
    name: string;
    iso3: string;
    iso2: string;
    numeric_code: string;
    phone_code: string;
    capital?: string;
    currency?: string;
    currency_name?: string;
    currency_symbol?: string;
    tld?: string;
    native?: string;
    region?: string;
    region_id?: string;
    subregion?: string;
    subregion_id?: string;
    nationality?: string;
    latitude?: number;
    longitude?: number;
    emoji?: string;
    emojiU?: string;
    timezones?: any;
    translations?: any;
    flag?: string;
    geoData?: string;
    has_toll_roads: boolean;
    images: IImage[];
    posts: IPost[];
    regions: IRegion[];
    toll_roads: ITollRoad[];
    vingettes: IVingetteOption[];
}

export interface IPost {
    id?: number;
    country_id: number;
    section_id: number;
    images?: IImage[] | string[];
    country?: ICountry;
    section?: ISection;
    translations?: IPostTranslation[];
}

export interface ISection {
    id?: number;
    name: string;
    posts?: IPost[];
    translations: ISectionTranslation[];
}

export interface ISectionTranslation {
    id?: number;
    sectionId?: number;
    languageId: number;
    title: string;
    description?: string;
    language?: ILanguage;
    section?: ISection;
}

export interface IUpdateSection {
    name: string;
    translations: {
        id: number; // ID перекладу
        languageId: number; // Мова
        title: string; // Заголовок
        description?: string; // Опис
    }[];
}

interface IPostTranslation {
    id?: number;
    post_id?: number;
    language_id: number;
    title: string;
    description: string;
    language?: ILanguage;
    post?: IPost;
}

interface ILanguage {
    id: number;
    code: string;
    label: string;
    name: string;
    postTranslations: IPostTranslation[];
    sectionTranslations: ISectionTranslation[];
}

export interface IImage {
    id?: number;
    url: string;
    post_id?: number;
    country_id?: number;
    country?: ICountry;
    post?: IPost;
}

interface IRegion {
    id: number;
    country_id: number;
    name: string;
    cities: ICity[];
    country: ICountry;
}

interface ICity {
    id: number;
    region_id: number;
    name: string;
    region: IRegion;
}

interface ITollRoad {
    id: number;
    country_id: number;
    toll_type: string;
    coordinates?: string;
    name: string;
    description: string;
    cost: number;
    country: ICountry;
    vehicle_types: IVehicleType[];
    vingettes: IVingetteOption[];
}

interface IVehicleType {
    id: number;
    toll_road_id: number;
    type: string;
    description: string;
    cost: number;
    toll_road: ITollRoad;
    vingetteOptions: IVingetteOption[];
}

interface IVingetteOption {
    id: number;
    operation_type: string;
    period: string;
    description: string;
    link?: string;
    country_id: number;
    vehicle_type_id: number;
    toll_road_id: number;
    country: ICountry;
    toll_road: ITollRoad;
    vehicle_type: IVehicleType;
}
