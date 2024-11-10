import { InputHTMLAttributes } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';

import scss from './AdminInput.module.scss';

export interface IAdminControl<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    label: string;
    className?: string;
}

interface IAdminInput<T extends FieldValues>
    extends IAdminControl<T>,
        Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {}

const AdminInput = <T extends FieldValues>({
    register,
    name,
    label,
    className,
    ...props
}: IAdminInput<T>) => {
    return (
        <div>
            <label htmlFor={name} className={scss.label}>
                {label}
            </label>

            <input
                id={name}
                autoComplete="off"
                className={clsx(scss.input, className)}
                {...register(name)}
                {...props}
            />
        </div>
    );
};

export default AdminInput;
