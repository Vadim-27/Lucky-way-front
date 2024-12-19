import { ReactNode } from 'react';

import AdminLayout from './layout';

interface AdminLayoutWrapperProps {
    children: ReactNode;
}

export default async function AdminLayoutWrapper({ children }: AdminLayoutWrapperProps) {
    return <AdminLayout>{children}</AdminLayout>;
}
