import { FC } from 'react';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

import { IRootLayout } from '../layout';

const AdminLayout: FC<IRootLayout> = async ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default AdminLayout;
