import clsx from 'clsx';
import Link from 'next/link';

import Icon from '@/components/ui/Icon';
import Title from '@/components/ui/Title';
import { dmSans } from '@/constants/fonts';

import scss from './TollRoadsInfo.module.scss';

const TollRoadsInfo = () => {
    return (
        <section className={scss.wrapper}>
            <div className={scss.headWrapper}>
                <Title>Toll roads</Title>
                <Link href="#" className={clsx(dmSans.className, scss.link)}>
                    View All
                    <Icon variant="chevron-right" className={scss.chevronIcon} />
                </Link>
            </div>

            <p className={scss.description}>
                Need to pay a toll? We&apos;ve gathered all the information you need to make paying
                your toll simple and stress-free, just like driving on our roads.
            </p>
        </section>
    );
};

export default TollRoadsInfo;
