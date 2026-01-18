import { Database, Brain, Code2 } from 'lucide-react';

export default function CoreValue() {
  const values = [
    {
      icon: Database,
      title: 'Real-Time Multi-Chain Indexing',
      description: 'Kafka-powered ingestion across Ethereum, Solana, Base, Arbitrum, and Polygon. Sub-second latency from on-chain event to queryable data.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'ML-Powered Entity Resolution',
      description: 'Proprietary clustering algorithms combine graph heuristics and machine learning to reveal the entities behind wallet addresses. Smart-money scoring identifies alpha wallets.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code2,
      title: 'Enterprise-Grade GraphQL API',
      description: 'One unified API for wallet intelligence, token analytics, and real-time alerts. Production-ready SDKs for TypeScript, Python, and Go.',
      gradient: 'from-teal-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            On-chain intelligence, production-ready
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Enterprise infrastructure that powers hedge funds, trading desks, protocols, and compliance teams worldwide.
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
