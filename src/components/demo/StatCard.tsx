import { ReactNode } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string | number;
    change?: number;
    icon?: ReactNode;
    prefix?: string;
    suffix?: string;
}

export default function StatCard({ title, value, change, icon, prefix = '', suffix = '' }: StatCardProps) {
    const isPositive = change !== undefined && change >= 0;

    return (
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600/50 transition-colors">
            <div className="flex items-start justify-between mb-3">
                <span className="text-sm text-slate-400">{title}</span>
                {icon && (
                    <div className="p-2 bg-slate-700/30 rounded-lg">
                        {icon}
                    </div>
                )}
            </div>

            <div className="flex items-end justify-between">
                <div className="text-2xl font-bold text-white">
                    {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
                </div>

                {change !== undefined && (
                    <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                        {isPositive ? (
                            <TrendingUp className="w-4 h-4" />
                        ) : (
                            <TrendingDown className="w-4 h-4" />
                        )}
                        <span>{isPositive ? '+' : ''}{change.toFixed(1)}%</span>
                    </div>
                )}
            </div>
        </div>
    );
}
