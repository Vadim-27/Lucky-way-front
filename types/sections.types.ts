export interface ITranslation {
    id?: number;
    sectionId?: number;
    languageId?: number;
    title?: string;
    description?: string;
}

export interface ISection {
    id?: number;
    name?: string;
    translations: ITranslation[];
}
