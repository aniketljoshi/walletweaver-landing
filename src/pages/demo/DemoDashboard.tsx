import { Link } from 'react-router-dom';
import { Wallet, Coins, TrendingUp, Activity, ArrowUpRight, ArrowDownRight, Zap, Globe, Clock, Shield, Cpu } from 'lucide-react';
import StatCard from '../../components/demo/StatCard';
import walletsData from '../../data/demo/wallets.json';
import tokensData from '../../data/demo/tokens.json';
import transactionsData from '../../data/demo/transactions.json';
import narrativesData from '../../data/demo/narratives.json';

export default function DemoDashboard() {
    return (
        <div className="p-2 space-y-6">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-void-deep/50 p-4 rounded-2xl border border-white/5 backdrop-blur-md">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight mb-2 flex items-center gap-3">
                        <Cpu className="w-8 h-8 text-neon-cyan animate-pulse" />
                        Command Center
                    </h1>
                    <div className="flex items-center gap-4 text-slate-400 text-sm font-mono">
                        <span className="flex items-center gap-2 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                            SYSTEM ONLINE
                        </span>
                        <span className="hidden sm:inline">|</span>
                        <span className="hidden sm:inline">BLOCK: 19,240,128</span>
                        <span className="hidden sm:inline">|</span>
                        <span>GAS: 12 GWEI</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-bold rounded-lg border border-white/10 transition-colors flex items-center gap-2 font-mono">
                        <Clock className="w-4 h-4 text-slate-400" />
                        24H VIEW
                    </button>
                    <button className="px-4 py-2 bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan text-sm font-bold rounded-lg border border-neon-cyan/20 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]">
                        <Zap className="w-4 h-4" />
                        QUICK SCAN
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    title="Smart Wallets"
                    value={walletsData.length}
                    change={12.5}
                    icon={<Wallet className="w-5 h-5 text-neon-cyan" />}
                    suffix=" active"
                />
                <StatCard
                    title="Alpha Signals"
                    value={tokensData.length}
                    change={8.3}
                    icon={<Coins className="w-5 h-5 text-neon-violet" />}
                    suffix=" high conf"
                />
                <StatCard
                    title="Net Flow (24h)"
                    value="$2.4B"
                    change={15.7}
                    icon={<TrendingUp className="w-5 h-5 text-neon-emerald" />}
                />
                <StatCard
                    title="Market Risk"
                    value="Low"
                    change={-3.2}
                    icon={<Shield className="w-5 h-5 text-neon-rose" />}
                    suffix=" stable"
                />
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Activity Feed */}
                <div className="lg:col-span-2 group relative bg-void-deep border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent opacity-50" />

                    <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/5">
                        <div className="flex items-center gap-3">
                            <Activity className="w-5 h-5 text-neon-cyan" />
                            <h2 className="font-bold text-white tracking-wide uppercase text-sm">Live Intelligence Feed</h2>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-neon-cyan/70 bg-neon-cyan/5 px-2 py-1 rounded border border-neon-cyan/10">
                            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                            REAL-TIME
                        </div>
                    </div>

                    <div className="divide-y divide-white/5">
                        {transactionsData.slice(0, 6).map((tx) => (
                            <div key={tx.id} className="p-4 hover:bg-white/5 transition-colors group/item relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-neon-cyan/0 to-transparent group-hover/item:via-neon-cyan/50 transition-all" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-white/5 transition-all group-hover/item:scale-110 shadow-lg ${tx.type === 'buy' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                            tx.type === 'swap' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                                            }`}>
                                            {tx.type === 'buy' ? <ArrowDownRight className="w-5 h-5" /> :
                                                tx.type === 'swap' ? <Globe className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-bold text-white text-sm">{tx.walletLabel}</span>
                                                <span className={`text-[9px] uppercase font-bold px-1.5 py-0.5 rounded border ${tx.type === 'buy' ? 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5' :
                                                    tx.type === 'sell' ? 'border-rose-500/20 text-rose-400 bg-rose-500/5' :
                                                        'border-blue-500/20 text-blue-400 bg-blue-500/5'
                                                    }`}>
                                                    {tx.type}
                                                </span>
                                            </div>
                                            <div className="text-sm text-slate-400 font-mono">
                                                <span className="text-white font-medium">{tx.fromAmount.toLocaleString()} {tx.fromToken}</span>
                                                <span className="mx-2 text-slate-600">➜</span>
                                                <span className="text-white font-medium">{tx.toAmount.toLocaleString()} {tx.toToken}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-white font-mono tracking-tight">${(tx.valueUsd / 1000).toFixed(1)}K</div>
                                        <div className="text-xs text-slate-500 mt-1 flex items-center justify-end gap-1.5 font-medium">
                                            {tx.chain === 'Ethereum' ? <div className="w-1.5 h-1.5 rounded-full bg-[#627EEA] shadow-[0_0_5px_#627EEA]" /> :
                                                tx.chain === 'Solana' ? <div className="w-1.5 h-1.5 rounded-full bg-[#14F195] shadow-[0_0_5px_#14F195]" /> : null}
                                            {tx.chain}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Narrative Heatmap */}
                <div className="bg-void-deep border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                    <div className="p-5 border-b border-white/5 bg-white/5">
                        <h2 className="font-bold text-white tracking-wide uppercase text-sm">Narrative Heatmap</h2>
                    </div>
                    <div className="p-5 space-y-6 flex-1 overflow-y-auto custom-scrollbar">
                        {narrativesData.map((narrative) => (
                            <div key={narrative.id} className="group cursor-default">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors uppercase tracking-tight">{narrative.name}</span>
                                    </div>
                                    <span className={`text-xs font-bold font-mono ${narrative.change24h >= 0 ? 'text-neon-emerald' : 'text-neon-rose'}`}>
                                        {narrative.change24h >= 0 ? '+' : ''}{narrative.change24h}%
                                    </span>
                                </div>
                                <div className="h-2 bg-black/40 rounded-full overflow-hidden border border-white/5">
                                    <div
                                        className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                                        style={{
                                            width: `${narrative.heatScore}%`,
                                            backgroundColor: narrative.color,
                                            boxShadow: `0 0 10px ${narrative.color}40`
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="pt-8 mt-auto">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-neon-violet/10 to-transparent border border-neon-violet/20 group hover:border-neon-violet/40 transition-colors cursor-help">
                                <div className="text-neon-violet text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center gap-2">
                                    <Zap className="w-3 h-3" />
                                    AI Prediction
                                </div>
                                <div className="text-white text-sm font-bold">Rotation to Layer 2s imminent</div>
                                <div className="text-xs text-slate-400 mt-1">Confidence: 87%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trending Tokens */}
            <div className="bg-void-deep border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/5">
                    <h2 className="font-bold text-white tracking-wide uppercase text-sm">Trending Assets</h2>
                    <Link to="/demo/tokens" className="text-xs font-bold text-neon-cyan hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1 group">
                        View All
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
                    {tokensData.slice(0, 5).map((token) => (
                        <Link
                            key={token.address}
                            to={`/demo/tokens/${token.address}`}
                            className="p-5 hover:bg-white/5 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-4 h-4 text-neon-cyan" />
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-xs font-bold text-white group-hover:border-neon-cyan/30 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] transition-all">
                                    {token.symbol[0]}
                                </div>
                                <span className={`text-xs font-bold px-2 py-0.5 rounded border font-mono ${token.change24h >= 0
                                    ? 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5'
                                    : 'border-rose-500/20 text-rose-400 bg-rose-500/5'
                                    }`}>
                                    {token.change24h >= 0 ? '+' : ''}{token.change24h}%
                                </span>
                            </div>
                            <div className="mb-2">
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">{token.chain}</div>
                                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-neon-cyan transition-colors">{token.symbol}</h3>
                            </div>
                            <div className="text-xl font-mono font-bold text-white">
                                ${token.price < 0.01 ? token.price.toExponential(2) : token.price.toFixed(2)}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
