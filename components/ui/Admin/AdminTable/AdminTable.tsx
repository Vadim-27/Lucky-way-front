import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import { poppins } from '@/constants/fonts';

import scss from './AdminTable.module.scss';

interface IAdminTable {
    title: string;
    columns: string[];
    children: ReactNode;
    className?: string;
}

const AdminTable: FC<IAdminTable> = ({ title, columns, children, className }) => {
    return (
        <section className={clsx(scss.wrapper, className)}>
            <div className={scss.headWrapper}>
                <h1 className={scss.title}>{title}</h1>
            </div>

            <table className={scss.table}>
                <thead>
                    <tr className={scss.row}>
                        {columns.map((column) => (
                            <th
                                key={column}
                                style={{ width: `calc(100% / ${columns.length})` }}
                                className={clsx(poppins.className, scss.column)}
                            >
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                {children}
            </table>
        </section>
    );
};

export default AdminTable;
