import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import scss from './Title.module.scss';

interface ITitle {
    children: ReactNode;
    className?: string;
}
const Title: FC<ITitle> = ({ children, className }) => {
    return <h2 className={clsx(scss.title, className)}>{children}</h2>;
};

export default Title;
