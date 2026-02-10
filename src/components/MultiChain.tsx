import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { SpotlightCard } from './ui/SpotlightEffect';
import { ThreeDGlobe } from './ui/ThreeDGlobe';
import { EthereumIcon, SolanaIcon, BaseIcon, ArbitrumIcon, PolygonIcon } from './NetworkIcons';

const chains = [
  {
    name: 'Ethereum',
    icon: EthereumIcon,
    color: '#627EEA',
    description: 'Full EVM indexing with smart contract decoding and trace analysis.',
  },
  {
    name: 'Solana',
    icon: SolanaIcon,
    color: '#14F195',
    description: 'High-throughput program log parsing and token account tracking.',
  },
  {
    name: 'Base',
    icon: BaseIcon,
    color: '#0052FF',
    description: 'Coinbase L2 with optimized rollup data extraction and bridging events.',
  },
  {
    name: 'Arbitrum',
    icon: ArbitrumIcon,
    color: '#2D374B',
    description: 'Nitro stack support with cross-chain message decoding.',
  },
  {
    name: 'Polygon',
    icon: PolygonIcon,
    color: '#8247E5',
    description: 'PoS and zkEVM dual-chain coverage with checkpoint verification.',
  },
];

export default function MultiChain() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-void-deep">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

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
              Cross-Chain Coverage
            </span>
          </motion.span>

          <TextGenerateEffect
            words="One API. Every Chain."
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Unified access to wallet intelligence across all major chains. One query, every network.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Chain List */}
          <div className="space-y-4">
            {chains.map((chain, index) => {
              const Icon = chain.icon;
              return (
                <motion.div
                  key={chain.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <SpotlightCard className="p-5">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{
                          scale: 1.15,
                          filter: `drop-shadow(0 0 10px ${chain.color})`,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: chain.color }}
                        />
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1.5">
                          <h3 className="text-lg font-semibold text-white">
                            {chain.name}
                          </h3>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-neon-emerald/10 border border-neon-emerald/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-neon-emerald animate-pulse" />
                            <span className="text-[10px] font-semibold text-neon-emerald uppercase tracking-wider">
                              Live
                            </span>
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {chain.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>

          {/* Right: 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card rounded-2xl overflow-hidden shadow-inner-glow">
              <Suspense
                fallback={
                  <div className="h-[500px] flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin" />
                  </div>
                }
              >
                <ThreeDGlobe className="h-[500px]" />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
