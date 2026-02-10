import { motion } from 'framer-motion';
import { AnimatedCounter } from './ui/AnimatedCounter';
import { MeteorEffect } from './ui/MeteorEffect';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const stats = [
  {
    label: 'Wallets Indexed',
    value: 10,
    prefix: '',
    suffix: 'M+',
    color: 'from-neon-cyan to-neon-cyan/60',
    borderColor: 'bg-neon-cyan',
    glowColor: 'rgba(0, 240, 255, 0.15)',
  },
  {
    label: 'Chains Supported',
    value: 50,
    prefix: '',
    suffix: '+',
    color: 'from-neon-violet to-neon-violet/60',
    borderColor: 'bg-neon-violet',
    glowColor: 'rgba(139, 92, 246, 0.15)',
  },
  {
    label: 'Query Latency',
    value: 100,
    prefix: '<',
    suffix: 'ms',
    color: 'from-neon-emerald to-neon-emerald/60',
    borderColor: 'bg-neon-emerald',
    glowColor: 'rgba(16, 185, 129, 0.15)',
  },
  {
    label: 'Uptime',
    value: 99.9,
    prefix: '',
    suffix: '%',
    color: 'from-neon-amber to-neon-amber/60',
    borderColor: 'bg-neon-amber',
    glowColor: 'rgba(245, 158, 11, 0.15)',
  },
];

export default function Stats() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-void-deep">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 mesh-gradient-dark" />

      {/* Meteor shower */}
      <MeteorEffect number={8} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-neon-cyan/20 mb-6"
          >
            <span className="text-sm font-medium text-slate-400 tracking-wide uppercase">
              Performance Metrics
            </span>
          </motion.span>

          <TextGenerateEffect
            words="Built for Scale"
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Enterprise-grade infrastructure powering the next generation of on-chain analytics.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative group glass-card rounded-2xl p-6 overflow-hidden"
              >
                {/* Gradient accent bar on left edge */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${stat.borderColor} rounded-l-2xl`}
                />

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(300px circle at 50% 50%, ${stat.glowColor}, transparent 70%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="text-5xl sm:text-6xl block mb-3"
                  />
                  <p className="text-sm font-medium text-slate-400 tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
