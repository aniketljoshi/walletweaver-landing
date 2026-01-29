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
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="block glass-card p-5 hover:border-neon-cyan/20 transition-colors group"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 flex items-center justify-center border border-neon-cyan/20">
              <span className="font-bold text-white text-sm">{symbol.slice(0, 2)}</span>
            </div>
            <div>
              <h3 className="font-semibold text-white group-hover:text-neon-cyan transition-colors">
                {symbol}
              </h3>
              <p className="text-xs text-slate-500">{name}</p>
            </div>
          </div>
          {NetworkIcon && <NetworkIcon className={`w-5 h-5 ${chainColors[chain]}`} />}
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white">${formatPrice(price)}</span>
            <span
              className={`flex items-center gap-1 text-sm ${
                isPositive ? 'text-neon-emerald' : 'text-neon-rose'
              }`}
            >
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {isPositive ? '+' : ''}
              {change24h}%
            </span>
          </div>
        </div>

        {/* Smart Money Score */}
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-neon-amber" />
          <span className="text-sm text-slate-400">Smart Money:</span>
          <span
            className={`text-sm font-semibold ${
              smartMoneyAccumulation >= 80
                ? 'text-neon-emerald'
                : smartMoneyAccumulation >= 60
                ? 'text-neon-amber'
                : 'text-slate-400'
            }`}
          >
            {smartMoneyAccumulation}%
          </span>
        </div>

        {/* Narrative tags */}
        <div className="flex flex-wrap gap-2">
          {narrativeTags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded-full text-xs border ${
                narrativeColors[tag] || 'text-slate-400 border-slate-600/30 bg-slate-600/5'
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
