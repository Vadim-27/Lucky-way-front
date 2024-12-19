'use client';

import { FC, ReactNode, useEffect, useState } from 'react';
import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

import options from '@/configs/embla-slider';

import scss from './Slider.module.scss';

interface ISlider {
    children: ReactNode;
    className?: string;
}

const Slider: FC<ISlider> = ({ children, className }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({
            playOnInit: true,
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        }),
    ]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [slideCount, setSlideCount] = useState(0);
    console.log('children', children);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        const updateSlideCount = () => {
            const slideNodes = emblaApi.slideNodes();
            console.log('slideNodes:', slideNodes);
            setSlideCount(slideNodes.length);
        };

        emblaApi.on('select', onSelect);
        updateSlideCount();

        // Додаємо обробку на випадок, якщо слайди динамічно змінюються
        const resizeObserver = new ResizeObserver(() => {
            updateSlideCount();
        });
        resizeObserver.observe(emblaApi.rootNode());

        return () => {
            emblaApi.off('select', onSelect);
            resizeObserver.disconnect();
        };
    }, [emblaApi]);

    console.log('slideCount', slideCount); // Перевірка значення slideCount

    return (
        <div>
            <div className={scss.embla} ref={emblaRef}>
                <div className={clsx(scss.embla__container, className)}>{children}</div>
            </div>
            <div className={scss.dots}>
                {Array.from({ length: slideCount }).map((_, index) => (
                    <button
                        key={index}
                        className={clsx(scss.dot, { [scss.active]: index === selectedIndex })}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
