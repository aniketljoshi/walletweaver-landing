import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Copy, TrendingUp, TrendingDown, Wallet, Activity, PieChart, Clock, Trophy } from 'lucide-react';
import walletsData from '../../data/demo/wallets.json';
import transactionsData from '../../data/demo/transactions.json';

export default function DemoWalletProfile() {
    const { address } = useParams<{ address: string }>();
    const wallet = walletsData.find((w) => w.address === address);

    if (!wallet) {
        return (
            <div className="p-6 lg:p-8 flex items-center justify-center h-[50vh]">
                <div className="text-center">
                    <p className="text-slate-400 mb-4 text-lg">Wallet not found in our neural network</p>
                    <Link to="/demo/wallets" className="text-neon-cyan hover:underline font-bold">
                        ← Return to Explorer
                    </Link>
                </div>
            </div>
        );
    }

    const walletTransactions = transactionsData.filter(
        (tx) => tx.wallet.includes(address?.slice(2, 6) || '')
    ).slice(0, 5);

    const isPositive = wallet.pnl30d >= 0;

    return (
        <div className="p-2 space-y-6">
            {/* Back Link */}
            <Link
                to="/demo/wallets"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Explorer
            </Link>

            {/* Header */}
            <div className="bg-gradient-to-r from-void-deep to-transparent border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-4 mb-3">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                <Wallet className="w-8 h-8 text-neon-cyan" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white tracking-tight">{wallet.label}</h1>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-bold uppercase tracking-wider mt-1">
                                    {wallet.entityType.replace('_', ' ')}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-slate-400 bg-black/20 p-2 rounded-lg w-fit border border-white/5">
                            <span className="font-mono text-sm pl-2">
                                {wallet.ensName || `${wallet.address.slice(0, 10)}...${wallet.address.slice(-8)}`}
                            </span>
                            <div className="h-4 w-px bg-white/10" />
                            <div className="flex gap-1">
                                <button className="p-1.5 hover:bg-white/10 hover:text-white rounded transition-colors" title="Copy Address">
                                    <Copy className="w-3.5 h-3.5" />
                                </button>
                                <a href="#" className="p-1.5 hover:bg-white/10 hover:text-white rounded transition-colors" title="View on Block Explorer">
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Total Assets</div>
                            <div className="text-3xl font-bold text-white font-mono tracking-tight">${(wallet.totalValue / 1000000).toFixed(1)}M</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center min-w-[120px]">
                            <div className="text-xs text-slate-400 mb-1 font-bold uppercase">Smart Score</div>
                            <div className={`text-3xl font-bold font-mono ${wallet.smartMoneyScore >= 80 ? 'text-neon-emerald drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]' : 'text-neon-amber'}`}>
                                {wallet.smartMoneyScore}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Performance Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Activity className="w-4 h-4 text-neon-violet" />
                        <span className="text-xs font-bold uppercase tracking-wider">30d Net PnL</span>
                    </div>
                    <div className={`text-2xl font-bold flex items-center gap-2 font-mono ${isPositive ? 'text-neon-emerald' : 'text-neon-rose'}`}>
                        {isPositive ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                        ${Math.abs(wallet.pnl30d / 1000000).toFixed(2)}M
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <TrendingUp className="w-4 h-4 text-neon-cyan" />
                        <span className="text-xs font-bold uppercase tracking-wider">30d ROI</span>
                    </div>
                    <div className={`text-2xl font-bold font-mono ${wallet.roi30d >= 0 ? 'text-neon-emerald' : 'text-neon-rose'}`}>
                        {wallet.roi30d >= 0 ? '+' : ''}{wallet.roi30d}%
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Trophy className="w-4 h-4 text-neon-amber" />
                        <span className="text-xs font-bold uppercase tracking-wider">Win Rate</span>
                    </div>
                    <div className="text-2xl font-bold text-white font-mono">{wallet.winRate}%</div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Portfolio Composition */}
                <div className="bg-void-deep border border-white/10 rounded-2xl flex flex-col h-full overflow-hidden">
                    <div className="p-5 border-b border-white/10 bg-white/5 flex items-center gap-2">
                        <PieChart className="w-5 h-5 text-neon-violet" />
                        <h2 className="font-bold text-white text-sm tracking-widest uppercase">Portfolio Distribution</h2>
                    </div>
                    <div className="p-6 flex-1">
                        <div className="space-y-4">
                            {wallet.topTokens.map((token, i) => {
                                const percentage = (30 - i * 8);
                                const value = (wallet.totalValue * (percentage / 100)) / 1000000;
                                return (
                                    <div key={token} className="group">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 shadow-inner border border-white/10 flex items-center justify-center font-bold text-white text-xs">
                                                    {token.slice(0, 2)}
                                                </div>
                                                <span className="font-bold text-white">{token}</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-bold text-white">{percentage.toFixed(1)}%</div>
                                                <div className="text-xs text-slate-500 font-mono">${value.toFixed(1)}M</div>
                                            </div>
                                        </div>
                                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-neon-violet to-neon-cyan rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                                                style={{ width: `${percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-void-deep border border-white/10 rounded-2xl flex flex-col h-full overflow-hidden">
                    <div className="p-5 border-b border-white/10 bg-white/5 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-neon-cyan" />
                        <h2 className="font-bold text-white text-sm tracking-widest uppercase">Verified Activity</h2>
                    </div>
                    <div className="divide-y divide-white/5">
                        {walletTransactions.length > 0 ? (
                            walletTransactions.map((tx) => (
                                <div key={tx.id} className="p-4 hover:bg-white/5 transition-colors group">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg border flex items-center justify-center ${tx.type === 'buy' ? 'bg-neon-emerald/10 border-neon-emerald/20 text-neon-emerald' :
                                                tx.type === 'sell' ? 'bg-neon-rose/10 border-neon-rose/20 text-neon-rose' :
                                                    'bg-neon-cyan/10 border-neon-cyan/20 text-neon-cyan'
                                                }`}>
                                                {tx.type === 'buy' ? <TrendingUp className="w-4 h-4" /> : tx.type === 'sell' ? <TrendingDown className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
                                            </div>
                                            <div>
                                                <div className="font-bold text-white text-sm">
                                                    <span className="uppercase">{tx.type}</span> {tx.fromToken}
                                                    <span className="text-slate-500 mx-1">→</span>
                                                    {tx.toToken}
                                                </div>
                                                <div className="text-xs text-slate-500 font-mono mt-0.5">2 mins ago</div>
                                            </div>
                                        </div>
                                        <span className="font-bold text-white font-mono">${(tx.valueUsd / 1000).toFixed(0)}K</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-8 text-center border-dashed border-2 border-white/5 rounded-xl m-4">
                                <p className="text-slate-400 text-sm">No recent activity detected</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
