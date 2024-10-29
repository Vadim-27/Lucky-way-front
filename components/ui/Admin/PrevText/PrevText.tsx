import { FC } from 'react';

import { IRootLayout } from '@/app/layout';

import scss from './PrevText.module.scss';

const PrevText: FC<IRootLayout> = ({ children }) => {
    return <p className={scss.prevText}>{children}</p>;
};

export default PrevText;
