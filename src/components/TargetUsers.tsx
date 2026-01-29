import { motion } from 'framer-motion';
import { TrendingUp, Building2, Code2, Shield } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const users = [
  {
    icon: TrendingUp,
    title: 'Crypto Traders',
    points: [
      'Discover alpha from smart money movements',
      'Copy top-performing wallets automatically',
      'Real-time alerts on token accumulation',
      'Track narrative shifts before the crowd',
    ],
    color: 'neon-cyan',
  },
  {
    icon: Building2,
    title: 'Funds & Prop Desks',
    points: [
      'Portfolio intelligence and attribution',
      'Counterparty and entity-level exposure',
      'Custom scoring models and signals',
      'API integration with trading systems',
    ],
    color: 'neon-violet',
  },
  {
    icon: Code2,
    title: 'Blockchain Developers',
    points: [
      'Production-ready TypeScript, Python & Go SDKs',
      'GraphQL API with persisted queries',
      'Webhook integrations for real-time events',
      'Self-hosted deployment options',
    ],
    color: 'neon-emerald',
  },
  {
    icon: Shield,
    title: 'Enterprises & Compliance',
    points: [
      'Wallet risk scoring and AML checks',
      'Entity resolution for KYC workflows',
      'Audit-ready transaction trails',
      'SOC 2 compliant infrastructure',
    ],
    color: 'neon-amber',
  },
];

export default function TargetUsers() {
  return (
    <section className="relative py-32 sm:py-48 overflow-hidden bg-void-deep perspective-2000">
      {/* Background */}
      <div className="absolute inset-0 bg-void-deep" />
      <div className="absolute inset-0 grid-overlay opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[500px] bg-electric-cyan/5 blur-[120px] rounded-full sm:w-[600px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full glass-card text-sm font-medium text-solar-amber mb-8 border border-solar-amber/20 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
          >
            For Every Use Case
          </motion.span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            Built for every{' '}
            <span className="bg-gradient-to-r from-solar-amber to-neon-rose bg-clip-text text-transparent">on-chain use case</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From solo traders to enterprise compliance teams — WalletWeaver scales with your needs.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" staggerDelay={0.1}>
          {users.map((user, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="group relative h-full perspective-1000"
              >
                <div className="relative h-full glass-card-strong p-8 pt-10 transition-all duration-500 hover:border-electric-cyan/30 rounded-3xl overflow-hidden preserve-3d">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-${user.color}/10 blur-2xl -translate-z-10`} />
                  <div className={`absolute inset-0 bg-gradient-to-b from-${user.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative inline-flex p-4 rounded-2xl bg-${user.color}/10 border border-${user.color}/20 mb-6 shadow-lg shadow-${user.color}/5`}
                  >
                    <user.icon className={`w-7 h-7 text-${user.color}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="relative text-xl font-bold text-white mb-6 group-hover:text-electric-cyan transition-colors translate-z-10">
                    {user.title}
                  </h3>

                  {/* Points */}
                  <ul className="relative space-y-4 translate-z-10">
                    {user.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${user.color} mt-2.5 flex-shrink-0 shadow-[0_0_10px_${user.color}]`} />
                        <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-${user.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
