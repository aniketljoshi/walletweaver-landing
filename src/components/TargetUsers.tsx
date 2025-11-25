import { TrendingUp, Boxes, Search } from 'lucide-react';

export default function TargetUsers() {
  const users = [
    {
      icon: TrendingUp,
      title: 'Funds & Prop Desks',
      points: [
        'Track smart money movements',
        'Identify emerging narratives',
        'Monitor counterparty risk',
        'Build conviction signals'
      ]
    },
    {
      icon: Boxes,
      title: 'Protocols & Founders',
      points: [
        'Understand your user base',
        'Track competitive flows',
        'Identify whale behavior',
        'Plan token distributions'
      ]
    },
    {
      icon: Search,
      title: 'Analytics & Research Teams',
      points: [
        'Build custom datasets',
        'Enrich research reports',
        'Validate on-chain hypotheses',
        'Create visualizations'
      ]
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built for serious on-chain teams
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="inline-flex p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl mb-6">
                <user.icon className="w-6 h-6 text-blue-400" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-6">
                {user.title}
              </h3>

              <ul className="space-y-3">
                {user.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-slate-400">{point}</span>
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
