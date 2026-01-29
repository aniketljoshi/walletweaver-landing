import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Wallet,
    Brain,
    Trophy,
    Bell,
    Zap,
    BarChart3,
    Terminal
} from 'lucide-react';
import PageTransition from '../../components/PageTransition';

const features = [
    {
        icon: Wallet,
        title: 'Deep Wallet Explorer',
        description: 'Analyze behavior and pnl of any address across 5 major chains.',
        color: 'text-neon-cyan',
        bg: 'bg-neon-cyan/10',
        border: 'border-neon-cyan/20'
    },
    {
        icon: Brain,
        title: 'Entity Clustering',
        description: 'ML-powered resolution identifies the real entities behind the wallets.',
        color: 'text-neon-violet',
        bg: 'bg-neon-violet/10',
        border: 'border-neon-violet/20'
    },
    {
        icon: Trophy,
        title: 'Smart Money Rank',
        description: 'Elite leaderboard of wallets ranked by consistency and ROI.',
        color: 'text-neon-amber',
        bg: 'bg-neon-amber/10',
        border: 'border-neon-amber/20'
    },
    {
        icon: BarChart3,
        title: 'Token Intelligence',
        description: 'Track accumulation pressure and narrative shifts in real-time.',
        color: 'text-neon-emerald',
        bg: 'bg-neon-emerald/10',
        border: 'border-neon-emerald/20'
    },
    {
        icon: Bell,
        title: 'Sentinel Alerts',
        description: 'Instant notifications via Telegram, Discord, and Webhooks.',
        color: 'text-neon-rose',
        bg: 'bg-neon-rose/10',
        border: 'border-neon-rose/20'
    },
    {
        icon: Terminal,
        title: 'Neural API',
        description: 'Direct programmatic access to our entire intelligence layer.',
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20'
    },
];

export default function DemoEntry() {
    return (
        <PageTransition className="min-h-[calc(100vh-80px)] relative overflow-hidden flex flex-col items-center justify-center p-6">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/80 to-slate-950 z-0" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-[100px] animate-pulse delay-700" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto space-y-16">

                {/* Hero Section */}
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md animate-[slideDown_0.5s_ease-out]">
                        <Zap className="w-3.5 h-3.5 text-neon-amber" />
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Live Interactive Environment</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight animate-[fadeIn_0.8s_ease-out]">
                        Enter the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">Nexus</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-[fadeIn_1s_ease-out]">
                        Experience the full power of WalletWeaver's intelligence layer.
                        Analyze real on-chain patterns with simulated live data. No account required.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-[fadeIn_1.2s_ease-out]">
                        <Link
                            to="/demo/dashboard"
                            className="group relative px-8 py-4 bg-white text-void-deep font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Initialize Demo
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <a
                            href="https://docs.walletweaver.com"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md"
                        >
                            Read Documentation
                        </a>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-[fadeIn_1.5s_ease-out]">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className={`group p-6 bg-void/40 border-l-4 ${feature.border} border-y border-r border-white/5 rounded-r-xl backdrop-blur-md hover:bg-white/5 transition-all hover:-translate-y-1`}
                        >
                            <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{feature.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </PageTransition>
    );
}
