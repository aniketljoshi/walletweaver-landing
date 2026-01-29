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
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-neon-cyan mb-6"
          >
            Core Capabilities
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            On-chain intelligence,{' '}
            <span className="gradient-text">production-ready</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Enterprise infrastructure that powers hedge funds, trading desks, protocols, and compliance teams worldwide.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {values.map((value, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, rotateX: 5 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full perspective-1000"
              >
                <div className="relative h-full glass-card-strong p-8 transition-all duration-500 group-hover:border-neon-cyan/30">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${value.glowColor} blur-xl`} />

                  {/* Icon */}
                  <div className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br ${value.gradient} bg-opacity-10 mb-6`}>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
                    <value.icon className="relative w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl font-semibold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                    {value.title}
                  </h3>
                  <p className="relative text-slate-400 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl`} />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
