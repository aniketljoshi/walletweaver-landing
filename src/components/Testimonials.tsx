import { motion } from 'framer-motion';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { TextGenerateEffect } from './ui/TextGenerateEffect';

const testimonials = [
  {
    quote:
      "WalletWeaver's entity resolution is game-changing. We identified wallet clusters that no other tool could connect, giving our research a massive edge.",
    name: 'Alex Chen',
    title: 'Lead Researcher, DeFi Analytics Co',
  },
  {
    quote:
      'The GraphQL API is the most flexible we have used in the on-chain data space. Complex queries that took hours now resolve in milliseconds.',
    name: 'Sarah Kim',
    title: 'CTO, ChainScope',
  },
  {
    quote:
      'We replaced 3 tools with WalletWeaver and cut our data pipeline costs by 60%. The unified multi-chain approach is exactly what we needed.',
    name: 'Marcus Rivera',
    title: 'Fund Manager, Quantum Capital',
  },
  {
    quote:
      'Real-time alerts have given us a decisive advantage. We are consistently early to smart money movements across every chain we track.',
    name: 'Priya Patel',
    title: 'Head of Trading, Nova Fund',
  },
  {
    quote:
      'The smart money tracking is incredibly accurate. Our alpha generation improved by 40% within the first month of integration.',
    name: 'James Wong',
    title: 'Quantitative Analyst, Block Ventures',
  },
  {
    quote:
      'Best on-chain intelligence platform we have evaluated. The developer experience and documentation are world-class.',
    name: 'Emma Thompson',
    title: 'DeFi Developer',
  },
  {
    quote:
      'Entity clustering accuracy is unmatched. We validated against our proprietary labels and WalletWeaver consistently outperformed every competitor.',
    name: 'David Park',
    title: 'Research Lead, Messari',
  },
  {
    quote:
      'Finally a tool that understands the full context of wallet behavior across chains. The cross-chain entity resolution alone is worth the subscription.',
    name: 'Lisa Chen',
    title: 'Portfolio Manager, Digital Asset Fund',
  },
];

const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-void-deep">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-cyan/[0.03] rounded-full blur-[120px]" />

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
              What Builders Say
            </span>
          </motion.span>

          <TextGenerateEffect
            words="Trusted by Builders"
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Teams across DeFi, trading, and research trust WalletWeaver for their on-chain intelligence.
          </motion.p>
        </div>

        {/* Scrolling Testimonial Rows */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <InfiniteMovingCards
              items={row1}
              direction="left"
              speed="slow"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <InfiniteMovingCards
              items={row2}
              direction="right"
              speed="slow"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
