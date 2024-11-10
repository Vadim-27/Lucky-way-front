import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import { dmSans } from '@/constants/fonts';

import scss from './Sidebar.module.scss';

interface ISidebar {
    links: { label: string; href: string }[];
}

const Sidebar: FC<ISidebar> = ({ links }) => {
    return (
        <aside className={scss.sidebar}>
            <div className={scss.wrapper}>
                {links.map((link) => (
                    <Link
                        href={link.href}
                        key={link.label}
                        className={clsx(dmSans.className, scss.link)}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;
