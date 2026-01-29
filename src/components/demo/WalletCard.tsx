import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, ExternalLink } from 'lucide-react';
import { getNetworkIcon } from '../NetworkIcons';

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
  whale: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/5',
  fund: 'text-neon-violet border-neon-violet/30 bg-neon-violet/5',
  exchange: 'text-neon-amber border-neon-amber/30 bg-neon-amber/5',
  trader: 'text-neon-emerald border-neon-emerald/30 bg-neon-emerald/5',
  founder: 'text-neon-rose border-neon-rose/30 bg-neon-rose/5',
  bot: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/5',
  market_maker: 'text-neon-amber border-neon-amber/30 bg-neon-amber/5',
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
  const NetworkIcon = getNetworkIcon(chain);

  return (
    <Link to={`/demo/wallets/${address}`}>
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="block glass-card p-5 hover:border-neon-cyan/20 transition-colors group"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {NetworkIcon && <NetworkIcon className={`w-5 h-5 ${chainColors[chain]}`} />}
            <div>
              <h3 className="font-semibold text-white group-hover:text-neon-cyan transition-colors">
                {label}
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                {ensName || `${address.slice(0, 6)}...${address.slice(-4)}`}
              </p>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Entity badge */}
        <div className="mb-4">
          <span
            className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${
              entityColors[entityType] || entityColors.trader
            }`}
          >
            {entityType.replace('_', ' ')}
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-slate-500 mb-1">Smart Money Score</p>
            <p
              className={`text-lg font-bold ${
                smartMoneyScore >= 80
                  ? 'text-neon-emerald'
                  : smartMoneyScore >= 60
                  ? 'text-neon-amber'
                  : 'text-slate-400'
              }`}
            >
              {smartMoneyScore}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">30d PnL</p>
            <p className={`text-lg font-bold flex items-center gap-1 ${isPositive ? 'text-neon-emerald' : 'text-neon-rose'}`}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              ${Math.abs(pnl30d / 1000000).toFixed(2)}M
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">30d ROI</p>
            <p className={`text-sm font-semibold ${roi30d >= 0 ? 'text-neon-emerald' : 'text-neon-rose'}`}>
              {roi30d >= 0 ? '+' : ''}
              {roi30d}%
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">Win Rate</p>
            <p className="text-sm font-semibold text-white">{winRate}%</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
