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
    <section id="pricing" className="relative py-32 sm:py-48 overflow-hidden mesh-gradient-light perspective-2000">
      {/* Background elements */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[100px]" />
      <div className="absolute -top-[20%] right-0 w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-[20%] left-0 w-[600px] h-[600px] bg-quantum-purple/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 text-sm font-bold text-solar-amber mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            Early Access Pricing
          </motion.span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-light-text mb-8">
            Transparent pricing{' '}
            <span className="bg-gradient-to-r from-solar-amber to-neon-rose bg-clip-text text-transparent">that scales</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Join the waitlist to get early access and exclusive launch pricing for early adopters.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-20 items-center perspective-1000" staggerDelay={0.15}>
          {plans.map((plan, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className={`relative group ${plan.highlighted ? 'md:-mt-12 z-20' : 'z-10'}`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-6 left-1/2 -translate-x-1/2 z-30"
                  >
                    <div className="px-6 py-2 bg-gradient-to-r from-electric-cyan to-quantum-purple rounded-full text-sm font-bold text-white shadow-lg shadow-electric-cyan/20">
                      {plan.badge}
                    </div>
                  </motion.div>
                )}

                <div
                  className={`relative h-full p-8 sm:p-10 transition-all duration-500 rounded-3xl overflow-hidden preserve-3d ${plan.highlighted
                    ? 'bg-void-deep text-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-0'
                    : 'bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]'
                    }`}
                >
                  {/* Background gradients */}
                  {plan.highlighted ? (
                    <>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-electric-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-quantum-purple/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-50" />
                  )}

                  {/* Plan header */}
                  <div className="relative mb-8 z-10">
                    <h3 className={`text-2xl font-bold mb-4 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className={`text-5xl font-bold tracking-tight ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                    </div>
                    <p className={`text-base leading-relaxed ${plan.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>{plan.description}</p>
                  </div>

                  {/* Horizontal Rule */}
                  <div className={`h-px w-full mb-8 ${plan.highlighted ? 'bg-white/10' : 'bg-slate-100'}`} />

                  {/* Features */}
                  <ul className="relative space-y-5 mb-10 z-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className={`mt-1 p-1 rounded-full ${plan.highlighted ? 'bg-electric-cyan/20 text-electric-cyan' : 'bg-slate-100 text-slate-600'}`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className={`text-base font-medium ${plan.highlighted ? 'text-slate-200' : 'text-slate-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="relative z-10">
                    {plan.highlighted ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-5 px-6 rounded-2xl bg-white text-void-deep font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300"
                      >
                        {plan.cta}
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 px-6 rounded-2xl bg-slate-50 text-slate-900 font-bold text-lg border border-slate-200 hover:border-slate-300 transition-all duration-300"
                      >
                        {plan.cta}
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Waitlist CTA */}
        <AnimatedSection delay={0.4} className="text-center relative z-20">
          <motion.div
            whileHover={{ y: -5 }}
            className="inline-flex flex-col sm:flex-row items-center gap-6 px-10 py-8 bg-void-deep rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden relative group"
          >
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-electric-cyan/10 to-quantum-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="text-left relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Ready to get started?</h3>
              <p className="text-slate-400 text-base">Join 2,000+ traders and developers on the waitlist.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-electric-cyan to-quantum-purple rounded-xl font-bold text-white flex items-center gap-3 shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] transition-shadow duration-300 relative z-10"
            >
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
