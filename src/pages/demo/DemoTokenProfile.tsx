import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, TrendingUp, TrendingDown, Sparkles } from 'lucide-react';
import tokensData from '../../data/demo/tokens.json';

export default function DemoTokenProfile() {
    const { address } = useParams<{ address: string }>();
    const token = tokensData.find((t) => t.address === address);

    if (!token) {
        return (
            <div className="p-6 lg:p-8">
                <div className="text-center py-12">
                    <p className="text-slate-400 mb-4">Token not found</p>
                    <Link to="/demo/tokens" className="text-blue-400 hover:underline">
                        ← Back to Token Explorer
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

    return (
        <div className="p-6 lg:p-8">
            {/* Back Link */}
            <Link
                to="/demo/tokens"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Token Explorer
            </Link>

            {/* Header */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 mb-6">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30">
                                <span className="font-bold text-white">{token.symbol.slice(0, 2)}</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">{token.name}</h1>
                                <div className="text-slate-400">{token.symbol} · {token.chain}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <div className="text-3xl font-bold text-white">${formatPrice(token.price)}</div>
                            <div className={`flex items-center gap-1 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                                {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                                <span className="font-medium">{isPositive ? '+' : ''}{token.change24h}% (24h)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                    <div className="text-sm text-slate-400 mb-1">Market Cap</div>
                    <div className="text-xl font-bold text-white">
                        ${(token.marketCap / 1000000000).toFixed(2)}B
                    </div>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                    <div className="text-sm text-slate-400 mb-1">24h Volume</div>
                    <div className="text-xl font-bold text-white">
                        ${(token.volume24h / 1000000).toFixed(0)}M
                    </div>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                    <div className="text-sm text-slate-400 mb-1 flex items-center gap-1">
                        <Sparkles className="w-4 h-4" /> Smart Money Score
                    </div>
                    <div className={`text-xl font-bold ${token.smartMoneyAccumulation >= 80 ? 'text-emerald-400' :
                            token.smartMoneyAccumulation >= 60 ? 'text-amber-400' : 'text-slate-400'
                        }`}>
                        {token.smartMoneyAccumulation}%
                    </div>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                    <div className="text-sm text-slate-400 mb-1">Chain</div>
                    <div className="text-xl font-bold text-white capitalize">{token.chain}</div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Top Holders */}
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl">
                    <div className="p-4 border-b border-slate-700/50">
                        <h2 className="font-semibold text-white">Top Smart Money Holders</h2>
                    </div>
                    <div className="divide-y divide-slate-800/50">
                        {token.topHolders.map((holder, i) => (
                            <div key={i} className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white">
                                        {i + 1}
                                    </span>
                                    <span className="font-mono text-sm text-slate-300">{holder.address}</span>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-white">{holder.percentOwned}%</div>
                                    <div className="text-xs text-slate-500">{holder.balance.toLocaleString()}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Narrative Tags */}
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl">
                    <div className="p-4 border-b border-slate-700/50">
                        <h2 className="font-semibold text-white">Narratives</h2>
                    </div>
                    <div className="p-4">
                        <p className="text-slate-400 text-sm mb-4">{token.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {token.narrativeTags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 bg-slate-700/50 text-white text-sm rounded-full"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contract */}
                    <div className="p-4 border-t border-slate-700/50">
                        <div className="text-sm text-slate-400 mb-2">Contract Address</div>
                        <div className="flex items-center gap-2">
                            <code className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded truncate flex-1">
                                {token.address}
                            </code>
                            <a href="#" className="p-1 hover:bg-slate-700/50 rounded transition-colors">
                                <ExternalLink className="w-4 h-4 text-slate-400" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
