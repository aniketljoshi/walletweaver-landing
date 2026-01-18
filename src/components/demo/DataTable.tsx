import { ArrowUpDown } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface Column<T> {
    key: keyof T | string;
    label: string;
    sortable?: boolean;
    render?: (item: T) => ReactNode;
    className?: string;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    keyField: keyof T;
    onRowClick?: (item: T) => void;
}

export default function DataTable<T extends Record<string, unknown>>({
    data,
    columns,
    keyField,
    onRowClick,
}: DataTableProps<T>) {
    const [sortKey, setSortKey] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

    const handleSort = (key: string) => {
        if (sortKey === key) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortDirection('desc');
        }
    };

    const sortedData = [...data].sort((a, b) => {
        if (!sortKey) return 0;
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (typeof aVal === 'number' && typeof bVal === 'number') {
            return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
        }
        const aStr = String(aVal);
        const bStr = String(bVal);
        return sortDirection === 'asc' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
    });

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-slate-700/50">
                        {columns.map((col) => (
                            <th
                                key={String(col.key)}
                                className={`px-4 py-3 text-left text-sm font-medium text-slate-400 ${col.sortable ? 'cursor-pointer hover:text-white' : ''
                                    } ${col.className || ''}`}
                                onClick={() => col.sortable && handleSort(String(col.key))}
                            >
                                <div className="flex items-center gap-2">
                                    {col.label}
                                    {col.sortable && (
                                        <ArrowUpDown className={`w-4 h-4 ${sortKey === col.key ? 'text-blue-400' : ''}`} />
                                    )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item) => (
                        <tr
                            key={String(item[keyField])}
                            className={`border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors ${onRowClick ? 'cursor-pointer' : ''
                                }`}
                            onClick={() => onRowClick?.(item)}
                        >
                            {columns.map((col) => (
                                <td key={String(col.key)} className={`px-4 py-4 ${col.className || ''}`}>
                                    {col.render
                                        ? col.render(item)
                                        : String(item[col.key as keyof T] ?? '')}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
