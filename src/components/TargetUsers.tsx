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
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void-50 to-void" />
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-neon-amber mb-6"
          >
            For Every Use Case
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Built for every{' '}
            <span className="gradient-text">on-chain use case</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From solo traders to enterprise compliance teams — WalletWeaver scales with your needs.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {users.map((user, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full"
              >
                <div className="relative h-full glass-card p-6 transition-all duration-500 hover:border-neon-cyan/20">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-${user.color}/10 blur-xl`} />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative inline-flex p-3 rounded-xl bg-${user.color}/10 border border-${user.color}/20 mb-5`}
                  >
                    <user.icon className={`w-6 h-6 text-${user.color}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="relative text-lg font-semibold text-white mb-4 group-hover:text-neon-cyan transition-colors">
                    {user.title}
                  </h3>

                  {/* Points */}
                  <ul className="relative space-y-3">
                    {user.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2.5">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${user.color} mt-2 flex-shrink-0`} />
                        <span className="text-sm text-slate-400">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-${user.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl`} />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
