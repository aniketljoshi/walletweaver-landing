import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { SpotlightCard } from './ui/SpotlightEffect';
import { MovingBorderButton } from './ui/MovingBorder';

interface PricingTier {
  name: string;
  badge?: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'Free',
    monthlyPrice: '$0',
    annualPrice: '$0',
    description: 'Free forever',
    features: [
      '1K API calls/day',
      '5 wallet tracks',
      'Basic entity labels',
      'Community support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    badge: 'Most Popular',
    monthlyPrice: '$49',
    annualPrice: '$39',
    description: 'Most Popular',
    features: [
      '100K API calls/day',
      'Unlimited wallet tracks',
      'ML entity resolution',
      'Real-time alerts',
      'Priority support',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    description: 'Custom',
    features: [
      'Unlimited everything',
      'Dedicated infrastructure',
      'Custom ML models',
      'SLA guarantee',
      'Dedicated account manager',
    ],
    cta: 'Contact Us',
    highlighted: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-32 overflow-hidden bg-void-deep"
    >
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-dark" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-cyan/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neon-violet/[0.04] rounded-full blur-[120px]" />

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
              Pricing
            </span>
          </motion.span>

          <TextGenerateEffect
            words="Simple, Transparent Pricing"
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Start free, scale when you are ready. No hidden fees, no surprise overages.
          </motion.p>

          {/* Annual / Monthly Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-flex items-center gap-1 p-1 rounded-full glass-card border-white/[0.06]"
          >
            <button
              onClick={() => setIsAnnual(true)}
              className="relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 z-10"
            >
              {isAnnual && (
                <motion.div
                  layoutId="pricingToggle"
                  className="absolute inset-0 rounded-full bg-neon-cyan/20 border border-neon-cyan/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${isAnnual ? 'text-neon-cyan' : 'text-slate-400'}`}>
                Annual
              </span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className="relative px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 z-10"
            >
              {!isAnnual && (
                <motion.div
                  layoutId="pricingToggle"
                  className="absolute inset-0 rounded-full bg-neon-cyan/20 border border-neon-cyan/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${!isAnnual ? 'text-neon-cyan' : 'text-slate-400'}`}>
                Monthly
              </span>
            </button>
          </motion.div>

          {isAnnual && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-neon-emerald mt-3"
            >
              Save 20% with annual billing
            </motion.p>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={tier.highlighted ? 'lg:-mt-4 lg:-mb-[-16px]' : ''}
            >
              {tier.highlighted ? (
                /* Pro card: moving border wrapper */
                <div className="relative h-full">
                  <MovingBorderButton
                    borderRadius="1rem"
                    duration={6}
                    containerClassName="w-full h-full"
                    className="w-full h-full p-0 bg-void-deep"
                  >
                    <PricingCardContent tier={tier} isAnnual={isAnnual} />
                  </MovingBorderButton>
                </div>
              ) : (
                /* Free / Enterprise cards: SpotlightCard */
                <SpotlightCard
                  className={`h-full ${tier.name === 'Enterprise' ? 'glass-strong' : ''}`}
                >
                  <PricingCardContent tier={tier} isAnnual={isAnnual} />
                </SpotlightCard>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg font-semibold text-white mb-2">
            Start Free, Scale Fast
          </p>
          <p className="text-sm text-slate-400">
            No credit card required. Upgrade anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Extracted card content so both SpotlightCard and MovingBorder share */
/* the same inner markup                                               */
/* ------------------------------------------------------------------ */
function PricingCardContent({
  tier,
  isAnnual,
}: {
  tier: PricingTier;
  isAnnual: boolean;
}) {
  const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
  const isCustom = price === 'Custom';

  return (
    <div className="relative p-8 flex flex-col h-full">
      {/* Badge */}
      {tier.badge && (
        <span className="absolute -top-0 right-6 px-3 py-1 rounded-b-lg bg-gradient-to-r from-neon-cyan to-neon-violet text-[11px] font-bold text-white uppercase tracking-wider">
          {tier.badge}
        </span>
      )}

      {/* Plan name + description */}
      <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
      <p className="text-sm text-slate-400 mb-6">{tier.description}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-8">
        <AnimatePresence mode="wait">
          <motion.span
            key={price}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="text-5xl font-bold text-white"
          >
            {price}
          </motion.span>
        </AnimatePresence>
        {!isCustom && (
          <span className="text-slate-500 text-base">/mo</span>
        )}
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/[0.06] mb-6" />

      {/* Features */}
      <ul className="space-y-4 mb-8 flex-1">
        {tier.features.map((feature, i) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.06 }}
            className="flex items-start gap-3"
          >
            <div
              className={`mt-0.5 flex-shrink-0 p-1 rounded-full ${
                tier.highlighted
                  ? 'bg-neon-cyan/20 text-neon-cyan'
                  : 'bg-white/[0.06] text-slate-400'
              }`}
            >
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span className="text-sm text-slate-300">{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 ${
          tier.highlighted
            ? 'bg-neon-cyan text-void-deep hover:shadow-[0_0_40px_rgba(0,240,255,0.35)]'
            : 'glass-card text-white hover:bg-white/[0.06]'
        }`}
      >
        {tier.cta}
      </motion.button>
    </div>
  );
}
