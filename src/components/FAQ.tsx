import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Which blockchains do you support?',
      answer: 'We currently support Ethereum, Solana, Base, Arbitrum, and Polygon with real-time indexing. Additional chains are added based on customer demand — Enterprise customers can request priority chain support.'
    },
    {
      question: 'How do I access the API?',
      answer: 'Sign up for a free account to get your API key instantly. Our GraphQL API comes with comprehensive documentation, interactive playground, and production-ready SDKs for TypeScript, Python, and Go.'
    },
    {
      question: 'What is the data latency?',
      answer: 'Our Kafka-powered infrastructure delivers sub-second latency from on-chain event to queryable data. Real-time alerts hit your webhooks within milliseconds of block confirmation.'
    },
    {
      question: 'Is WalletWeaver SOC 2 compliant?',
      answer: 'Yes. WalletWeaver maintains SOC 2 Type II compliance. We offer audit logs, role-based access control, and can provide attestation reports for Enterprise customers upon request.'
    },
    {
      question: 'Can I self-host WalletWeaver?',
      answer: 'Enterprise customers have the option for self-hosted deployment in their own infrastructure. This includes the full data pipeline, clustering algorithms, and API layer. Contact our sales team to discuss requirements.'
    },
    {
      question: 'How does smart-money scoring work?',
      answer: 'Our ML models analyze historical wallet performance across ROI, win rate, timing, and holding patterns. Scores are updated continuously as new on-chain data is processed. The methodology is documented in our API reference.'
    },
    {
      question: 'What alert channels are supported?',
      answer: 'Real-time alerts can be delivered via Telegram, Discord, Email, or custom Webhooks. Enterprise customers can also integrate with Slack and PagerDuty.'
    },
    {
      question: 'Do you offer a free tier?',
      answer: 'Yes. Our Free tier includes 1,000 API calls per month, access to all 5 chains, and the TypeScript SDK. It\'s perfect for exploring the platform and building prototypes before upgrading.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-900/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to know about the WalletWeaver platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-600/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
