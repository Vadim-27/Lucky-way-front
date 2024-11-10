import generalInformationSectionData from '@/data/generalInformationSection/generalInformationSection';



export const getGeneralInformationById = (id: number) => {
    return generalInformationSectionData.find((item) => item.id === id);
};
