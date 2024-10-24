'use client';

import { FC, useState } from 'react';
import Drawer from 'react-modern-drawer';
import clsx from 'clsx';

import Icon from '@/components/ui/Icon';

import LangSwitcher from '../LangSwitcher';
import Logo from '../../../ui/Logo';
import Navigation from '../Navigation';

import 'react-modern-drawer/dist/index.css';
import scss from './Burger.module.scss';

interface IBurger {
    className?: string;
}

const Burger: FC<IBurger> = ({ className }) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const toggleDrawer = () => setDrawerIsOpen(!drawerIsOpen);

    return (
        <div className={clsx(scss.burger, className)}>
            <button onClick={toggleDrawer} className={scss.burgerButton}>
                <Icon variant="burger" className={scss.burgerIcon} />
            </button>

            <Drawer
                open={drawerIsOpen}
                onClose={toggleDrawer}
                size={316}
                direction="left"
                customIdSuffix="drawer"
                overlayOpacity={1}
                overlayColor="#717171"
                lockBackgroundScroll
                className={scss.drawer}
            >
                <div className={scss.drawerContent}>
                    <button
                        type="button"
                        className={scss.closeButton}
                        onClick={toggleDrawer}
                        aria-label="Close"
                    >
                        <Icon variant="close" className={scss.closeIcon} />
                    </button>
                    <Logo className={scss.logo} />
                    <Navigation onClose={toggleDrawer} className={scss.navigation} />
                    <LangSwitcher id="mobile-switcher" />
                </div>
            </Drawer>
        </div>
    );
};

export default Burger;
