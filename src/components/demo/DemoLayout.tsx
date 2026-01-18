import { Outlet, Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Wallet,
    Coins,
    Trophy,
    Bell,
    Code2,
    ArrowLeft,
    Sparkles
} from 'lucide-react';

const navItems = [
    { path: '/demo/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/demo/wallets', label: 'Wallets', icon: Wallet },
    { path: '/demo/tokens', label: 'Tokens', icon: Coins },
    { path: '/demo/leaderboard', label: 'Leaderboard', icon: Trophy },
    { path: '/demo/alerts', label: 'Alerts', icon: Bell },
    { path: '/demo/developer', label: 'Developer', icon: Code2 },
];

export default function DemoLayout() {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-slate-950 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900/50 border-r border-slate-800 flex flex-col">
                {/* Logo */}
                <div className="p-4 border-b border-slate-800">
                    <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-4">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                            <Sparkles className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                            <span className="font-semibold text-white">WalletWeaver</span>
                            <span className="ml-2 px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium rounded-full">
                                Demo
                            </span>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path ||
                            (item.path !== '/demo/dashboard' && location.pathname.startsWith(item.path));
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${isActive
                                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Demo Notice */}
                <div className="p-4 border-t border-slate-800">
                    <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                        <p className="text-xs text-slate-400">
                            This is a demo with sample data.
                            <Link to="/" className="text-blue-400 hover:underline ml-1">
                                Join waitlist
                            </Link>
                            {' '}for real access.
                        </p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
}
