import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react';

interface TokenCardProps {
    address: string;
    symbol: string;
    name: string;
    chain: string;
    price: number;
    change24h: number;
    smartMoneyAccumulation: number;
    narrativeTags: string[];
}

const chainColors: Record<string, string> = {
    ethereum: 'text-blue-400',
    solana: 'text-purple-400',
    base: 'text-blue-300',
    arbitrum: 'text-cyan-400',
    polygon: 'text-purple-300',
};

export default function TokenCard({
    address,
    symbol,
    name,
    chain,
    price,
    change24h,
    smartMoneyAccumulation,
    narrativeTags,
}: TokenCardProps) {
    const isPositive = change24h >= 0;

    const formatPrice = (p: number) => {
        if (p < 0.0001) return p.toExponential(2);
        if (p < 1) return p.toFixed(6);
        if (p < 100) return p.toFixed(2);
        return p.toLocaleString();
    };

    return (
        <Link
            to={`/demo/tokens/${address}`}
            className="block bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all"
        >
            <div className="flex items-start justify-between mb-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-white text-lg">{symbol}</h3>
                        <span className={`text-xs ${chainColors[chain] || 'text-slate-400'}`}>
                            {chain}
                        </span>
                    </div>
                    <p className="text-sm text-slate-400">{name}</p>
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
                    }`}>
                    {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                    {isPositive ? '+' : ''}{change24h.toFixed(1)}%
                </div>
            </div>

            <div className="flex items-end justify-between mb-4">
                <div>
                    <div className="text-xs text-slate-500 mb-1">Price</div>
                    <div className="text-xl font-bold text-white">${formatPrice(price)}</div>
                </div>
                <div className="text-right">
                    <div className="text-xs text-slate-500 mb-1 flex items-center gap-1 justify-end">
                        <Sparkles className="w-3 h-3" /> Smart Money
                    </div>
                    <div className={`text-lg font-bold ${smartMoneyAccumulation >= 80 ? 'text-emerald-400' :
                            smartMoneyAccumulation >= 60 ? 'text-amber-400' : 'text-slate-400'
                        }`}>
                        {smartMoneyAccumulation}%
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {narrativeTags.slice(0, 3).map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </Link>
    );
}
