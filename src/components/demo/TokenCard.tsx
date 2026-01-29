import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react';
import { getNetworkIcon } from '../NetworkIcons';

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

const narrativeColors: Record<string, string> = {
  meme: 'text-neon-rose border-neon-rose/30 bg-neon-rose/5',
  ai: 'text-neon-violet border-neon-violet/30 bg-neon-violet/5',
  defi: 'text-neon-emerald border-neon-emerald/30 bg-neon-emerald/5',
  gaming: 'text-neon-amber border-neon-amber/30 bg-neon-amber/5',
  infrastructure: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/5',
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
  const NetworkIcon = getNetworkIcon(chain);

  const formatPrice = (p: number) => {
    if (p < 0.0001) return p.toExponential(2);
    if (p < 1) return p.toFixed(6);
    if (p < 100) return p.toFixed(2);
    return p.toLocaleString();
  };

  return (
    <Link to={`/demo/tokens/${address}`}>
      <motion.div
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]"
      >
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-cyan/50 transition-colors shadow-inner">
              <span className="font-bold text-white text-lg tracking-tight">{symbol.slice(0, 2)}</span>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg group-hover:text-neon-cyan transition-colors tracking-tight">
                {symbol}
              </h3>
              <p className="text-xs text-slate-500 font-medium">{name}</p>
            </div>
          </div>
          {NetworkIcon ?
            <NetworkIcon className={`w-5 h-5 ${chainColors[chain]} opacity-80`} /> :
            <span className="text-[10px] font-bold uppercase text-slate-500 bg-white/5 px-1.5 py-0.5 rounded">{chain}</span>
          }
        </div>

        {/* Price */}
        <div className="mb-6 pb-6 border-b border-white/5">
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-bold text-white font-mono tracking-tight">${formatPrice(price)}</span>
            <span
              className={`flex items-center gap-1 text-sm font-bold px-2 py-1 rounded-lg ${isPositive ? 'text-neon-emerald bg-emerald-500/10' : 'text-neon-rose bg-rose-500/10'
                }`}
            >
              {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
              {change24h}%
            </span>
          </div>
        </div>

        {/* Smart Money Signal */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-neon-amber" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Smart Interest</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${smartMoneyAccumulation >= 70 ? 'bg-neon-emerald' : 'bg-neon-amber'}`}
                style={{ width: `${smartMoneyAccumulation}%` }}
              />
            </div>
            <span className="text-sm font-bold text-white font-mono">{smartMoneyAccumulation}%</span>
          </div>
        </div>

        {/* Narrative tags */}
        <div className="flex flex-wrap gap-2">
          {narrativeTags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${narrativeColors[tag] || 'text-slate-400 border-slate-600/30 bg-slate-600/5'
                }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
