import Link from 'next/link';

import AdminTable from '@/components/ui/Admin/AdminTable';
import { poppins } from '@/constants/fonts';

import scss from './Pages.module.scss';

const Pages = () => {
    return (
        <AdminTable title="Pages" columns={['Name', 'Date', 'User', 'Language']}>
            <tbody className={poppins.className}>
                <tr className={scss.row}>
                    <td className={scss.data}>
                        <Link href="/admin/pages/home">Home</Link>
                    </td>
                    <td className={scss.data}>03.10.2024</td>
                    <td className={scss.data}>Vadim</td>
                    <td className={scss.data}>En, De, Cz</td>
                </tr>

                <tr className={scss.row}>
                    <td className={scss.data}>Home</td>
                    <td className={scss.data}>03.10.2024</td>
                    <td className={scss.data}>Vadim</td>
                    <td className={scss.data}>En, De, Cz</td>
                </tr>
            </tbody>
        </AdminTable>
    );
};

export default Pages;
