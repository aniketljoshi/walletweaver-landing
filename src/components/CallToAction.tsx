import { motion } from 'framer-motion';
import { AuroraBackground } from './ui/AuroraBackground';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { MeteorEffect } from './ui/MeteorEffect';
import { MovingBorderButton } from './ui/MovingBorder';

const trustBadges = [
  'No credit card required',
  'Free tier forever',
  'SOC 2 Compliant',
];

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackground className="!min-h-0 py-24 md:py-32" showRadialGradient={false}>
        <BackgroundBeams className="opacity-30" />
        <MeteorEffect number={8} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TextGenerateEffect
              words="Ready to Decode the Blockchain?"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6"
            />
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
          >
            Join thousands of traders, funds, and developers using WalletWeaver to gain an edge in
            crypto.
          </motion.p>

          {/* Email input + Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center max-w-lg mx-auto mb-10"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-6 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-full sm:rounded-r-none sm:rounded-l-full text-white placeholder-slate-500 outline-none focus:border-electric-cyan/40 focus:bg-white/[0.06] transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
            />
            <MovingBorderButton
              containerClassName="w-full sm:w-auto mt-3 sm:mt-0 rounded-full sm:rounded-l-none sm:rounded-r-full"
              className="w-full sm:w-auto rounded-full sm:rounded-l-none sm:rounded-r-full px-8 py-3.5 font-semibold text-sm sm:text-base bg-void-deep hover:bg-electric-cyan/10 transition-colors duration-300"
              borderRadius="9999px"
            >
              Join Waitlist
            </MovingBorderButton>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {trustBadges.map((badge, index) => (
              <span
                key={index}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  );
}
