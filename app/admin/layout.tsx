import { FC } from 'react';

import Admin from '@/components/shared/Admin';

import { IRootLayout } from '../layout';

const AdminLayout: FC<IRootLayout> = ({ children }) => {
    return <Admin>{children}</Admin>;
};

export default AdminLayout;
