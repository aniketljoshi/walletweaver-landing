import { Database, GitMerge, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Database,
      number: '01',
      title: 'Ingest on-chain data',
      description: 'Continuously collect transaction data from multiple blockchains'
    },
    {
      icon: GitMerge,
      number: '02',
      title: 'Cluster & enrich',
      description: 'Apply graph algorithms and heuristics to identify entity patterns'
    },
    {
      icon: Sparkles,
      number: '03',
      title: 'Deliver insights',
      description: 'Surface actionable intelligence through APIs and visual tools'
    }
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How WalletWeaver Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-center relative z-10">
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl mb-6">
                  <step.icon className="w-8 h-8 text-blue-400" />
                </div>

                <div className="text-sm font-mono text-slate-500 mb-2">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
