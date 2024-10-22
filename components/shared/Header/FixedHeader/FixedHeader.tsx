'use client';

import { useEffect, useState } from 'react';

import scss from './FixedHeader.module.scss';

const FixedHeader = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.querySelector('#hero')?.clientHeight || 0;
            if (window.scrollY > heroHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const header = document.querySelector('header');
        if (header) {
            if (isSticky) {
                header.classList.add(scss.headerSticky);
            } else {
                header.classList.remove(scss.headerSticky);
            }
        }
    }, [isSticky]);

    return null;
};

export default FixedHeader;
