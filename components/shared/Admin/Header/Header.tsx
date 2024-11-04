import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';

import scss from './Header.module.scss';

const Header = () => {
    return (
        <header className={scss.header}>
            <Container>
                <Logo />
            </Container>
        </header>
    );
};

export default Header;
