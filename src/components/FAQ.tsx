import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const faqs = [
  {
    question: 'Which blockchains do you support?',
    answer: 'We currently support Ethereum, Solana, Base, Arbitrum, and Polygon with real-time indexing. Additional chains are added based on customer demand — Enterprise customers can request priority chain support.',
  },
  {
    question: 'How do I access the API?',
    answer: 'Sign up for a free account to get your API key instantly. Our GraphQL API comes with comprehensive documentation, interactive playground, and production-ready SDKs for TypeScript, Python, and Go.',
  },
  {
    question: 'What is the data latency?',
    answer: 'Our Kafka-powered infrastructure delivers sub-second latency from on-chain event to queryable data. Real-time alerts hit your webhooks within milliseconds of block confirmation.',
  },
  {
    question: 'Is WalletWeaver SOC 2 compliant?',
    answer: 'Yes. WalletWeaver maintains SOC 2 Type II compliance. We offer audit logs, role-based access control, and can provide attestation reports for Enterprise customers upon request.',
  },
  {
    question: 'Can I self-host WalletWeaver?',
    answer: 'Enterprise customers have the option for self-hosted deployment in their own infrastructure. This includes the full data pipeline, clustering algorithms, and API layer. Contact our sales team to discuss requirements.',
  },
  {
    question: 'How does smart-money scoring work?',
    answer: 'Our ML models analyze historical wallet performance across ROI, win rate, timing, and holding patterns. Scores are updated continuously as new on-chain data is processed. The methodology is documented in our API reference.',
  },
  {
    question: 'What alert channels are supported?',
    answer: 'Real-time alerts can be delivered via Telegram, Discord, Email, or custom Webhooks. Enterprise customers can also integrate with Slack and PagerDuty.',
  },
  {
    question: 'Do you offer a free tier?',
    answer: 'Yes. Our Free tier includes 1,000 API calls per month, access to all 5 chains, and the TypeScript SDK. It\'s perfect for exploring the platform and building prototypes before upgrading.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={false}
      className={`glass-card overflow-hidden transition-colors ${isOpen ? 'border-neon-cyan/30' : 'hover:border-slate-600/50'}`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold pr-8 transition-colors ${isOpen ? 'text-neon-cyan' : 'text-white'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-neon-cyan' : 'text-slate-400'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-5">
              <p className="text-slate-400 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void-50 to-void" />
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="relative max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-neon-cyan mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know about the WalletWeaver platform.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-4" staggerDelay={0.05}>
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
