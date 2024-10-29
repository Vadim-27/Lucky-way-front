import { TextareaHTMLAttributes, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import clsx from 'clsx';

import { poppins } from '@/constants/fonts';

import { IAdminControl } from '../AdminInput';

import scss from './AdminTextarea.module.scss';

interface IAdminTextarea<T extends FieldValues>
    extends IAdminControl<T>,
        Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> {}

const AdminTextarea = <T extends FieldValues>({
    register,
    name,
    label,
    className,
    ...props
}: IAdminTextarea<T>) => {
    const [text, setText] = useState('');
    const maxLength = 300;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newText = event.target.value;
        if (newText.length <= maxLength) {
            setText(newText);
        }
        register(name).onChange?.(event);
    };
    return (
        <div>
            <label htmlFor={name} className={scss.label}>
                {label}
            </label>

            <div className={scss.textareaWrapper}>
                <textarea
                    id={name}
                    value={text}
                    maxLength={maxLength}
                    className={clsx(scss.textarea, className)}
                    {...register(name)}
                    onChange={handleChange}
                    {...props}
                />
                <span className={clsx(poppins.className, scss.counter)}>
                    {maxLength - text.length}
                </span>
            </div>
        </div>
    );
};

export default AdminTextarea;
