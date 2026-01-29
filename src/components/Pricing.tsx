import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for exploring and prototyping.',
    features: [
      '1,000 API calls/month',
      '5 chains supported',
      'Basic wallet explorer',
      'Community support',
      'TypeScript SDK',
    ],
    cta: 'Available at launch',
    highlighted: false,
    color: 'slate',
  },
  {
    name: 'Pro',
    price: '$199',
    period: '/month',
    description: 'For traders and teams who need the edge.',
    features: [
      '100,000 API calls/month',
      'All 5 chains + priority',
      'Smart money leaderboards',
      'Real-time alerts (Telegram, Discord)',
      'Copy-trading webhooks',
      'Priority email support',
      'All SDKs (TS, Python, Go)',
    ],
    cta: 'Available at launch',
    highlighted: true,
    color: 'neon-cyan',
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For funds, compliance, and high-volume apps.',
    features: [
      'Unlimited API calls',
      'Custom SLA & uptime guarantee',
      'Dedicated account manager',
      'Self-hosted deployment option',
      'Custom entity models',
      'Data warehouse export',
      'SOC 2 attestation & audit logs',
    ],
    cta: 'Contact for early access',
    highlighted: false,
    color: 'neon-violet',
  },
];

export default function Pricing() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-neon-amber mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Transparent pricing{' '}
            <span className="gradient-text">that scales</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join the waitlist to get early access and exclusive launch pricing.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-12 items-start" staggerDelay={0.15}>
          {plans.map((plan, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`relative h-full ${plan.highlighted ? 'md:-mt-4' : ''}`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="px-4 py-1 bg-gradient-to-r from-neon-cyan to-neon-violet rounded-full text-sm font-semibold text-white shadow-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div
                  className={`relative h-full glass-card p-8 transition-all duration-500 ${
                    plan.highlighted
                      ? 'border-neon-cyan/30 shadow-neon-cyan/10'
                      : 'hover:border-neon-cyan/20'
                  }`}
                >
                  {/* Glow for highlighted plan */}
                  {plan.highlighted && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-neon-cyan/5 to-neon-violet/5 opacity-50" />
                  )}

                  {/* Plan header */}
                  <div className="relative mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-bold ${plan.highlighted ? 'gradient-text' : 'text-white'}`}>
                        {plan.price}
                      </span>
                      <span className="text-slate-400">{plan.period}</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="relative space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            plan.highlighted ? 'text-neon-emerald' : 'text-slate-500'
                          }`}
                        />
                        <span className={`text-sm ${plan.highlighted ? 'text-slate-300' : 'text-slate-400'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="relative">
                    {plan.highlighted ? (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-violet/20 border border-neon-cyan/30 text-white font-medium transition-all hover:shadow-neon-cyan/20 btn-glow"
                      >
                        {plan.cta}
                      </motion.button>
                    ) : (
                      <div className="w-full py-3 px-6 rounded-xl glass-card text-center text-slate-400 text-sm">
                        {plan.cta}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Waitlist CTA */}
        <AnimatedSection delay={0.4} className="text-center">
          <div className="glass-card-strong inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-white mb-1">Ready to get started?</h3>
              <p className="text-slate-400 text-sm">Join 2,000+ traders and developers on the waitlist.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-neon-cyan/20 to-neon-violet/20 border border-neon-cyan/30 rounded-xl font-medium text-white flex items-center gap-2 btn-glow whitespace-nowrap"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
