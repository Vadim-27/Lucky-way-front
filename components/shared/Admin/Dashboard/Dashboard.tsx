import { FC } from 'react';
import clsx from 'clsx';

import { IRootLayout } from '@/app/layout';
import { dmSans } from '@/constants/fonts';

import scss from './Dashboard.module.scss';

const Dashboard: FC<IRootLayout> = ({ children }) => {
    return <section className={clsx(dmSans.className, scss.dashboard)}>{children}</section>;
};

export default Dashboard;
