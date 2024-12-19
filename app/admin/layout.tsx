'use client';

import { FC, ReactNode, Suspense } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Sidebar from '@/components/shared/Admin/Sidebar';
import { store } from '@/redux/store';

import Header from '../../components/shared/Header';

import 'react-toastify/dist/ReactToastify.css';
import scss from '../../components/shared/Admin/Admin.module.scss';

interface RootLayoutProps {
    children: ReactNode;
}

const links = [
    { label: 'sections', href: '/admin/pages/navigation/sections' },
    { label: 'home', href: '/admin/pages/navigation/home' },
];

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <Suspense fallback={<div>Завантаження...</div>}>
                <section className={scss.admin}>
                    <Header />
                </section>

                <main className={scss.main}>
                    <ToastContainer />
                    <div className={scss.mainAdmin}>
                        <Sidebar links={links} />
                    </div>
                    <div className={scss.mainAdmin}>{children}</div>
                </main>
            </Suspense>
        </Provider>
    );
};

export default RootLayout;
