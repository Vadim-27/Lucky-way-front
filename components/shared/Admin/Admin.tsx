import { FC } from 'react';

import { IRootLayout } from '@/app/layout';

import Dashboard from './Dashboard';
import Header from './Header';
import Sidebar from './Sidebar';

import scss from './Admin.module.scss';

const Admin: FC<IRootLayout> = ({ children }) => {
    const links = [
        { label: 'Link 1', href: '#' },
        { label: 'Link 2', href: '#' },
        { label: 'Pages', href: '/admin/pages' },
        { label: 'Link 4', href: '#' },
        { label: 'Link 5', href: '#' },
        { label: 'Link 6', href: '# ' },
        { label: 'Link 7', href: '#' },
    ];
    return (
        <section className={scss.admin}>
            <Header />

            <main className={scss.main}>
                <Sidebar links={links} />
                <Dashboard>{children}</Dashboard>
            </main>
        </section>
    );
};

export default Admin;
