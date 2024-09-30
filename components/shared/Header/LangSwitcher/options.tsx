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
        value: 'ua',
        label: (
            <div className={scss.option}>
                <Icon variant="uk" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>Ukr</span>
            </div>
        ),
    },
    {
        value: 'fr',
        label: (
            <div className={scss.option}>
                <Icon variant="uk" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>Fra</span>
            </div>
        ),
    },
];

export default options;
