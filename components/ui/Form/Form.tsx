import { ReactNode } from 'react';
import { FieldErrors, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';

interface IForm<T extends FieldValues> {
    onSubmit: (data: T) => void;
    children: (
        register: UseFormRegister<T>,
        isSubmitting: boolean,
        errors: FieldErrors<T>
    ) => ReactNode;
    validationSchema: AnyObjectSchema;
    className?: string;
}

const Form = <T extends FieldValues>({
    onSubmit,
    validationSchema,
    className,
    children,
}: IForm<T>) => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<T>({
        resolver: yupResolver(validationSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            {children(register, isSubmitting, errors)}
        </form>
    );
};

export default Form;
