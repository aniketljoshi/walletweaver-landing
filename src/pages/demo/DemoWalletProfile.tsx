import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Copy, TrendingUp, TrendingDown } from 'lucide-react';
import walletsData from '../../data/demo/wallets.json';
import transactionsData from '../../data/demo/transactions.json';

export default function DemoWalletProfile() {
    const { address } = useParams<{ address: string }>();
    const wallet = walletsData.find((w) => w.address === address);

    if (!wallet) {
        return (
            <div className="p-6 lg:p-8">
                <div className="text-center py-12">
                    <p className="text-slate-400 mb-4">Wallet not found</p>
                    <Link to="/demo/wallets" className="text-blue-400 hover:underline">
                        ← Back to Wallet Explorer
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
        <div className="p-6 lg:p-8">
            {/* Back Link */}
            <Link
                to="/demo/wallets"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Wallet Explorer
            </Link>

            {/* Header */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-6">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-2xl font-bold text-white">{wallet.label}</h1>
                            <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-medium rounded-full">
                                {wallet.entityType.replace('_', ' ')}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400">
                            <span className="font-mono text-sm">
                                {wallet.ensName || `${wallet.address.slice(0, 10)}...${wallet.address.slice(-8)}`}
                            </span>
                            <button className="p-1 hover:bg-slate-700/50 rounded transition-colors">
                                <Copy className="w-4 h-4" />
                            </button>
                            <a href="#" className="p-1 hover:bg-slate-700/50 rounded transition-colors">
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-center px-4 py-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg">
                            <div className="text-xs text-slate-400 mb-1">Smart Money Score</div>
                            <div className="text-2xl font-bold text-blue-400">{wallet.smartMoneyScore}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                    <div className="text-sm text-slate-400 mb-1">Total Value</div>
                    <div className="text-xl font-bold text-white">
                        ${(wallet.totalValue / 1000000).toFixed(1)}M
                    </div>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                    <div className="text-sm text-slate-400 mb-1">30d PnL</div>
                    <div className={`text-xl font-bold flex items-center gap-1 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                        {isPositive ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                        ${Math.abs(wallet.pnl30d / 1000000).toFixed(2)}M
                    </div>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                    <div className="text-sm text-slate-400 mb-1">30d ROI</div>
                    <div className={`text-xl font-bold ${wallet.roi30d >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {wallet.roi30d >= 0 ? '+' : ''}{wallet.roi30d}%
                    </div>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                    <div className="text-sm text-slate-400 mb-1">Win Rate</div>
                    <div className="text-xl font-bold text-white">{wallet.winRate}%</div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Top Holdings */}
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl">
                    <div className="p-4 border-b border-slate-700/50">
                        <h2 className="font-semibold text-white">Top Holdings</h2>
                    </div>
                    <div className="p-4">
                        <div className="space-y-3">
                            {wallet.topTokens.map((token, i) => (
                                <div key={token} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                                            {token.slice(0, 2)}
                                        </div>
                                        <span className="font-medium text-white">{token}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-white">{(30 - i * 8).toFixed(1)}%</div>
                                        <div className="text-xs text-slate-500">${((wallet.totalValue * (0.3 - i * 0.08)) / 1000000).toFixed(1)}M</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl">
                    <div className="p-4 border-b border-slate-700/50">
                        <h2 className="font-semibold text-white">Recent Transactions</h2>
                    </div>
                    <div className="divide-y divide-slate-800/50">
                        {walletTransactions.length > 0 ? (
                            walletTransactions.map((tx) => (
                                <div key={tx.id} className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className={`px-2 py-0.5 text-xs font-medium rounded ${tx.type === 'buy' ? 'bg-emerald-500/10 text-emerald-400' :
                                                    tx.type === 'sell' ? 'bg-red-500/10 text-red-400' :
                                                        'bg-blue-500/10 text-blue-400'
                                                }`}>
                                                {tx.type}
                                            </span>
                                            <span className="ml-2 text-sm text-white">
                                                {tx.fromToken} → {tx.toToken}
                                            </span>
                                        </div>
                                        <span className="text-sm text-slate-400">${(tx.valueUsd / 1000).toFixed(0)}K</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="p-4 text-center text-slate-400 text-sm">
                                No recent transactions for this demo wallet
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
