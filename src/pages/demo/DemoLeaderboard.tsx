import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, Trophy, ExternalLink, Filter } from 'lucide-react';
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
        if (rank === 0) return 'text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]';
        if (rank === 1) return 'text-slate-300 drop-shadow-[0_0_8px_rgba(203,213,225,0.5)]';
        if (rank === 2) return 'text-amber-700 drop-shadow-[0_0_8px_rgba(180,83,9,0.5)]';
        return 'text-slate-500';
    };

    return (
        <div className="p-2 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight mb-2 flex items-center gap-3">
                        <Trophy className="w-8 h-8 text-neon-amber" />
                        Hall of Fame
                    </h1>
                    <p className="text-slate-400">Top performing entities ranked by realized PnL and accuracy</p>
                </div>
                <div className="text-right hidden md:block">
                    <div className="text-2xl font-bold text-white tracking-tight">#{sortedWallets.length}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">Ranked Wallets</div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/5 border border-white/5 p-2 rounded-2xl backdrop-blur-sm">
                <div className="flex bg-black/20 rounded-xl p-1">
                    {(['7d', '30d', '90d'] as TimeRange[]).map((range) => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${timeRange === range
                                ? 'bg-neon-cyan/20 text-neon-cyan shadow-[0_0_10px_rgba(0,229,255,0.2)]'
                                : 'text-slate-500 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {range}
                        </button>
                    ))}
                </div>

                <div className="relative w-full sm:w-auto">
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <select
                        value={sortField}
                        onChange={(e) => setSortField(e.target.value as SortField)}
                        className="w-full sm:w-auto pl-10 pr-8 py-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-300 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all appearance-none cursor-pointer hover:bg-white/10 text-sm font-medium"
                    >
                        <option value="smartMoneyScore" className="bg-slate-900">Sort by Score</option>
                        <option value="roi30d" className="bg-slate-900">Sort by ROI</option>
                        <option value="pnl30d" className="bg-slate-900">Sort by PnL</option>
                        <option value="winRate" className="bg-slate-900">Sort by Win Rate</option>
                    </select>
                </div>
            </div>

            {/* Leaderboard Table */}
            <div className="bg-void/40 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-md">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/5">
                                <th className="px-6 py-4 text-left text-[10px] uppercase font-bold text-slate-400 tracking-wider">Rank</th>
                                <th className="px-6 py-4 text-left text-[10px] uppercase font-bold text-slate-400 tracking-wider">Wallet Identity</th>
                                <th className="px-6 py-4 text-left text-[10px] uppercase font-bold text-slate-400 tracking-wider">Risk Profile</th>
                                <th className="px-6 py-4 text-right text-[10px] uppercase font-bold text-slate-400 tracking-wider">Score</th>
                                <th className="px-6 py-4 text-right text-[10px] uppercase font-bold text-slate-400 tracking-wider">ROI ({timeRange})</th>
                                <th className="px-6 py-4 text-right text-[10px] uppercase font-bold text-slate-400 tracking-wider">PnL ({timeRange})</th>
                                <th className="px-6 py-4 text-right text-[10px] uppercase font-bold text-slate-400 tracking-wider">Win Rate</th>
                                <th className="px-6 py-4 text-center text-[10px] uppercase font-bold text-slate-400 tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedWallets.map((wallet, index) => {
                                const isPositive = wallet.pnl30d >= 0;
                                return (
                                    <tr
                                        key={wallet.address}
                                        className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <span className={`text-lg font-bold ${index < 3 ? 'scale-125 transition-transform' : 'text-slate-600'}`}>
                                                    {index < 3 ? (
                                                        <Trophy className={`w-6 h-6 ${getMedalColor(index)}`} />
                                                    ) : `#${index + 1}`}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className="font-bold text-white group-hover:text-neon-cyan transition-colors">{wallet.label}</div>
                                                <div className="text-xs text-slate-500 font-mono">
                                                    {wallet.ensName || `${wallet.address.slice(0, 8)}...`}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2.5 py-1 bg-white/5 border border-white/5 text-slate-300 text-[10px] uppercase font-bold tracking-wider rounded-lg">
                                                {wallet.entityType.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="inline-block relative">
                                                <span className={`font-bold font-mono ${wallet.smartMoneyScore >= 80 ? 'text-neon-emerald' : 'text-neon-amber'}`}>
                                                    {wallet.smartMoneyScore}
                                                </span>
                                                {wallet.smartMoneyScore >= 90 && (
                                                    <div className="absolute -top-1 -right-2 w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className={`font-bold font-mono ${wallet.roi30d >= 0 ? 'text-neon-emerald' : 'text-neon-rose'}`}>
                                                {wallet.roi30d >= 0 ? '+' : ''}{wallet.roi30d}%
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className={`flex items-center justify-end gap-1 font-bold font-mono ${isPositive ? 'text-neon-emerald' : 'text-neon-rose'}`}>
                                                {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                                ${Math.abs(wallet.pnl30d / 1000000).toFixed(2)}M
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className="font-bold font-mono text-white">{wallet.winRate}%</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <Link
                                                to={`/demo/wallets/${wallet.address}`}
                                                className="p-2 bg-white/5 hover:bg-neon-cyan/20 hover:text-neon-cyan rounded-lg transition-all inline-flex border border-transparent hover:border-neon-cyan/30"
                                            >
                                                <ExternalLink className="w-4 h-4" />
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
