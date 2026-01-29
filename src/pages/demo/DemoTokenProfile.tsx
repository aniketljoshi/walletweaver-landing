import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, TrendingUp, TrendingDown, Sparkles, BarChart3, Users, DollarSign, Activity } from 'lucide-react';
import tokensData from '../../data/demo/tokens.json';
import walletsData from '../../data/demo/wallets.json';

export default function DemoTokenProfile() {
    const { address } = useParams<{ address: string }>();
    const token = tokensData.find((t) => t.address === address);

    if (!token) {
        return (
            <div className="p-6 lg:p-8 flex items-center justify-center h-[50vh]">
                <div className="text-center">
                    <p className="text-slate-400 mb-4 text-lg">Token not found in our neural network</p>
                    <Link to="/demo/tokens" className="text-neon-cyan hover:underline font-bold">
                        ← Return to Explorer
                    </Link>
                </div>
            </div>
        );
    }

    const isPositive = token.change24h >= 0;

    const formatPrice = (p: number) => {
        if (p < 0.0001) return p.toExponential(2);
        if (p < 1) return p.toFixed(6);
        if (p < 100) return p.toFixed(2);
        return p.toLocaleString();
    };

    // Helper to get smart money score for a holder
    const getSmartMoneyScore = (address: string) => {
        const knownWallet = walletsData.find(w => w.address === address);
        if (knownWallet) return knownWallet.smartMoneyScore;
        // Generate a consistent pseudo-random score between 40 and 99 based on address
        const hash = address.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return 40 + (hash % 60);
    };

    return (
        <div className="p-2 space-y-6">
            {/* Back Link */}
            <Link
                to="/demo/tokens"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Token Explorer
            </Link>

            {/* Header */}
            <div className="bg-gradient-to-r from-void-deep via-[#0d0e12] to-transparent border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[100px] animate-pulse" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-md">
                                <span className="text-2xl font-bold text-white tracking-tight">{token.symbol.slice(0, 2)}</span>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold text-white tracking-tight mb-1">{token.name}</h1>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-bold text-slate-400">{token.symbol}</span>
                                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-300">
                                        {token.chain}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-end gap-6">
                        <div className="text-right">
                            <div className="text-4xl font-bold text-white font-mono tracking-tighter mb-1">${formatPrice(token.price)}</div>
                            <div className={`flex items-center justify-end gap-1.5 font-bold ${isPositive ? 'text-neon-emerald' : 'text-neon-rose'}`}>
                                {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                <span className="text-lg">{isPositive ? '+' : ''}{token.change24h}%</span>
                                <span className="text-xs font-medium opacity-60 uppercase tracking-wide ml-1">Past 24h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Market Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 group hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <DollarSign className="w-4 h-4 text-neon-cyan" />
                        <span className="text-xs font-bold uppercase tracking-wider">Market Cap</span>
                    </div>
                    <div className="text-2xl font-bold text-white font-mono tracking-tight">
                        ${(token.marketCap / 1000000000).toFixed(2)}B
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 group hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Activity className="w-4 h-4 text-neon-violet" />
                        <span className="text-xs font-bold uppercase tracking-wider">24h Volume</span>
                    </div>
                    <div className="text-2xl font-bold text-white font-mono tracking-tight">
                        ${(token.volume24h / 1000000).toFixed(0)}M
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 group hover:bg-white/10 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-neon-amber/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-2 text-slate-400 mb-2 relative z-10">
                        <Sparkles className="w-4 h-4 text-neon-amber" />
                        <span className="text-xs font-bold uppercase tracking-wider">Smart Interest</span>
                    </div>
                    <div className="relative z-10 flex items-baseline gap-2">
                        <div className={`text-2xl font-bold font-mono tracking-tight ${token.smartMoneyAccumulation >= 80 ? 'text-neon-emerald' :
                            token.smartMoneyAccumulation >= 60 ? 'text-neon-amber' : 'text-slate-400'
                            }`}>
                            {token.smartMoneyAccumulation}/100
                        </div>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 group hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-bold uppercase tracking-wider">Holders</span>
                    </div>
                    <div className="text-2xl font-bold text-white font-mono tracking-tight">
                        {((token.marketCap / token.price) / 1000).toFixed(1)}K
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Top Holders */}
                <div className="lg:col-span-2 bg-void-deep border border-white/10 rounded-2xl flex flex-col overflow-hidden">
                    <div className="p-5 border-b border-white/10 bg-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-neon-cyan" />
                            <h2 className="font-bold text-white text-sm tracking-widest uppercase">Smart Money Positions</h2>
                        </div>
                        <span className="px-2 py-1 rounded bg-neon-emerald/10 text-neon-emerald text-[10px] font-bold uppercase">Live Data</span>
                    </div>
                    <div className="divide-y divide-white/5">
                        {token.topHolders.map((holder, i) => {
                            const score = getSmartMoneyScore(holder.address);
                            return (
                                <div key={i} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:text-white group-hover:border-neon-cyan/50 transition-colors">
                                            {i + 1}
                                        </span>
                                        <div>
                                            <div className="font-mono text-sm font-bold text-slate-300 group-hover:text-neon-cyan transition-colors cursor-pointer hover:underline">
                                                {holder.address.slice(0, 8)}...{holder.address.slice(-6)}
                                            </div>
                                            <div className="text-xs text-slate-500 font-bold mt-0.5">
                                                Smart Score: <span className={`${score >= 80 ? 'text-neon-emerald' : 'text-neon-amber'}`}>{score}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-white">{holder.percentOwned}%</div>
                                        <div className="text-xs text-slate-500 font-mono mt-0.5">{holder.balance.toLocaleString()} {token.symbol}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Narrative & Info */}
                <div className="space-y-6">
                    <div className="bg-void-deep border border-white/10 rounded-2xl overflow-hidden">
                        <div className="p-5 border-b border-white/10 bg-white/5 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-neon-violet" />
                            <h2 className="font-bold text-white text-sm tracking-widest uppercase">Narrative Analysis</h2>
                        </div>
                        <div className="p-6">
                            <p className="text-slate-300 text-sm leading-relaxed mb-6 border-l-2 border-neon-violet/50 pl-4">
                                {token.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {token.narrativeTags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 bg-white/5 border border-white/10 hover:border-neon-cyan/50 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-default"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contract Info */}
                    <div className="bg-void-deep border border-white/10 rounded-2xl overflow-hidden p-5">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Contract Address</div>
                        <div className="flex items-center gap-2 bg-black/40 p-2 rounded-lg border border-white/5 group hover:border-white/20 transition-colors cursor-pointer">
                            <div className="w-2 h-2 rounded-full bg-neon-emerald animate-pulse" />
                            <code className="text-xs text-slate-300 font-mono truncate flex-1">
                                {token.address}
                            </code>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
