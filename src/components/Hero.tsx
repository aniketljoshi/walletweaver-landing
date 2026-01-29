import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { EthereumIcon, SolanaIcon, BaseIcon, ArbitrumIcon, PolygonIcon } from './NetworkIcons';
import ParticleNetwork from './ParticleNetwork';
// import Three3DBackground from './Three3DBackground';
import MagneticButton from './MagneticButton';
// import { Suspense } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden perspective-2000">
      {/* Animated particle network background */}
      {/* <Suspense fallback={null}>
        <Three3DBackground />
      </Suspense> */}
      <ParticleNetwork />

      {/* Parallax Background Layers */}
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }} className="absolute inset-0 z-0 text-white pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
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
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-violet/10 rounded-full blur-[120px]"
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <motion.div
          style={{ y, opacity, scale }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-neon-cyan/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm font-medium text-neon-cyan tracking-wide uppercase">
              AI-Powered On-Chain Intelligence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl lg:text-9xl font-bold tracking-tight text-white mb-8 leading-[0.9]"
          >
            The Bloomberg Terminal for{' '}
            <span className="gradient-text">On-Chain Intelligence</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Real-time blockchain indexing. ML-powered wallet clustering. Smart-money scoring. One GraphQL API to power your trading edge, portfolio analytics, and compliance workflows.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/waitlist" className="group">
              <MagneticButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-neon-cyan text-void-deep font-bold rounded-xl text-lg hover:bg-white transition-colors flex items-center gap-2 shadow-[0_0_30px_rgba(0,229,255,0.4)]"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </Link>

            <Link to="/demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass-card text-white font-bold rounded-xl text-lg hover:bg-white/10 transition-colors flex flex-col items-start gap-0.5"
              >
                <div className="flex items-center gap-2">
                  <Play className="w-5 h-5 fill-current" />
                  Try Live Demo
                </div>
                <span className="text-xs font-normal text-slate-400 ml-7">Explore in 2 minutes</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Network Badges & Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute bottom-12 left-0 right-0 space-y-8"
          >
            <div className="flex justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <motion.div whileHover={{ y: -10, scale: 1.1, filter: 'drop-shadow(0 0 10px #627EEA)' }} transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
                <EthereumIcon className="w-10 h-10 text-[#627EEA]" />
              </motion.div>
              <motion.div whileHover={{ y: -10, scale: 1.1, filter: 'drop-shadow(0 0 10px #14F195)' }} transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
                <SolanaIcon className="w-8 h-8 text-[#14F195]" />
              </motion.div>
              <motion.div whileHover={{ y: -10, scale: 1.1, filter: 'drop-shadow(0 0 10px #0052FF)' }} transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
                <BaseIcon className="w-8 h-8 text-[#0052FF]" />
              </motion.div>
              <motion.div whileHover={{ y: -10, scale: 1.1, filter: 'drop-shadow(0 0 10px #2D374B)' }} transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
                <ArbitrumIcon className="w-8 h-8 text-[#2D374B]" />
              </motion.div>
              <motion.div whileHover={{ y: -10, scale: 1.1, filter: 'drop-shadow(0 0 10px #8247E5)' }} transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
                <PolygonIcon className="w-8 h-8 text-[#8247E5]" />
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2">✓ Early access for waitlist members</span>
              <span className="flex items-center gap-2">✓ TypeScript, Python & Go SDKs</span>
              <span className="flex items-center gap-2">✓ SOC 2 compliant</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
