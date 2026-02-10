import { motion } from 'framer-motion';
import { Plug, Brain, Code } from 'lucide-react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { TracingBeam } from './ui/TracingBeam';
import { GridBackground } from './ui/GridBackground';

const steps = [
  {
    number: '01',
    icon: Plug,
    title: 'Connect & Index',
    description:
      'Connect wallet addresses or ENS names across any supported chain. Our Kafka-powered pipelines begin real-time indexing within seconds, capturing every transaction, token transfer, and smart contract interaction.',
    visual: (
      <div className="flex flex-wrap gap-2 mt-4">
        {['Ethereum', 'Solana', 'Base', 'Arbitrum', 'Polygon'].map(
          (chain, i) => (
            <motion.span
              key={chain}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-electric-cyan/20 bg-electric-cyan/5 text-electric-cyan"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
              {chain}
            </motion.span>
          )
        )}
      </div>
    ),
  },
  {
    number: '02',
    icon: Brain,
    title: 'Analyze & Resolve',
    description:
      'Machine learning algorithms cluster related wallets into unified entities, compute smart-money scores, and assign behavioral labels with confidence metrics you can trust.',
    visual: (
      <div className="mt-4 space-y-3">
        {[
          { label: 'Whale Detection', value: 97, color: 'from-electric-cyan to-neon-cyan' },
          { label: 'Fund Clustering', value: 92, color: 'from-quantum-purple to-holo-purple' },
          { label: 'Bot Identification', value: 88, color: 'from-plasma-emerald to-neon-emerald' },
        ].map((bar) => (
          <div key={bar.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400">{bar.label}</span>
              <span className="text-white font-mono">{bar.value}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${bar.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                className={`h-full rounded-full bg-gradient-to-r ${bar.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '03',
    icon: Code,
    title: 'Query & Act',
    description:
      'Access the entire intelligence layer through a unified GraphQL API. Build dashboards, trigger alerts, execute copy-trades, and power compliance workflows with type-safe SDKs.',
    visual: (
      <div className="mt-4 rounded-lg bg-void-deep/60 border border-white/[0.06] p-3 font-mono text-xs overflow-hidden">
        <div className="text-slate-500">{'query {'}</div>
        <div className="pl-4">
          <span className="text-electric-cyan">smartWallets</span>
          <span className="text-slate-500">(</span>
          <span className="text-solar-amber">minScore</span>
          <span className="text-slate-500">: </span>
          <span className="text-plasma-emerald">90</span>
          <span className="text-slate-500">) {'{'}</span>
        </div>
        <div className="pl-8 text-quantum-purple">address</div>
        <div className="pl-8 text-quantum-purple">entity</div>
        <div className="pl-8 text-quantum-purple">pnl30d</div>
        <div className="pl-4 text-slate-500">{'}'}</div>
        <div className="text-slate-500">{'}'}</div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      <GridBackground>
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 rounded-full text-sm font-medium text-plasma-emerald mb-6 border border-plasma-emerald/20 bg-plasma-emerald/5"
            >
              How It Works
            </motion.span>

            <TextGenerateEffect
              words="Three Steps to On-Chain Intelligence"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto"
            />
          </div>

          {/* Steps with Tracing Beam */}
          <div className="max-w-3xl mx-auto">
            <TracingBeam>
              <div className="space-y-16 sm:space-y-24">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500 group">
                      {/* Step number badge */}
                      <div className="absolute -top-4 -left-2 sm:left-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-electric-cyan/20 to-quantum-purple/20 border border-electric-cyan/30 text-xs font-mono font-bold text-electric-cyan shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                          {step.number}
                        </span>
                      </div>

                      {/* Icon + Title row */}
                      <div className="flex items-center gap-3 mb-4 mt-2">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-electric-cyan/10 to-quantum-purple/10 border border-white/[0.06] group-hover:border-electric-cyan/20 transition-colors">
                          <step.icon className="w-6 h-6 text-electric-cyan" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-electric-cyan transition-colors">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base leading-relaxed text-slate-400 mb-2">
                        {step.description}
                      </p>

                      {/* Step-specific visual */}
                      {step.visual}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TracingBeam>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
