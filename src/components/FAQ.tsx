import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Which chains do you support?',
      answer: 'We currently support Ethereum, Base, Arbitrum, Optimism, Polygon, and Solana. We\'re actively expanding to cover additional EVM and non-EVM chains based on user demand.'
    },
    {
      question: 'Can we self-host?',
      answer: 'Enterprise self-hosted deployments are available for qualified customers. This includes full data pipeline deployment, custom clustering logic, and dedicated infrastructure. Contact us to discuss your requirements.'
    },
    {
      question: 'Who is WalletWeaver for?',
      answer: 'WalletWeaver is built for funds, prop trading desks, protocols, research teams, and compliance professionals who need deep wallet-level intelligence to make informed decisions in crypto markets.'
    },
    {
      question: 'How do I get early access?',
      answer: 'Click "Apply for Early Access" or "Join the Waitlist" and fill out the application form. We\'re onboarding users in batches and prioritizing teams with specific use cases and feedback capacity.'
    },
    {
      question: 'What makes WalletWeaver different from existing tools?',
      answer: 'We focus on entity-level intelligence rather than just address tracking. Our clustering algorithms identify real entities behind wallet groups, and we provide API-first access for seamless integration into your existing workflows.'
    },
    {
      question: 'Is there API documentation available?',
      answer: 'API documentation will be shared with early access users. We provide GraphQL APIs for flexible querying and streaming endpoints for real-time data feeds.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-slate-900/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
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
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
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
