import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: ReactNode;
  prefix?: string;
  suffix?: string;
  color?: 'cyan' | 'violet' | 'emerald' | 'amber';
}

export default function StatCard({
  title,
  value,
  change,
  icon,
  prefix = '',
  suffix = '',
  color = 'cyan',
}: StatCardProps) {
  const isPositive = change !== undefined && change >= 0;

  const colorMap = {
    cyan: 'text-neon-cyan border-neon-cyan/20 bg-neon-cyan/5',
    violet: 'text-neon-violet border-neon-violet/20 bg-neon-violet/5',
    emerald: 'text-neon-emerald border-neon-emerald/20 bg-neon-emerald/5',
    amber: 'text-neon-amber border-neon-amber/20 bg-neon-amber/5',
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-5 hover:border-neon-cyan/20 transition-colors group"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-sm text-slate-400">{title}</span>
        {icon && (
          <div className={`p-2 rounded-lg ${colorMap[color]}`}>
            {icon}
          </div>
        )}
      </div>

      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
          {prefix}
          {typeof value === 'number' ? value.toLocaleString() : value}
          {suffix}
        </div>

        {change !== undefined && (
          <div
            className={`flex items-center gap-1 text-sm ${
              isPositive ? 'text-neon-emerald' : 'text-neon-rose'
            }`}
          >
            {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>
              {isPositive ? '+' : ''}
              {change.toFixed(1)}%
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
