import { motion } from 'framer-motion';
import { Radio, Brain, Wallet, Code, Copy, Bell } from 'lucide-react';
import { BentoGrid } from './ui/BentoGrid';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { SpotlightCard } from './ui/SpotlightEffect';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const chainBadges = [
  { label: 'ETH', color: '#627EEA' },
  { label: 'SOL', color: '#14F195' },
  { label: 'BASE', color: '#0052FF' },
  { label: 'ARB', color: '#96BEDC' },
  { label: 'POLY', color: '#8247E5' },
];

const confidenceBars = [
  { label: 'Whale', value: 97, color: 'from-electric-cyan to-neon-cyan' },
  { label: 'Fund', value: 92, color: 'from-quantum-purple to-holo-purple' },
  { label: 'Bot', value: 88, color: 'from-plasma-emerald to-neon-emerald' },
];

const alertChannels = [
  { label: 'Telegram', color: '#29B6F6' },
  { label: 'Discord', color: '#5865F2' },
  { label: 'Email', color: '#EA4335' },
  { label: 'Webhook', color: '#34D399' },
];

const features = [
  {
    title: 'Real-Time Multi-Chain Indexing',
    description:
      'Kafka-powered pipelines ingest blockchain events across 50+ chains in real-time with sub-second latency.',
    icon: Radio,
    colSpan: 'md:col-span-2',
    content: (
      <div className="flex flex-wrap gap-2 mt-4">
        {chainBadges.map((badge) => (
          <span
            key={badge.label}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold border border-white/[0.08] bg-white/[0.03]"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: badge.color }}
            />
            {badge.label}
          </span>
        ))}
        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono text-slate-500 border border-white/[0.06] bg-white/[0.02]">
          +45 more
        </span>
      </div>
    ),
  },
  {
    title: 'ML Entity Resolution',
    description:
      'Proprietary algorithms cluster wallets into entities with confidence scoring and behavioral fingerprinting.',
    icon: Brain,
    colSpan: '',
    content: (
      <div className="mt-4 space-y-3">
        {confidenceBars.map((bar) => (
          <div key={bar.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-400 font-medium">{bar.label}</span>
              <span className="text-white font-mono">{bar.value}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${bar.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                className={`h-full rounded-full bg-gradient-to-r ${bar.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Smart Money Tracking',
    description:
      'Identify and follow whale wallets, institutional funds, and smart-money flows across every chain in real-time.',
    icon: Wallet,
    colSpan: '',
    content: (
      <div className="mt-4 flex items-center gap-3">
        <div className="flex items-baseline gap-1">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-mono text-electric-cyan"
          >
            847
          </motion.span>
        </div>
        <span className="text-xs text-slate-500">
          smart wallets tracked
        </span>
      </div>
    ),
  },
  {
    title: 'Enterprise GraphQL API',
    description:
      'Query the entire intelligence layer through a unified, type-safe GraphQL endpoint with comprehensive SDKs.',
    icon: Code,
    colSpan: '',
    content: (
      <div className="mt-4 rounded-lg bg-void-deep/60 border border-white/[0.06] p-3 font-mono text-xs overflow-hidden">
        <div className="text-slate-500">{'{'}</div>
        <div className="pl-4">
          <span className="text-electric-cyan">wallet</span>
          <span className="text-slate-500">(</span>
          <span className="text-solar-amber">address</span>
          <span className="text-slate-500">: </span>
          <span className="text-plasma-emerald">"0x..."</span>
          <span className="text-slate-500">)</span>
          <span className="text-slate-500">{' {'}</span>
        </div>
        <div className="pl-8 text-quantum-purple">entity</div>
        <div className="pl-8 text-quantum-purple">smartScore</div>
        <div className="pl-8 text-quantum-purple">labels</div>
        <div className="pl-4 text-slate-500">{'}'}</div>
        <div className="text-slate-500">{'}'}</div>
      </div>
    ),
  },
  {
    title: 'Copy-Trading Engine',
    description:
      'Mirror the strategies of top-performing wallets with configurable parameters and risk controls.',
    icon: Copy,
    colSpan: '',
    content: null,
  },
  {
    title: 'Real-Time Alerts',
    description:
      'Get notified instantly when tracked wallets make moves, across every channel your team uses.',
    icon: Bell,
    colSpan: 'md:col-span-2',
    content: (
      <div className="flex flex-wrap gap-2 mt-4">
        {alertChannels.map((ch) => (
          <span
            key={ch.label}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/[0.08] bg-white/[0.03]"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: ch.color }}
            />
            {ch.label}
          </span>
        ))}
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-small-[rgba(0,229,255,0.03)]"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full text-sm font-medium text-electric-cyan mb-6 border border-electric-cyan/20 bg-electric-cyan/5"
          >
            Platform Capabilities
          </motion.span>

          <TextGenerateEffect
            words="Everything You Need to Decode the Blockchain"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto"
          />
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className={feature.colSpan}
              >
                <SpotlightCard className="h-full">
                  <div className="p-6 sm:p-8">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-electric-cyan/10 to-quantum-purple/10 border border-white/[0.06]">
                        <feature.icon className="w-5 h-5 text-electric-cyan" />
                      </div>
                      <h3 className="text-lg font-semibold text-white tracking-tight">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-slate-400">
                      {feature.description}
                    </p>

                    {/* Feature-specific content */}
                    {feature.content}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
