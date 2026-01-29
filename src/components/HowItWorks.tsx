import { motion } from 'framer-motion';
import { Radio, Brain, Code } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import ParallaxSection from './ParallaxSection';

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
    <section className="relative py-32 sm:py-48 overflow-hidden bg-void-deep perspective-2000">
      {/* Background depth map */}
      {/* Background depth map */}
      <ParallaxSection speed={0.2} className="absolute inset-0 z-0">
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </ParallaxSection>
      <ParallaxSection speed={0.4} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-cyan/5 rounded-full blur-[120px]" />
      </ParallaxSection>

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full glass-card text-sm font-medium text-plasma-emerald mb-8 border border-plasma-emerald/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          >
            Workflow Engine
          </motion.span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            How <span className="gradient-text">WalletWeaver</span> Works
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade infrastructure built for speed, scale, and reliability.
          </p>
        </AnimatedSection>

        <StaggerContainer className="relative grid md:grid-cols-3 gap-12 sm:gap-8" staggerDelay={0.25}>
          {/* Kinetic Connection Line */}
          <div className="hidden md:block absolute top-[40%] left-0 right-0 h-1 z-0">
            <div className="relative w-full h-full bg-slate-800/30 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/10 via-quantum-purple/10 to-plasma-emerald/10" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'circOut' }}
                className="absolute inset-0 bg-gradient-to-r from-electric-cyan via-quantum-purple to-plasma-emerald origin-left shadow-[0_0_20px_rgba(0,229,255,0.4)]"
              />
              {/* Data packet animation */}
              <motion.div
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 blur-sm"
              />
            </div>
          </div>

          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -15, scale: 1.05, rotateX: 5, rotateY: index === 0 ? 5 : index === 2 ? -5 : 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative z-10 perspective-1000"
              >
                {/* Step number floating badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 z-30"
                >
                  <div className={`glass-card-strong px-5 py-1.5 border-${step.color}/40 shadow-lg shadow-${step.color}/20 backdrop-blur-xl`}>
                    <span className={`text-lg font-mono font-bold text-${step.color} tracking-widest`}>
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* 3D Card */}
                <div className="relative glass-card-strong p-8 pt-16 pb-10 text-center group hover:border-electric-cyan/40 transition-all duration-500 rounded-3xl preserve-3d">
                  {/* Depth layers */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-b from-${step.color}/20 to-transparent -translate-z-20`} />

                  {/* Icon with orbital effect */}
                  <div className="relative mb-8 inline-block preserve-3d">
                    <motion.div
                      whileHover={{ rotateZ: 180 }}
                      transition={{ duration: 0.8 }}
                      className={`relative z-10 p-5 rounded-2xl bg-${step.color}/10 border border-${step.color}/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
                    >
                      <step.icon className={`w-10 h-10 text-${step.color}`} />
                    </motion.div>
                    {/* Orbit rings */}
                    <div className={`absolute inset-0 -m-2 border border-${step.color}/10 rounded-full animate-[spin_10s_linear_infinite]`} style={{ borderRadius: '40%' }} />
                    <div className={`absolute inset-0 -m-4 border border-${step.color}/5 rounded-full animate-[spin_7s_linear_infinite_reverse]`} style={{ borderRadius: '45%' }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-cyan transition-colors translate-z-10">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-lg translate-z-10">
                    {step.description}
                  </p>

                  {/* Bottom glow */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-${step.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_-10px_40px_${step.color}]`} />
                </div>

                {/* Node on timeline */}
                <div className="hidden md:block absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                    className={`w-6 h-6 rounded-full bg-void-deep border-4 border-${step.color} shadow-[0_0_20px_${step.color}] relative`}
                  >
                    <div className={`absolute inset-0 -m-2 rounded-full border border-${step.color} opacity-30 animate-ping`} />
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
