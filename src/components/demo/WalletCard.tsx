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
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]"
      >
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-cyan/50 transition-colors">
                {NetworkIcon ? <NetworkIcon className={`w-5 h-5 ${chainColors[chain]}`} /> : <span className="text-xs font-bold">{chain[0].toUpperCase()}</span>}
              </div>
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#090A0B] flex items-center justify-center bg-void-deep`}>
                <div className={`w-2 h-2 rounded-full ${smartMoneyScore >= 80 ? 'bg-neon-emerald shadow-[0_0_5px_theme(colors.neon-emerald)]' : 'bg-neon-amber'}`} />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg group-hover:text-neon-cyan transition-colors tracking-tight">
                {label}
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-xs text-slate-500 font-mono tracking-wide">
                  {ensName || `${address.slice(0, 6)}...${address.slice(-4)}`}
                </p>
                <ExternalLink className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          <span
            className={`inline-flex px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${entityColors[entityType] || entityColors.trader
              }`}
          >
            {entityType.replace('_', ' ')}
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-500 mb-1 tracking-wider">Smart Score</p>
            <p
              className={`text-xl font-bold font-mono ${smartMoneyScore >= 80
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
            <p className="text-[10px] uppercase font-bold text-slate-500 mb-1 tracking-wider">30d PnL</p>
            <p className={`text-xl font-bold font-mono flex items-center gap-1.5 ${isPositive ? 'text-neon-emerald' : 'text-neon-rose'}`}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              ${Math.abs(pnl30d / 1000000).toFixed(2)}M
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-500 mb-1 tracking-wider">30d ROI</p>
            <p className={`text-sm font-bold font-mono ${roi30d >= 0 ? 'text-neon-emerald' : 'text-neon-rose'}`}>
              {roi30d >= 0 ? '+' : ''}
              {roi30d}%
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-500 mb-1 tracking-wider">Win Rate</p>
            <p className="text-sm font-bold font-mono text-white">{winRate}%</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
