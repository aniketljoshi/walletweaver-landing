import { motion } from 'framer-motion';
import { Radio, Brain, Code } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const steps = [
  {
    icon: Radio,
    number: '01',
    title: 'Real-Time Indexing',
    description: 'Kafka-powered pipelines ingest blockchain events in real-time across Ethereum, Solana, Base, Arbitrum, and Polygon.',
    color: 'neon-cyan',
  },
  {
    icon: Brain,
    number: '02',
    title: 'ML Entity Resolution',
    description: 'Proprietary algorithms cluster wallets into entities and compute smart-money scores using historical performance data.',
    color: 'neon-violet',
  },
  {
    icon: Code,
    number: '03',
    title: 'GraphQL API Delivery',
    description: 'Query the entire intelligence layer via a unified GraphQL API. SDKs for TypeScript, Python, and Go ship production-ready.',
    color: 'neon-emerald',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-neon-emerald mb-6"
          >
            How It Works
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            How <span className="gradient-text">WalletWeaver</span> Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Enterprise-grade infrastructure built for speed, scale, and reliability.
          </p>
        </AnimatedSection>

        <StaggerContainer className="relative grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-0.5">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-violet/20 to-neon-emerald/20" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-emerald origin-left"
              />
            </div>
          </div>

          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className={`glass-card-strong px-4 py-1 border-${step.color}/30`}>
                    <span className={`text-sm font-mono font-bold text-${step.color}`}>
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="relative glass-card-strong p-8 pt-12 text-center group hover:border-neon-cyan/20 transition-colors">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-xl bg-${step.color}/10 border border-${step.color}/20 mb-6`}
                  >
                    <step.icon className={`w-8 h-8 text-${step.color}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bottom glow */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-${step.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>

                {/* Node on timeline */}
                <div className="hidden md:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                    className={`w-4 h-4 rounded-full bg-${step.color} shadow-${step.color}`}
                  >
                    <div className={`absolute inset-0 rounded-full bg-${step.color} animate-ping opacity-30`} />
                  </motion.div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
