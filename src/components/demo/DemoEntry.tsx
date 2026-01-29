import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Wallet,
  Brain,
  Trophy,
  Bell,
  Code2,
  Zap,
  BarChart3,
} from 'lucide-react';
import ParticleNetwork from '../ParticleNetwork';

const features = [
  {
    icon: Wallet,
    title: 'Wallet Explorer',
    description: 'Deep-dive into any wallet across 5 chains',
    color: 'neon-cyan',
  },
  {
    icon: Brain,
    title: 'Entity Resolution',
    description: 'ML-powered clustering identifies real entities',
    color: 'neon-violet',
  },
  {
    icon: Trophy,
    title: 'Smart Money Leaderboard',
    description: 'Ranked wallets by ROI, win rate, conviction',
    color: 'neon-amber',
  },
  {
    icon: BarChart3,
    title: 'Token Analytics',
    description: 'Track flows and smart money accumulation',
    color: 'neon-emerald',
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    description: 'Telegram, Discord, Email, Webhooks',
    color: 'neon-rose',
  },
  {
    icon: Code2,
    title: 'API Console',
    description: 'GraphQL playground with live examples',
    color: 'neon-cyan',
  },
];

export default function DemoEntry() {
  return (
    <div className="min-h-screen hero-bg relative overflow-hidden">
      {/* Particle background */}
      <ParticleNetwork />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
          >
            <Zap className="w-4 h-4 text-neon-amber" />
            <span className="text-sm text-slate-300">Interactive Demo</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Experience{' '}
            <span className="gradient-text-animated">WalletWeaver</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Explore the full platform with realistic demo data.
            No signup required. Takes about 2 minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/demo/dashboard">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan/20 to-neon-violet/20 border border-neon-cyan/30 rounded-xl font-semibold text-white overflow-hidden btn-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Enter Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative max-w-5xl mx-auto px-6 pb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white text-center mb-12"
        >
          What you'll explore
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card p-6 hover:border-neon-cyan/20 transition-colors group"
            >
              <div className={`p-2.5 glass-card w-fit mb-4 group-hover:border-neon-cyan/30 transition-colors`}>
                <feature.icon className="w-5 h-5 text-neon-cyan" />
              </div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent" />
    </div>
  );
}
