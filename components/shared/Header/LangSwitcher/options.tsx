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
                <Icon variant="en" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>Eng</span>
            </div>
        ),
    },
    {
        value: 'de',
        label: (
            <div className={scss.option}>
                <Icon variant="de" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>DEU</span>
            </div>
        ),
    },
    {
        value: 'cz',
        label: (
            <div className={scss.option}>
                <Icon variant="cz" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>CZE</span>
            </div>
        ),
    },
    {
        value: 'uk',
        label: (
            <div className={scss.option}>
                <Icon variant="Ua-Ukraine" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>UKR</span>
            </div>
        ),
    },
    {
        value: 'sk',
        label: (
            <div className={scss.option}>
                <Icon variant="Sk-Slovakia" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>SLO</span>
            </div>
        ),
    },
    {
        value: 'pl',
        label: (
            <div className={scss.option}>
                <Icon variant="Pl-Poland" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>POL</span>
            </div>
        ),
    },
    {
        value: 'lv',
        label: (
            <div className={scss.option}>
                <Icon variant="Lv-Latvia" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>LAV</span>
            </div>
        ),
    },
    {
        value: 'lt',
        label: (
            <div className={scss.option}>
                <Icon variant="Lt-Lithuania" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>LIT</span>
            </div>
        ),
    },
    {
        value: 'et',
        label: (
            <div className={scss.option}>
                <Icon variant="Ee-Estonia" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>EST</span>
            </div>
        ),
    },
    {
        value: 'hu',
        label: (
            <div className={scss.option}>
                <Icon variant="Hu-Hungary" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>HUN</span>
            </div>
        ),
    },
    {
        value: 'ro',
        label: (
            <div className={scss.option}>
                <Icon variant="Ro-Romania" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>RUM</span>
            </div>
        ),
    },
    {
        value: 'bg',
        label: (
            <div className={scss.option}>
                <Icon variant="Bg-Bulgaria" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>BUL</span>
            </div>
        ),
    },
    {
        value: 'tr',
        label: (
            <div className={scss.option}>
                <Icon variant="Tr-Turkey" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>TUR</span>
            </div>
        ),
    },
    {
        value: 'sl',
        label: (
            <div className={scss.option}>
                <Icon variant="Si-Slovenia" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>SLV</span>
            </div>
        ),
    },
    {
        value: 'da',
        label: (
            <div className={scss.option}>
                <Icon variant="Dk-Denmark" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>DAN</span>
            </div>
        ),
    },
    {
        value: 'nl',
        label: (
            <div className={scss.option}>
                <Icon variant="Nl-Netherlands" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>NLD</span>
            </div>
        ),
    },
    {
        value: 'fr',
        label: (
            <div className={scss.option}>
                <Icon variant="Fr-France" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>FRA</span>
            </div>
        ),
    },
    {
        value: 'it',
        label: (
            <div className={scss.option}>
                <Icon variant="It-Italy" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>ITA</span>
            </div>
        ),
    },
    {
        value: 'ru',
        label: (
            <div className={scss.option}>
                <Icon variant="Ru-Russian-Federation" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>RUS</span>
            </div>
        ),
    },
    {
        value: 'es',
        label: (
            <div className={scss.option}>
                <Icon variant="Es-Spain" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>SPA</span>
            </div>
        ),
    },
    {
        value: 'no',
        label: (
            <div className={scss.option}>
                <Icon variant="No-Norway" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>NOR</span>
            </div>
        ),
    },
    {
        value: 'sv',
        label: (
            <div className={scss.option}>
                <Icon variant="Se-Sweden" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>SWE</span>
            </div>
        ),
    },
    {
        value: 'fi',
        label: (
            <div className={scss.option}>
                <Icon variant="Fi-Finland" className={scss.icon} />
                <span className={clsx(dmSans.className, scss.lang)}>FIN</span>
            </div>
        ),
    },
];

export default options;
