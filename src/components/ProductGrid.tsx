import { Search, Users, Trophy, LineChart, Copy, Bell } from 'lucide-react';

export default function ProductGrid() {
  const products = [
    {
      icon: Search,
      title: 'Wallet Explorer',
      status: 'coming-soon',
      description: 'Deep-dive into any wallet across 5 chains. Transaction history, portfolio composition, and behavioral patterns.'
    },
    {
      icon: Users,
      title: 'Entity Resolution',
      status: 'coming-soon',
      description: 'ML-powered clustering identifies the real entities behind wallet addresses. See who you\'re really trading with.'
    },
    {
      icon: Trophy,
      title: 'Smart Money Leaderboards',
      status: 'coming-soon',
      description: 'Ranked wallets by ROI, win rate, and conviction. Discover alpha before it becomes consensus.'
    },
    {
      icon: LineChart,
      title: 'Token & Narrative Analytics',
      status: 'coming-soon',
      description: 'Track token flows, holder concentration, and emerging narratives across the smart money graph.'
    },
    {
      icon: Copy,
      title: 'Copy-Trading Engine',
      status: 'coming-soon',
      description: 'Automated signals when top wallets make moves. Integrate with your trading infrastructure via webhooks.'
    },
    {
      icon: Bell,
      title: 'Real-Time Alerts',
      status: 'coming-soon',
      description: 'Instant notifications via Telegram, Discord, Email, or Webhooks. Never miss a smart money move.'
    }
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'live') {
      return (
        <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full">
          Live
        </span>
      );
    }
    if (status === 'beta') {
      return (
        <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold rounded-full">
          Beta
        </span>
      );
    }
    return (
      <span className="px-2 py-1 bg-slate-600/10 border border-slate-600/30 text-slate-400 text-xs font-semibold rounded-full">
        Coming Soon
      </span>
    );
  };

  return (
    <section className="py-24 sm:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need for on-chain alpha
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From wallet research to automated copy-trading — one platform for the entire workflow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 bg-slate-700/30 rounded-lg group-hover:bg-slate-700/50 transition-colors">
                  <product.icon className="w-5 h-5 text-blue-400" />
                </div>
                {getStatusBadge(product.status)}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {product.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
