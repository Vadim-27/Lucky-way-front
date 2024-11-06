import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import Icon from '@/components/ui/Icon';
import Title from '@/components/ui/Title';
import { dmSans } from '@/constants/fonts';

import scss from './TitleLinkDescription.module.scss';

interface ITitleLinkDescription {
    title: string;
    description: string;
    link?: string;
    isLongTitle?: boolean;
    className?: string;
}

const TitleLinkDescription: FC<ITitleLinkDescription> = ({
    title,
    description,
    link,
    isLongTitle,
    className,
}) => {
    return (
        <section className={clsx(scss.wrapper, className)}>
            <div className={scss.headWrapper}>
                <Title className={clsx(scss.title, isLongTitle && scss.longTitle)}>{title}</Title>
                {link && (
                    <Link href={link} className={clsx(dmSans.className, scss.link)}>
                        View All
                        <Icon variant="chevron-right" className={scss.chevronIcon} />
                    </Link>
                )}
            </div>

            <p className={scss.description}>{description}</p>
        </section>
    );
};

export default TitleLinkDescription;
