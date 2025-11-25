import { Network, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 sm:pt-32 sm:pb-40">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm">
            <Network className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-slate-200">WalletWeaver</span>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">See the on-chain story</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              behind every wallet
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            WalletWeaver transforms raw addresses into wallet clusters, entity profiles,
            and smart money signals — so you always know who you're really trading against.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105">
              Join the Waitlist
              <TrendingUp className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="relative px-8 py-4 bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700/50 rounded-lg font-semibold text-white backdrop-blur-sm transition-all hover:border-slate-600">
              View Demo
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-teal-500 text-xs font-bold text-white rounded-full">
                Coming Soon
              </span>
            </button>
          </div>

          <p className="text-sm text-slate-400 pt-4">
            Built for funds, research desks, and serious on-chain teams.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}
