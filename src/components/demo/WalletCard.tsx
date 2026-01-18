import { Link } from 'react-router-dom';
import { TrendingUp, TrendingDown, ExternalLink } from 'lucide-react';

interface WalletCardProps {
    address: string;
    ensName?: string | null;
    label: string;
    entityType: string;
    chain: string;
    smartMoneyScore: number;
    pnl30d: number;
    roi30d: number;
    winRate: number;
}

const entityColors: Record<string, string> = {
    whale: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    fund: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    exchange: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    trader: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    founder: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    bot: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    market_maker: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
};

const chainColors: Record<string, string> = {
    ethereum: 'text-blue-400',
    solana: 'text-purple-400',
    base: 'text-blue-300',
    arbitrum: 'text-cyan-400',
    polygon: 'text-purple-300',
};

export default function WalletCard({
    address,
    ensName,
    label,
    entityType,
    chain,
    smartMoneyScore,
    pnl30d,
    roi30d,
    winRate,
}: WalletCardProps) {
    const isPositive = pnl30d >= 0;

    return (
        <Link
            to={`/demo/wallets/${address}`}
            className="block bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600/50 hover:bg-slate-800/50 transition-all group"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-white truncate">{label}</h3>
                        <ExternalLink className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm text-slate-500 font-mono truncate">
                        {ensName || `${address.slice(0, 6)}...${address.slice(-4)}`}
                    </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${entityColors[entityType] || entityColors.trader}`}>
                        {entityType.replace('_', ' ')}
                    </span>
                    <span className={`text-xs ${chainColors[chain] || 'text-slate-400'}`}>
                        {chain}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div>
                    <div className="text-xs text-slate-500 mb-1">Score</div>
                    <div className="text-lg font-bold text-white">{smartMoneyScore}</div>
                </div>
                <div>
                    <div className="text-xs text-slate-500 mb-1">30d PnL</div>
                    <div className={`text-lg font-bold flex items-center gap-1 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                        {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        ${Math.abs(pnl30d / 1000000).toFixed(1)}M
                    </div>
                </div>
                <div>
                    <div className="text-xs text-slate-500 mb-1">ROI</div>
                    <div className={`text-lg font-bold ${roi30d >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {roi30d >= 0 ? '+' : ''}{roi30d.toFixed(1)}%
                    </div>
                </div>
                <div>
                    <div className="text-xs text-slate-500 mb-1">Win Rate</div>
                    <div className="text-lg font-bold text-white">{winRate}%</div>
                </div>
            </div>
        </Link>
    );
}
