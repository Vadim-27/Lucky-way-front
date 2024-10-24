import Link from 'next/link';

import Icon from '@/components/ui/Icon';

import scss from './Socials.module.scss';

const Socials = () => {
    return (
        <div className={scss.socialsList}>
            <Link href={'https://facebook.com/'} target="_blank" rel="noreferrer noopener">
                <Icon variant="facebook" className={scss.socialLink} />
            </Link>
            <Link href={'https://twitter.com/'} target="_blank" rel="noreferrer noopener">
                <Icon variant="twitter" className={scss.socialLink} />
            </Link>
            <Link href={'https://instagram.com/'} target="_blank" rel="noreferrer noopener">
                <Icon variant="instagram" className={scss.socialLink} />
            </Link>
            <Link href={'https://linkedin.com/'} target="_blank" rel="noreferrer noopener">
                <Icon variant="linkedin" className={scss.socialLink} />
            </Link>
        </div>
    );
};

export default Socials;
