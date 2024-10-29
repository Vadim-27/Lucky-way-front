const filterEmptyFields = (data: object): object => {
    const filteredData = Object.fromEntries(
        Object.entries(data).map(([key, value]) => {
            if (Array.isArray(value)) {
                const filteredArray = value
                    .map((item) => (typeof item === 'object' ? filterEmptyFields(item) : item))
                    .filter((item) =>
                        item && typeof item === 'object'
                            ? Object.keys(item).length > 0
                            : item !== undefined && item !== null && item !== ''
                    );

                return [key, filteredArray.length ? filteredArray : undefined];
            } else if (typeof value === 'object' && value !== null) {
                const filteredObject = filterEmptyFields(value);

                return [key, Object.keys(filteredObject).length ? filteredObject : undefined];
            }
            return [key, value !== '' ? value : undefined];
        })
    );

    return Object.fromEntries(Object.entries(filteredData).filter(([, v]) => v !== undefined));
};

export default filterEmptyFields;
