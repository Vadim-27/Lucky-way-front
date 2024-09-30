import { FC, SVGProps } from 'react';

type IconVariant =
    | 'low-emission-zone'
    | 'payment-of-fines'
    | 'toll-roads'
    | 'logo'
    | 'burger'
    | 'close'
    | 'uk'
    | 'cze'
    | 'deu'
    | 'arrow';

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
