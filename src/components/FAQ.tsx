import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { GridBackground } from './ui/GridBackground';

const faqs = [
  {
    question: 'What is WalletWeaver?',
    answer:
      'WalletWeaver is an on-chain intelligence platform that decodes wallet behavior across 50+ blockchains. We transform raw transaction data into actionable insights — entity resolution, smart-money scoring, real-time alerts, and portfolio analytics — so you can see the story behind every wallet.',
  },
  {
    question: 'Which blockchains do you support?',
    answer:
      'We currently support 50+ chains including Ethereum, Solana, Base, Arbitrum, Polygon, Optimism, Avalanche, BNB Chain, and many more. New chains are added continuously based on demand, and Enterprise customers can request priority chain support with dedicated indexing infrastructure.',
  },
  {
    question: 'How does entity resolution work?',
    answer:
      'Our ML models analyze transaction patterns, token interactions, contract deployments, and timing heuristics to cluster wallets belonging to the same entity. The system continuously refines its predictions as new on-chain data arrives, achieving over 94% accuracy on known entity benchmarks.',
  },
  {
    question: 'Is there a free tier?',
    answer:
      'Yes, our free tier includes 1,000 API calls per month, access to 5 chains, the TypeScript SDK, and basic smart-money alerts. It\'s perfect for exploring the platform and building prototypes before upgrading to Pro or Enterprise.',
  },
  {
    question: 'How real-time are the alerts?',
    answer:
      'Sub-second latency via WebSocket connections. From on-chain event to your webhook, Telegram, or Discord — alerts arrive within milliseconds of block confirmation. Our Kafka-powered pipeline processes millions of events per second with zero data loss.',
  },
  {
    question: 'Can I use the API in production?',
    answer:
      'Yes, our GraphQL API is built for scale with 99.99% uptime SLA on Pro and Enterprise plans. It supports batched queries, real-time subscriptions, cursor-based pagination, and comes with production-ready SDKs for TypeScript, Python, and Go.',
  },
  {
    question: "What's the smart money score?",
    answer:
      'A proprietary metric that measures a wallet\'s historical performance across multiple dimensions — ROI consistency, win rate, entry timing, holding patterns, and portfolio diversification. Scores range from 0 to 100 and are updated continuously as new transactions are processed.',
  },
  {
    question: 'Do you offer enterprise solutions?',
    answer:
      'Yes, with dedicated infrastructure, custom SLAs, priority chain support, SSO/SAML authentication, audit logs, and a dedicated solutions engineer. Enterprise customers also get access to self-hosted deployment options and white-label capabilities. Contact our sales team to discuss your requirements.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-void-deep">
      <GridBackground>
        {/* Ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-electric-cyan/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-sm font-bold text-electric-cyan mb-8 border border-electric-cyan/20 shadow-[0_0_20px_rgba(0,229,255,0.1)]"
            >
              Frequently Asked Questions
            </motion.span>

            <TextGenerateEffect
              words="Got Questions? We've Got Answers"
              className="text-3xl sm:text-4xl lg:text-5xl mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-xl mx-auto"
            >
              Everything you need to know about the WalletWeaver platform.
            </motion.p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div
                  className={`glass-card overflow-hidden rounded-2xl transition-all duration-300 ${
                    openIndex === index
                      ? 'border-electric-cyan/30 shadow-[0_0_30px_rgba(0,229,255,0.08)]'
                      : 'border-white/[0.06] hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left gap-4"
                    aria-expanded={openIndex === index}
                  >
                    <span
                      className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
                        openIndex === index ? 'text-electric-cyan' : 'text-white'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 90 : 0 }}
                      transition={{ duration: 0.25, type: 'spring', stiffness: 300, damping: 20 }}
                      className="flex-shrink-0"
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-electric-cyan" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-500" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                          <div className="border-t border-white/[0.06] pt-5">
                            <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
