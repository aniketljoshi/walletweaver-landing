import { GitBranch, User, Star, Radio, Shield, Database } from 'lucide-react';

export default function ProductGrid() {
  const products = [
    {
      icon: GitBranch,
      title: 'Wallet Graph Explorer',
      status: 'live',
      description: 'Visualize wallet relationships and transaction flows across chains'
    },
    {
      icon: User,
      title: 'Entity Profiles',
      status: 'live',
      description: 'Deep-dive into wallet clusters with enriched identity data'
    },
    {
      icon: Star,
      title: 'Smart Money Watchlists',
      status: 'coming-soon',
      description: 'Track high-conviction wallets and their latest moves'
    },
    {
      icon: Radio,
      title: 'Fund & KOL Radar',
      status: 'coming-soon',
      description: 'Monitor notable entities and their portfolio changes'
    },
    {
      icon: Shield,
      title: 'Risk & Compliance View',
      status: 'coming-soon',
      description: 'Flag risky entities and assess counterparty exposure'
    },
    {
      icon: Database,
      title: 'Developer & Data APIs',
      status: 'early-access',
      description: 'Programmatic access to all wallet intelligence data'
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
    if (status === 'early-access') {
      return (
        <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold rounded-full">
          Early Access
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
            What you'll get with WalletWeaver
          </h2>
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
