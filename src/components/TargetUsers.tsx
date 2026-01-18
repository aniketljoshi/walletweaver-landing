import { TrendingUp, Building2, Code2, Shield } from 'lucide-react';

export default function TargetUsers() {
  const users = [
    {
      icon: TrendingUp,
      title: 'Crypto Traders',
      points: [
        'Discover alpha from smart money movements',
        'Copy top-performing wallets automatically',
        'Real-time alerts on token accumulation',
        'Track narrative shifts before the crowd'
      ]
    },
    {
      icon: Building2,
      title: 'Funds & Prop Desks',
      points: [
        'Portfolio intelligence and attribution',
        'Counterparty and entity-level exposure',
        'Custom scoring models and signals',
        'API integration with trading systems'
      ]
    },
    {
      icon: Code2,
      title: 'Blockchain Developers',
      points: [
        'Production-ready TypeScript, Python & Go SDKs',
        'GraphQL API with persisted queries',
        'Webhook integrations for real-time events',
        'Self-hosted deployment options'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprises & Compliance',
      points: [
        'Wallet risk scoring and AML checks',
        'Entity resolution for KYC workflows',
        'Audit-ready transaction trails',
        'SOC 2 compliant infrastructure'
      ]
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for every on-chain use case
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From solo traders to enterprise compliance teams — WalletWeaver scales with your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="inline-flex p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl mb-5">
                <user.icon className="w-6 h-6 text-blue-400" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-4">
                {user.title}
              </h3>

              <ul className="space-y-2.5">
                {user.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-400">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
