'use client';
import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { dmSans } from '@/constants/fonts';

import scss from './Navigation.module.scss';

interface INavigation {
    onClose?: () => void;
    footer?: boolean;
    className?: string;
}

const Navigation: FC<INavigation> = ({ onClose, footer, className }) => {
    const t = useTranslations('Navigation');
    const pathname = usePathname();

    const navItems = [
        { label: t('about'), href: '/about' },
        { label: t('features'), href: '/features' },
        { label: t('pricing'), href: '/pricing' },
        { label: t('blog'), href: '/blog' },
    ];
    return (
        <nav className={className}>
            <ul className={clsx(scss.list, footer && scss.footerList)}>
                {navItems.map(({ label, href }) => {
                    const isActive = pathname === href;
                    return (
                        <li key={label} className={scss.item}>
                            <Link
                                href={pathname === '/' ? `#${label.toLowerCase()}` : href}
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
