import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: ReactNode;
  suffix?: string;
}

export default function StatCard({ title, value, change, icon, suffix }: StatCardProps) {
  const isPositive = change >= 0;

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex items-center justify-between mb-4">
        <span className="text-slate-400 text-sm font-medium tracking-wide uppercase">{title}</span>
        <div className="p-2.5 bg-white/5 border border-white/5 rounded-xl group-hover:bg-white/10 group-hover:border-white/10 transition-all shadow-inner">
          {icon}
        </div>
      </div>

      <div className="relative z-10 flex items-end justify-between">
        <div>
          <div className="text-3xl font-bold text-white tracking-tight leading-none mb-1">
            {value}
            {suffix && <span className="text-sm font-medium text-slate-500 ml-1.5">{suffix}</span>}
          </div>
        </div>
        <div className={`flex items-center gap-0.5 text-sm font-medium px-2 py-1 rounded-lg ${isPositive
            ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
            : 'text-rose-400 bg-rose-500/10 border border-rose-500/20'
          }`}>
          {isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
          {Math.abs(change)}%
        </div>
      </div>
    </motion.div>
  );
}
