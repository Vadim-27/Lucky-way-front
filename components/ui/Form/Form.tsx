import { ReactNode } from 'react';
import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';

interface IForm<T extends FieldValues> {
    onSubmit: (data: T) => void;
    children: (register: UseFormRegister<T>) => ReactNode;
}

const Form = <T extends FieldValues>({ onSubmit, children }: IForm<T>) => {
    const { register, handleSubmit } = useForm<T>();

    return <form onSubmit={handleSubmit(onSubmit)}>{children(register)}</form>;
};

export default Form;
