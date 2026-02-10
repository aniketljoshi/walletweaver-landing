import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LampEffect } from './ui/LampEffect';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { GlowingStars } from './ui/GlowingStars';

const fakeStat = [
  { label: 'Total Volume', value: '$4.2B', change: '+12.4%' },
  { label: 'Active Wallets', value: '28.3K', change: '+8.7%' },
  { label: 'Avg Score', value: '87.2', change: '+3.1%' },
];

const fakeWallets = [
  { address: '0x1a2b...8f3d', label: 'Smart Money', score: 94 },
  { address: '0x7c4e...2a1b', label: 'Whale', score: 88 },
  { address: '0x3f9d...6e7c', label: 'DeFi Power User', score: 81 },
];

export default function DemoPreview() {
  return (
    <section className="relative overflow-hidden">
      <GlowingStars className="z-0 pointer-events-none" />

      <LampEffect className="min-h-0 bg-transparent pt-0">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-neon-cyan/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-sm font-medium text-neon-cyan tracking-wide uppercase">
                See It In Action
              </span>
            </motion.span>

            <TextGenerateEffect
              words="Experience the Intelligence Layer"
              className="text-4xl sm:text-5xl lg:text-6xl mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Explore real-time wallet intelligence, entity clustering, and smart money tracking in an interactive dashboard.
            </motion.p>
          </div>

          {/* 3D Perspective Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="perspective-2000 mx-auto max-w-5xl"
          >
            <div
              className="preserve-3d"
              style={{ transform: 'rotateX(10deg) rotateY(-5deg)' }}
            >
              <div className="glass-card-strong rounded-2xl p-6 sm:p-8 shadow-[0_0_80px_rgba(0,240,255,0.08)]">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-neon-rose/80" />
                    <div className="w-3 h-3 rounded-full bg-solar-amber/80" />
                    <div className="w-3 h-3 rounded-full bg-neon-emerald/80" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                    <div className="w-2 h-2 rounded-full bg-neon-emerald animate-pulse" />
                    <span className="text-xs text-slate-400 font-mono">Live</span>
                  </div>
                </div>

                {/* Stat Cards Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {fakeStat.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="glass-card rounded-xl p-4"
                      style={{ transform: `translateZ(${20 + i * 10}px)` }}
                    >
                      <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <span className="text-xs text-neon-emerald font-mono">{stat.change}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Chart Bars + Wallet Table Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Fake Chart */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="glass-card rounded-xl p-4"
                    style={{ transform: 'translateZ(30px)' }}
                  >
                    <p className="text-xs text-slate-500 mb-3 font-mono">Volume (7d)</p>
                    <div className="flex items-end gap-1.5 h-24">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-neon-cyan/40 to-neon-cyan/80"
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Fake Wallet Addresses */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="glass-card rounded-xl p-4"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    <p className="text-xs text-slate-500 mb-3 font-mono">Top Entities</p>
                    <div className="space-y-2.5">
                      {fakeWallets.map((w, i) => (
                        <motion.div
                          key={w.address}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          className="flex items-center justify-between py-1.5 border-b border-white/[0.04] last:border-0"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-neon-cyan">{w.address}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/[0.05] text-slate-400">
                              {w.label}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-12 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet"
                                style={{ width: `${w.score}%` }}
                              />
                            </div>
                            <span className="text-xs font-mono text-slate-400">{w.score}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/demo" className="group inline-flex">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-xl text-white font-semibold text-lg hover:shadow-[0_0_40px_rgba(0,240,255,0.25)] transition-shadow duration-300 border-neon-cyan/20"
              >
                Explore the Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </LampEffect>
    </section>
  );
}
