import { motion } from 'framer-motion';
import { Database, Brain, Code2 } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const values = [
  {
    icon: Database,
    title: 'Real-Time Multi-Chain Indexing',
    description: 'Kafka-powered ingestion across Ethereum, Solana, Base, Arbitrum, and Polygon. Sub-second latency from on-chain event to queryable data.',
    gradient: 'from-neon-cyan to-blue-500',
    glowColor: 'shadow-neon-cyan',
  },
  {
    icon: Brain,
    title: 'ML-Powered Entity Resolution',
    description: 'Proprietary clustering algorithms combine graph heuristics and machine learning to reveal the entities behind wallet addresses. Smart-money scoring identifies alpha wallets.',
    gradient: 'from-neon-violet to-pink-500',
    glowColor: 'shadow-neon-violet',
  },
  {
    icon: Code2,
    title: 'Enterprise-Grade GraphQL API',
    description: 'One unified API for wallet intelligence, token analytics, and real-time alerts. Production-ready SDKs for TypeScript, Python, and Go.',
    gradient: 'from-neon-emerald to-teal-500',
    glowColor: 'shadow-neon-emerald',
  },
];

export default function CoreValue() {
  return (
    <section className="relative py-32 sm:py-48 overflow-hidden bg-void-deep perspective-2000">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-electric-cyan/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-quantum-purple/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full glass-card text-sm font-medium text-electric-cyan mb-8 border border-electric-cyan/20 shadow-[0_0_20px_rgba(0,229,255,0.1)]"
          >
            Core Capabilities
          </motion.span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            On-chain intelligence,{' '}
            <span className="bg-gradient-to-r from-electric-cyan to-quantum-purple bg-clip-text text-transparent">production-ready</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Enterprise infrastructure that powers hedge funds, trading desks, protocols, and compliance teams worldwide.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -12, scale: 1.02, rotateX: 5 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="group relative h-full perspective-1000"
              >
                <div className="relative h-full glass-card-strong p-10 transition-all duration-500 group-hover:border-electric-cyan/30 rounded-3xl overflow-hidden preserve-3d shadow-2xl">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${value.glowColor} -translate-z-10`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className={`relative inline-flex p-5 rounded-2xl bg-gradient-to-br ${value.gradient} mb-8 shadow-inner border border-white/10`}>
                    <value.icon className="relative w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-2xl font-bold text-white mb-4 group-hover:text-electric-cyan transition-colors translate-z-10">
                    {value.title}
                  </h3>
                  <p className="relative text-lg text-slate-400 leading-relaxed translate-z-10">
                    {value.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
