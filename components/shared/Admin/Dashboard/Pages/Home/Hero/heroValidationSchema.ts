import * as yup from 'yup';

export const titleValidationSchema = yup.object({
    title: yup.string().required('Title is required').min(3, 'Title must be at least 3 characters'),
});

export const descriptionValidationSchema = yup.object({
    description: yup
        .string()
        .required('Description is required')
        .min(10, 'Description must be at least 10 characters'),
});

export const buttonPrimaryValidationSchema = yup.object({
    buttonPrimary: yup.string().required('Required').min(2, 'Button must be at least 2 characters'),
});

export const buttonSecondaryValidationSchema = yup.object({
    buttonSecondary: yup
        .string()
        .required('Required')
        .min(2, 'Button must be at least 2 characters'),
});
