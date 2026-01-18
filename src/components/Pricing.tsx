import { Check, ArrowRight, Sparkles } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold rounded-full mb-4">
            Coming Soon
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Transparent pricing that scales
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join the waitlist to get early access and exclusive launch pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Free Tier */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 opacity-80">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Free</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">Perfect for exploring and prototyping.</p>
            </div>

            <ul className="space-y-3 mb-8">
              {['1,000 API calls/month', '5 chains supported', 'Basic wallet explorer', 'Community support', 'TypeScript SDK'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="py-3 px-6 rounded-lg bg-slate-700/30 text-center text-slate-400 text-sm">
              Available at launch
            </div>
          </div>

          {/* Pro Tier - Highlighted */}
          <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/50 rounded-2xl p-8 scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
              Most Popular
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">$199</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">For traders and teams who need the edge.</p>
            </div>

            <ul className="space-y-3 mb-8">
              {['100,000 API calls/month', 'All 5 chains + priority', 'Smart money leaderboards', 'Real-time alerts (Telegram, Discord)', 'Copy-trading webhooks', 'Priority email support', 'All SDKs (TS, Python, Go)'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="py-3 px-6 rounded-lg bg-slate-700/30 text-center text-slate-400 text-sm">
              Available at launch
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 opacity-80">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <p className="text-sm text-slate-400 mt-2">For funds, compliance, and high-volume apps.</p>
            </div>

            <ul className="space-y-3 mb-8">
              {['Unlimited API calls', 'Custom SLA & uptime guarantee', 'Dedicated account manager', 'Self-hosted deployment option', 'Custom entity models', 'Data warehouse export', 'SOC 2 attestation & audit logs'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="py-3 px-6 rounded-lg bg-slate-700/30 text-center text-slate-400 text-sm">
              Contact for early access
            </div>
          </div>
        </div>

        {/* Waitlist CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <div className="text-left">
              <p className="text-white font-semibold">Get early access & launch pricing</p>
              <p className="text-sm text-slate-400">Waitlist members get 20% off for the first year</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 flex items-center gap-2">
              Join the Waitlist
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          All plans include: SOC 2 compliant infrastructure • 99.9% uptime • GDPR ready
        </p>
      </div>
    </section>
  );
}
