'use client';

import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

import { store } from '../../redux/store';

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <Header />
            {children}
            <Footer />
        </Provider>
    );
};

export default AdminLayout;
