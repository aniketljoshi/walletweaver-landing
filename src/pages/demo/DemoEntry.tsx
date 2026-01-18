import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Wallet,
    Brain,
    Trophy,
    Bell,
    Code2,
    Zap,
    BarChart3
} from 'lucide-react';

const features = [
    {
        icon: Wallet,
        title: 'Wallet Explorer',
        description: 'Deep-dive into any wallet across 5 chains',
    },
    {
        icon: Brain,
        title: 'Entity Resolution',
        description: 'ML-powered clustering identifies real entities',
    },
    {
        icon: Trophy,
        title: 'Smart Money Leaderboard',
        description: 'Ranked wallets by ROI, win rate, conviction',
    },
    {
        icon: BarChart3,
        title: 'Token Analytics',
        description: 'Track flows and smart money accumulation',
    },
    {
        icon: Bell,
        title: 'Real-Time Alerts',
        description: 'Telegram, Discord, Email, Webhooks',
    },
    {
        icon: Code2,
        title: 'API Console',
        description: 'GraphQL playground with live examples',
    },
];

export default function DemoEntry() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5" />

                <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full mb-8">
                        <Zap className="w-4 h-4 text-amber-400" />
                        <span className="text-sm text-slate-300">Interactive Demo</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Experience WalletWeaver
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                        Explore the full platform with realistic demo data.
                        No signup required. Takes about 2 minutes.
                    </p>

                    <Link
                        to="/demo/dashboard"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
                    >
                        Enter Platform
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-5xl mx-auto px-6 pb-24">
                <h2 className="text-2xl font-bold text-white text-center mb-12">
                    What you'll explore
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-colors"
                        >
                            <div className="p-2.5 bg-slate-700/30 rounded-lg w-fit mb-4">
                                <feature.icon className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-sm text-slate-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="max-w-3xl mx-auto px-6 pb-20">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700/50 rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-3">Ready to dive in?</h3>
                    <p className="text-slate-400 mb-6">
                        All features are fully interactive with sample data
                    </p>
                    <Link
                        to="/demo/dashboard"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-medium text-white transition-colors"
                    >
                        Start Exploring
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
