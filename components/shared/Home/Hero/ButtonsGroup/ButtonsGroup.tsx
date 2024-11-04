import { useTranslations } from 'next-intl';

import Button from '@/components/ui/Button';

import scss from './ButtonsGroup.module.scss';

const ButtonsGroup = () => {
    const t = useTranslations('Hero');

    return (
        <div className={scss.buttonGroup}>
            <Button>{t('cta')}</Button>
            <Button variant="secondary">{t('secondary')}</Button>
        </div>
    );
};

export default ButtonsGroup;
