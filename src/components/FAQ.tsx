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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 sm:py-48 overflow-hidden bg-void-deep">
      {/* Background */}
      <div className="absolute inset-0 bg-void-deep" />
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-electric-cyan/5 blur-[150px] rounded-full opacity-50" />

      <div className="relative max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-sm font-bold text-electric-cyan mb-8 border border-electric-cyan/20 shadow-[0_0_20px_rgba(0,229,255,0.1)]"
          >
            <HelpCircle className="w-4 h-4" />
            Support Center
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-electric-cyan to-quantum-purple bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about the WalletWeaver platform.
          </p>
        </AnimatedSection>

        <StaggerContainer className="space-y-6" staggerDelay={0.05}>
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

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={false}
      whileHover={{ y: isOpen ? 0 : -2 }}
      className={`glass-card-strong overflow-hidden transition-all duration-300 rounded-2xl ${isOpen ? 'border-electric-cyan/30 shadow-[0_0_30px_rgba(0,229,255,0.1)]' : 'hover:border-electric-cyan/20 border-white/5'}`}
    >
      <button
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-electric-cyan' : 'text-white'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-6 h-6 ${isOpen ? 'text-electric-cyan' : 'text-slate-500'}`} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-8 pb-8 pt-0">
              <p className="text-slate-400 leading-relaxed text-lg border-t border-white/5 pt-6">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
