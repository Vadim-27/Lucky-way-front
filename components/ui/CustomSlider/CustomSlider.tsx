'use client';

import { ReactNode } from 'react';
import Slider from 'react-slick';

import settings from '@/configs/react-slick';

const CustomSlider = ({ children, className }: { children: ReactNode; className?: string }) => {
    return (
        <Slider {...settings} className={className}>
            {children}
        </Slider>
    );
};

export default CustomSlider;
