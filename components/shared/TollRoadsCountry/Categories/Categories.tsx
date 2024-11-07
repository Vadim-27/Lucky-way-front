import CategoriesList from '@/components/ui/CategoriesList';

const Categories = () => {
    const categoriesData = [
        {
            icon: 'class-a',
            title: 'Class A',
            description:
                'Passenger cars and motorcycles can use toll roads with a special Class A rate.',
        },
        {
            icon: 'class-b',
            title: 'Class B',
            description:
                'Larger vehicles, such as vans and minibuses, require a Class B vignette for full toll road access.',
        },
        {
            icon: 'other-vehicles',
            title: 'Other vehicles',
            description:
                'Heavy trucks and specialized vehicles need specific rates for smooth access to Italian highways.',
        },
    ];

    return <CategoriesList data={categoriesData} />;
};

export default Categories;
