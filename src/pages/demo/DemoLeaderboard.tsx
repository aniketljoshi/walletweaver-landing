import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, Trophy, ExternalLink } from 'lucide-react';
import walletsData from '../../data/demo/wallets.json';

type SortField = 'smartMoneyScore' | 'roi30d' | 'pnl30d' | 'winRate';
type TimeRange = '7d' | '30d' | '90d';

export default function DemoLeaderboard() {
    const [timeRange, setTimeRange] = useState<TimeRange>('30d');
    const [sortField, setSortField] = useState<SortField>('smartMoneyScore');

    const sortedWallets = [...walletsData]
        .filter((w) => w.entityType !== 'exchange') // Exclude exchanges from leaderboard
        .sort((a, b) => {
            const aVal = a[sortField];
            const bVal = b[sortField];
            return (bVal as number) - (aVal as number);
        });

    const getMedalColor = (rank: number) => {
        if (rank === 0) return 'text-amber-400';
        if (rank === 1) return 'text-slate-300';
        if (rank === 2) return 'text-amber-600';
        return 'text-slate-500';
    };

    return (
        <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Trophy className="w-6 h-6 text-amber-400" />
                    <h1 className="text-2xl font-bold text-white">Smart Money Leaderboard</h1>
                </div>
                <p className="text-slate-400">Top performing wallets ranked by performance</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex gap-2">
                    {(['7d', '30d', '90d'] as TimeRange[]).map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${timeRange === range
                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                    : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:text-white'
                                }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>

                <select
                    value={sortField}
                    onChange={(e) => setSortField(e.target.value as SortField)}
                    className="px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
                >
                    <option value="smartMoneyScore">Sort by Score</option>
                    <option value="roi30d">Sort by ROI</option>
                    <option value="pnl30d">Sort by PnL</option>
                    <option value="winRate">Sort by Win Rate</option>
                </select>
            </div>

            {/* Leaderboard Table */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-700/50">
                                <th className="px-4 py-3 text-left text-sm font-medium text-slate-400">Rank</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-slate-400">Wallet</th>
                                <th className="px-4 py-3 text-left text-sm font-medium text-slate-400">Type</th>
                                <th className="px-4 py-3 text-right text-sm font-medium text-slate-400">Score</th>
                                <th className="px-4 py-3 text-right text-sm font-medium text-slate-400">ROI ({timeRange})</th>
                                <th className="px-4 py-3 text-right text-sm font-medium text-slate-400">PnL ({timeRange})</th>
                                <th className="px-4 py-3 text-right text-sm font-medium text-slate-400">Win Rate</th>
                                <th className="px-4 py-3 text-center text-sm font-medium text-slate-400"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedWallets.map((wallet, index) => {
                                const isPositive = wallet.pnl30d >= 0;
                                return (
                                    <tr
                                        key={wallet.address}
                                        className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors"
                                    >
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2">
                                                {index < 3 ? (
                                                    <Trophy className={`w-5 h-5 ${getMedalColor(index)}`} />
                                                ) : (
                                                    <span className="w-5 text-center text-slate-500">{index + 1}</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div>
                                                <div className="font-medium text-white">{wallet.label}</div>
                                                <div className="text-xs text-slate-500 font-mono">
                                                    {wallet.ensName || `${wallet.address.slice(0, 8)}...`}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                                                {wallet.entityType.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-right">
                                            <span className="font-bold text-blue-400">{wallet.smartMoneyScore}</span>
                                        </td>
                                        <td className="px-4 py-4 text-right">
                                            <span className={`font-medium ${wallet.roi30d >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                                                {wallet.roi30d >= 0 ? '+' : ''}{wallet.roi30d}%
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 text-right">
                                            <div className={`flex items-center justify-end gap-1 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                                                {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                                ${Math.abs(wallet.pnl30d / 1000000).toFixed(2)}M
                                            </div>
                                        </td>
                                        <td className="px-4 py-4 text-right">
                                            <span className="text-white">{wallet.winRate}%</span>
                                        </td>
                                        <td className="px-4 py-4 text-center">
                                            <Link
                                                to={`/demo/wallets/${wallet.address}`}
                                                className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors inline-flex"
                                            >
                                                <ExternalLink className="w-4 h-4 text-slate-400" />
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
