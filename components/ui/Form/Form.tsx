import { ReactNode } from 'react';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';

interface IForm<T extends FieldValues> {
    onSubmit: (data: T) => void;
    children: (register: UseFormRegister<T>, isSubmitting: boolean) => ReactNode;
    className?: string;
}

const Form = <T extends FieldValues>({ onSubmit, className, children }: IForm<T>) => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<T>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            {children(register, isSubmitting)}
        </form>
    );
};

export default Form;
