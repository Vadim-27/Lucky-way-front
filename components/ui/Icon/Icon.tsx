import { FC, SVGProps } from 'react';

export type IconVariant =
    | 'low-emission-zone'
    | 'payment-of-fines'
    | 'toll-roads'
    | 'logo'
    | 'burger'
    | 'close'
    | 'uk'
    | 'cze'
    | 'deu'
    | 'arrow'
    | 'chevron-right'
    | 'road'
    | 'green-zone'
    | 'directly'
    | 'fast'
    | 'payments'
    | 'use';

interface IIcon extends SVGProps<SVGSVGElement> {
    variant: IconVariant;
    className?: string;
}

const Icon: FC<IIcon> = ({ variant, className }) => {
    return (
        <svg className={className}>
            <use href={`/icons/icons.svg#icon-${variant}`}></use>
        </svg>
    );
};

export default Icon;
