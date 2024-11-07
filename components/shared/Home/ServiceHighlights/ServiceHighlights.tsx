import { useTranslations } from 'next-intl';

import CategoriesList from '@/components/ui/CategoriesList';

const ServiceHighlights = () => {
    const t = useTranslations('ServiceHighlights');

    const servicesData = [
        {
            icon: 'toll-roads',
            title: t('tollRoads.title'),
            description: t('tollRoads.description'),
        },
        {
            icon: 'low-emission-zone',
            title: t('lowEmissionZone.title'),
            description: t('lowEmissionZone.description'),
        },
        {
            icon: 'payment-of-fines',
            title: t('paymentOfFines.title'),
            description: t('paymentOfFines.description'),
        },
    ];
    return <CategoriesList data={servicesData} />;
};

export default ServiceHighlights;
