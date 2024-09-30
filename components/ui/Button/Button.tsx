import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';

import Icon from '../Icon';

import scss from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: ReactNode;
}

const Button: FC<IButton> = ({ variant = 'primary', children, ...props }) => {
    return (
        <button className={clsx(scss.button, scss[variant])} {...props}>
            {children}
            {variant === 'primary' && <Icon variant="arrow" className={scss.arrowIcon} />}
        </button>
    );
};

export default Button;
