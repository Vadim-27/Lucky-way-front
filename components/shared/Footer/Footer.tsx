import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';

import Navigation from '../Header/Navigation';

import Socials from './Socials';

import scss from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={scss.footer}>
            <Container>
                <div className={scss.wrapper}>
                    <div className={scss.logoWrapper}>
                        <Logo />
                    </div>

                    <div className={scss.line}></div>

                    <Socials />

                    <Navigation footer />

                    <p className={scss.text}>
                        Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska.
                        Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask
                        vyfisat. Viktiga poddradio har un mad och inde.
                    </p>

                    <p className={scss.copyright}>2024 © All rights reserved</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
