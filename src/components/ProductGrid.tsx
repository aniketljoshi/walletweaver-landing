import { motion } from 'framer-motion';
import { Search, Users, Trophy, LineChart, Copy, Bell } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const products = [
  {
    icon: Search,
    title: 'Wallet Explorer',
    status: 'coming-soon',
    description: 'Deep-dive into any wallet across 5 chains. Transaction history, portfolio composition, and behavioral patterns.',
    color: 'neon-cyan',
  },
  {
    icon: Users,
    title: 'Entity Resolution',
    status: 'coming-soon',
    description: 'ML-powered clustering identifies the real entities behind wallet addresses. See who you\'re really trading with.',
    color: 'neon-violet',
  },
  {
    icon: Trophy,
    title: 'Smart Money Leaderboards',
    status: 'coming-soon',
    description: 'Ranked wallets by ROI, win rate, and conviction. Discover alpha before it becomes consensus.',
    color: 'neon-amber',
  },
  {
    icon: LineChart,
    title: 'Token & Narrative Analytics',
    status: 'coming-soon',
    description: 'Track token flows, holder concentration, and emerging narratives across the smart money graph.',
    color: 'neon-emerald',
  },
  {
    icon: Copy,
    title: 'Copy-Trading Engine',
    status: 'coming-soon',
    description: 'Automated signals when top wallets make moves. Integrate with your trading infrastructure via webhooks.',
    color: 'neon-rose',
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    status: 'coming-soon',
    description: 'Instant notifications via Telegram, Discord, Email, or Webhooks. Never miss a smart money move.',
    color: 'neon-cyan',
  },
];

const getStatusBadge = (status: string) => {
  if (status === 'live') {
    return (
      <span className="px-2 py-1 bg-neon-emerald/10 border border-neon-emerald/30 text-neon-emerald text-xs font-semibold rounded-full">
        Live
      </span>
    );
  }
  if (status === 'beta') {
    return (
      <span className="px-2 py-1 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-semibold rounded-full">
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

export default function ProductGrid() {
  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void-50 to-void" />
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-neon-violet mb-6"
          >
            Platform Features
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything you need for{' '}
            <span className="gradient-text">on-chain alpha</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From wallet research to automated copy-trading — one platform for the entire workflow.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {products.map((product, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full"
              >
                <div className="relative h-full glass-card p-6 transition-all duration-500 hover:border-neon-cyan/20">
                  {/* Hover glow */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-${product.color}/20 blur-xl`} />

                  {/* Header */}
                  <div className="relative flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className={`p-3 rounded-xl bg-${product.color}/10 border border-${product.color}/20`}
                    >
                      <product.icon className={`w-5 h-5 text-${product.color}`} />
                    </motion.div>
                    {getStatusBadge(product.status)}
                  </div>

                  {/* Content */}
                  <h3 className="relative text-lg font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                    {product.title}
                  </h3>
                  <p className="relative text-sm text-slate-400 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
                    <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-${product.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
