import { Link } from 'react-router-dom';
import { EthereumIcon, SolanaIcon, BaseIcon, ArbitrumIcon, PolygonIcon } from './NetworkIcons';
import { Network, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 sm:pt-32 sm:pb-40">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm">
            <Network className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-slate-200">WalletWeaver</span>
            <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold rounded-full">
              Coming Soon
            </span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">The Bloomberg Terminal</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              for On-Chain Intelligence
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real-time blockchain indexing. ML-powered wallet clustering. Smart-money scoring.
            One GraphQL API to power your trading edge, portfolio analytics, and compliance workflows.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400 pt-2">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700/50">
              <EthereumIcon className="w-3.5 h-3.5 text-blue-400" /> Ethereum
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700/50">
              <SolanaIcon className="w-3.5 h-3.5 text-purple-400" /> Solana
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700/50">
              <BaseIcon className="w-3.5 h-3.5 text-blue-400" /> Base
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700/50">
              <ArbitrumIcon className="w-3.5 h-3.5 text-cyan-400" /> Arbitrum
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700/50">
              <PolygonIcon className="w-3.5 h-3.5 text-purple-400" /> Polygon
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105">
              Join the Waitlist
              <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/demo"
              className="group px-8 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg font-semibold text-emerald-400 backdrop-blur-sm transition-all hover:border-emerald-500/50"
            >
              <Play className="inline-block mr-2 w-4 h-4" />
              Try Live Demo
              <span className="block text-xs font-normal text-emerald-400/70 mt-0.5">
                Explore in 2 minutes
              </span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-slate-500">
            <span>✓ Early access for waitlist members</span>
            <span>✓ TypeScript, Python & Go SDKs</span>
            <span>✓ SOC 2 compliant</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}
