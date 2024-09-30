'use client';
import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { dmSans } from '@/constants/fonts';

import navigation from './navigation.json';

import scss from './Navigation.module.scss';

interface INavigation {
    onClose?: () => void;
    className?: string;
}

const Navigation: FC<INavigation> = ({ onClose, className }) => {
    const pathname = usePathname();
    return (
        <nav className={className}>
            <ul className={scss.list}>
                {navigation.map(({ label, href }) => {
                    const isActive = pathname === href;
                    return (
                        <li key={label}>
                            <Link
                                href={href}
                                onClick={onClose}
                                className={clsx(
                                    dmSans.className,
                                    scss.link,
                                    isActive && scss.active
                                )}
                                aria-label={label}
                            >
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
