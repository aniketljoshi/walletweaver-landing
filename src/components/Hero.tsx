import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { AuroraBackground } from './ui/AuroraBackground';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FlipWords } from './ui/FlipWords';
import { MeteorEffect } from './ui/MeteorEffect';
import { EthereumIcon, SolanaIcon, BaseIcon, ArbitrumIcon, PolygonIcon } from './NetworkIcons';

const chainIcons = [
  { name: 'Ethereum', Icon: EthereumIcon, color: '#627EEA' },
  { name: 'Solana', Icon: SolanaIcon, color: '#14F195' },
  { name: 'Base', Icon: BaseIcon, color: '#0052FF' },
  { name: 'Arbitrum', Icon: ArbitrumIcon, color: '#2D374B' },
  { name: 'Polygon', Icon: PolygonIcon, color: '#8247E5' },
];

export default function Hero() {
  return (
    <AuroraBackground className="relative min-h-screen overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="opacity-40" />

      {/* Meteor Effect */}
      <MeteorEffect number={15} />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-small-[rgba(0,229,255,0.03)]"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      {/* Glowing orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-glow-pulse-slow" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 w-96 h-96 bg-quantum-purple/10 rounded-full blur-[120px] animate-glow-pulse-slow" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Beta Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-medium text-slate-300 tracking-wide">
              Now in Beta
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <TextGenerateEffect
              words="See The On-Chain Story Behind Every Wallet"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            />
          </motion.div>

          {/* FlipWords line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
          >
            <FlipWords
              words={['Decode', 'Track', 'Analyze', 'Discover']}
              className="gradient-text"
              duration={2500}
            />
            <span className="text-slate-400 ml-2">the blockchain</span>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Real-time multi-chain intelligence. ML-powered entity resolution.
            Enterprise-grade GraphQL API.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            {/* Primary CTA */}
            <Link to="/waitlist">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-electric-cyan text-void-deep font-bold rounded-xl text-lg flex items-center gap-2 shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] transition-shadow duration-300"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-xl bg-electric-cyan/20 blur-xl -z-10" />
              </motion.button>
            </Link>

            {/* Secondary CTA */}
            <Link to="/demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl text-lg font-semibold text-white border border-white/[0.1] bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300 flex items-center gap-2"
              >
                Live Demo
                <ArrowRight className="w-4 h-4 opacity-60" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Chain Icons Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex items-center justify-center gap-4 sm:gap-6 mb-8"
          >
            {chainIcons.map((chain, index) => (
              <motion.div
                key={chain.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -8,
                  scale: 1.1,
                  filter: `drop-shadow(0 0 12px ${chain.color})`,
                }}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm cursor-pointer transition-colors duration-200 hover:border-white/[0.12]"
              >
                <chain.Icon
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  style={{ color: chain.color }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
