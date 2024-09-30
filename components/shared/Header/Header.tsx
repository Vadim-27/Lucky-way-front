import Burger from './Burger';
import LangSwitcher from './LangSwitcher';
import Logo from './Logo';
import Navigation from './Navigation';

import scss from './Header.module.scss';

const Header = () => {
    return (
        <header className={scss.header}>
            <div className={scss.wrapper}>
                <Logo />
                <Navigation className={scss.navigation} />
                <div className={scss.langSwitcherWrapper}>
                    <LangSwitcher id="desktop-switcher" className={scss.langSwitcher} />
                </div>

                <Burger className={scss.burger} />
            </div>
        </header>
    );
};

export default Header;
