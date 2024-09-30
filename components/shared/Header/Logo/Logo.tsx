import { FC } from 'react';
import Link from 'next/link';

import Icon from '@/components/ui/Icon';

import scss from './Logo.module.scss';

interface ILogo {
    className?: string;
}

const Logo: FC<ILogo> = ({ className }) => {
    return (
        <Link href="/" className={className}>
            <Icon variant="logo" className={scss.logo} />
        </Link>
    );
};

export default Logo;
