import { Link } from 'react-router-dom';
import { Wallet, Coins, TrendingUp, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import StatCard from '../../components/demo/StatCard';
import walletsData from '../../data/demo/wallets.json';
import tokensData from '../../data/demo/tokens.json';
import transactionsData from '../../data/demo/transactions.json';
import narrativesData from '../../data/demo/narratives.json';

export default function DemoDashboard() {
    return (
        <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">Dashboard</h1>
                <p className="text-slate-400">Real-time on-chain intelligence overview</p>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard
                    title="Smart Money Wallets"
                    value={walletsData.length}
                    change={12.5}
                    icon={<Wallet className="w-5 h-5 text-blue-400" />}
                    suffix=" tracked"
                />
                <StatCard
                    title="Trending Tokens"
                    value={tokensData.length}
                    change={8.3}
                    icon={<Coins className="w-5 h-5 text-purple-400" />}
                />
                <StatCard
                    title="24h Volume"
                    value="$2.4B"
                    change={15.7}
                    icon={<TrendingUp className="w-5 h-5 text-emerald-400" />}
                />
                <StatCard
                    title="Active Alerts"
                    value={156}
                    change={-3.2}
                    icon={<Activity className="w-5 h-5 text-amber-400" />}
                />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Activity Feed */}
                <div className="lg:col-span-2 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                    <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
                        <h2 className="font-semibold text-white">Smart Money Activity</h2>
                        <span className="text-xs text-slate-400">Live</span>
                    </div>
                    <div className="divide-y divide-slate-800/50">
                        {transactionsData.slice(0, 6).map((tx) => (
                            <div key={tx.id} className="p-4 hover:bg-slate-800/20 transition-colors">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start gap-3">
                                        <div className={`p-2 rounded-lg ${tx.type === 'buy' || tx.type === 'swap' ? 'bg-emerald-500/10' : 'bg-red-500/10'
                                            }`}>
                                            {tx.type === 'buy' || tx.type === 'swap' ? (
                                                <ArrowUpRight className={`w-4 h-4 ${tx.type === 'buy' ? 'text-emerald-400' : 'text-blue-400'}`} />
                                            ) : (
                                                <ArrowDownRight className="w-4 h-4 text-red-400" />
                                            )}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium text-white">{tx.walletLabel}</span>
                                                <span className="px-1.5 py-0.5 bg-slate-700/50 text-slate-400 text-xs rounded">
                                                    {tx.type}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-400">
                                                {tx.fromAmount.toLocaleString()} {tx.fromToken} → {tx.toAmount.toLocaleString()} {tx.toToken}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-white">${(tx.valueUsd / 1000).toFixed(0)}K</div>
                                        <div className="text-xs text-slate-500">{tx.chain}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link
                        to="/demo/wallets"
                        className="block p-4 text-center text-sm text-blue-400 hover:text-blue-300 border-t border-slate-700/50"
                    >
                        View all activity →
                    </Link>
                </div>

                {/* Narrative Heatmap */}
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl">
                    <div className="p-4 border-b border-slate-700/50">
                        <h2 className="font-semibold text-white">Narrative Heatmap</h2>
                    </div>
                    <div className="p-4 space-y-3">
                        {narrativesData.map((narrative) => (
                            <div key={narrative.id} className="group">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-white">{narrative.name}</span>
                                    <span className={`text-sm font-medium ${narrative.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'
                                        }`}>
                                        {narrative.change24h >= 0 ? '+' : ''}{narrative.change24h}%
                                    </span>
                                </div>
                                <div className="h-2 bg-slate-700/30 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all"
                                        style={{
                                            width: `${narrative.heatScore}%`,
                                            backgroundColor: narrative.color,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trending Tokens */}
            <div className="mt-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
                <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
                    <h2 className="font-semibold text-white">Trending Tokens</h2>
                    <Link to="/demo/tokens" className="text-sm text-blue-400 hover:text-blue-300">
                        View all →
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/50">
                    {tokensData.slice(0, 5).map((token) => (
                        <Link
                            key={token.address}
                            to={`/demo/tokens/${token.address}`}
                            className="p-4 hover:bg-slate-800/20 transition-colors"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-white">{token.symbol}</span>
                                <span className={`text-sm ${token.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                                    {token.change24h >= 0 ? '+' : ''}{token.change24h}%
                                </span>
                            </div>
                            <div className="text-sm text-slate-400">{token.chain}</div>
                            <div className="text-lg font-medium text-white mt-1">
                                ${token.price < 0.01 ? token.price.toExponential(2) : token.price.toFixed(2)}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
