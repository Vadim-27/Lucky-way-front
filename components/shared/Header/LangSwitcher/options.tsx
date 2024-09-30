import clsx from 'clsx';

import Icon from '@/components/ui/Icon';
import { dmSans } from '@/constants/fonts';

import scss from './LangSwitcher.module.scss';

export type IOption = {
    value: string;
    label: JSX.Element;
};

const options: IOption[] = [
    {
        value: 'en',
        label: (
            <div className={scss.option}>
                <Icon variant="uk" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>Eng</span>
            </div>
        ),
    },
    {
        value: 'de',
        label: (
            <div className={scss.option}>
                <Icon variant="deu" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>deu</span>
            </div>
        ),
    },
    {
        value: 'cz',
        label: (
            <div className={scss.option}>
                <Icon variant="cze" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>cze</span>
            </div>
        ),
    },
];

export default options;
