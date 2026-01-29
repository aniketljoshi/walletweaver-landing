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
    <section id="features" className="relative py-32 sm:py-40 overflow-hidden mesh-gradient-light">
      {/* Subtle depth layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-warm via-transparent to-light-warm opacity-60" />

      {/* Floating accent shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-electric-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-quantum-purple/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2 rounded-full bg-electric-cyan/10 border border-electric-cyan/20 text-sm font-semibold text-electric-cyan mb-8 shadow-depth-sm"
          >
            Platform Features
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text mb-6 leading-tight">
            Everything you need for{' '}
            <span className="bg-gradient-to-r from-electric-cyan to-quantum-purple bg-clip-text text-transparent">on-chain alpha</span>
          </h2>
          <p className="text-xl text-light-text/70 max-w-3xl mx-auto leading-relaxed">
            From wallet research to automated copy-trading — one platform for the entire workflow.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.12}>
          {products.map((product, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                className="group relative h-full"
              >
                <div className="relative h-full bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-light-accent shadow-depth-md hover:shadow-depth-lg transition-all duration-500 hover:border-electric-cyan/30 preserve-3d">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric-cyan/0 via-transparent to-quantum-purple/0 group-hover:from-electric-cyan/5 group-hover:to-quantum-purple/5 transition-all duration-500 pointer-events-none" />

                  {/* Header */}
                  <div className="relative flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, type: 'spring' }}
                      className={`p-4 rounded-xl bg-gradient-to-br ${product.color === 'neon-cyan' ? 'from-electric-cyan/15 to-electric-cyan/5' :
                          product.color === 'neon-violet' ? 'from-quantum-purple/15 to-quantum-purple/5' :
                            product.color === 'neon-emerald' ? 'from-plasma-emerald/15 to-plasma-emerald/5' :
                              product.color === 'neon-amber' ? 'from-solar-amber/15 to-solar-amber/5' :
                                'from-electric-cyan/15 to-electric-cyan/5'
                        } border ${product.color === 'neon-cyan' ? 'border-electric-cyan/30' :
                          product.color === 'neon-violet' ? 'border-quantum-purple/30' :
                            product.color === 'neon-emerald' ? 'border-plasma-emerald/30' :
                              product.color === 'neon-amber' ? 'border-solar-amber/30' :
                                'border-electric-cyan/30'
                        } shadow-depth-sm`}
                    >
                      <product.icon className={`w-6 h-6 ${product.color === 'neon-cyan' ? 'text-electric-cyan' :
                          product.color === 'neon-violet' ? 'text-quantum-purple' :
                            product.color === 'neon-emerald' ? 'text-plasma-emerald' :
                              product.color === 'neon-amber' ? 'text-solar-amber' :
                                'text-electric-cyan'
                        }`} />
                    </motion.div>
                    {getStatusBadge(product.status)}
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl font-bold text-light-text mb-4 group-hover:text-electric-cyan transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="relative text-base text-light-text/70 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Floating corner accent */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden rounded-br-2xl pointer-events-none">
                    <div className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${product.color === 'neon-cyan' ? 'from-electric-cyan/10' :
                        product.color === 'neon-violet' ? 'from-quantum-purple/10' :
                          product.color === 'neon-emerald' ? 'from-plasma-emerald/10' :
                            product.color === 'neon-amber' ? 'from-solar-amber/10' :
                              'from-electric-cyan/10'
                      } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
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
