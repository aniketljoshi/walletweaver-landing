import { Network, TrendingUp, Code2 } from 'lucide-react';

export default function CoreValue() {
  const values = [
    {
      icon: Network,
      title: 'Multi-chain wallet clustering',
      description: 'Automatically group addresses into real-world entities using graph heuristics, movement patterns, and metadata.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: 'Smart money maps',
      description: 'Analyze entity flows across tokens, protocols, and chains to understand conviction.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code2,
      title: 'API-first by design',
      description: 'GraphQL + streaming APIs for seamless integration into your dashboards, quant models, and apps.',
      gradient: 'from-teal-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Blockchain wallet intelligence in one place
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Understand wallet behavior, capital flows, and entity patterns across chains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.gradient} bg-opacity-10 mb-6`}>
                <value.icon className={`w-6 h-6 bg-gradient-to-br ${value.gradient} bg-clip-text text-transparent`} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {value.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {value.description}
              </p>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
