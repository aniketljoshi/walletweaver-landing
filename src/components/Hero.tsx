import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { EthereumIcon, SolanaIcon, BaseIcon, ArbitrumIcon, PolygonIcon } from './NetworkIcons';
import ParticleNetwork from './ParticleNetwork';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden hero-bg perspective-2000">
      {/* Animated particle network background */}
      <ParticleNetwork />

      {/* Parallax Background Layers */}
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-emerald/15 rounded-full blur-[100px]"
          />
        </div>
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 z-0" />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32 sm:pt-40 sm:pb-40"
      >
        <div className="text-center max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center transform preserve-3d"
          >
            <div className="glass-card px-5 py-2.5 flex items-center gap-3 border-neon-cyan/30 shadow-neon-cyan/10">
              <Sparkles className="w-4 h-4 text-neon-cyan animate-pulse" />
              <span className="text-sm font-medium text-slate-200 tracking-wide">AI-Powered On-Chain Intelligence</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight"
          >
            <span className="text-white drop-shadow-xl">The Bloomberg Terminal</span>
            <br />
            <span className="gradient-text-animated filter drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">for On-Chain Intelligence</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed text-glow"
          >
            Real-time blockchain indexing. ML-powered wallet clustering. Smart-money scoring.
            One GraphQL API to power your trading edge, portfolio analytics, and compliance workflows.
          </motion.p>

          {/* Network badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 pt-4 perspective-1000"
          >
            {[
              { icon: EthereumIcon, label: 'Ethereum', color: 'text-blue-400' },
              { icon: SolanaIcon, label: 'Solana', color: 'text-purple-400' },
              { icon: BaseIcon, label: 'Base', color: 'text-blue-300' },
              { icon: ArbitrumIcon, label: 'Arbitrum', color: 'text-cyan-400' },
              { icon: PolygonIcon, label: 'Polygon', color: 'text-purple-300' },
            ].map((network) => (
              <motion.div
                key={network.label}
                whileHover={{ scale: 1.1, z: 20 }}
                className="glass-card px-4 py-2 flex items-center gap-2 cursor-default hover:border-neon-cyan/50 transition-all duration-300"
              >
                <network.icon className={`w-4 h-4 ${network.color}`} />
                <span className="text-sm font-medium text-slate-300">{network.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-neon-cyan/20 to-neon-violet/20 border border-neon-cyan/30 rounded-xl font-semibold text-white overflow-hidden btn-glow shadow-[0_0_30px_rgba(0,240,255,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join the Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <Link to="/demo">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 glass-card border-neon-emerald/30 hover:border-neon-emerald/50 rounded-xl font-semibold text-neon-emerald transition-all hover:bg-neon-emerald/5 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
              >
                <span className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Try Live Demo
                </span>
                <span className="block text-xs font-normal text-neon-emerald/70 mt-1">
                  Explore in 2 minutes
                </span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-slate-400"
          >
            {[
              'Early access for waitlist members',
              'TypeScript, Python & Go SDKs',
              'SOC 2 compliant',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void via-void/50 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
