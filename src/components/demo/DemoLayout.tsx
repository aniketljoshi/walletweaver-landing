import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Wallet,
  Coins,
  Trophy,
  Bell,
  Code2,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

const navItems = [
  { path: '/demo/dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'neon-cyan' },
  { path: '/demo/wallets', label: 'Wallets', icon: Wallet, color: 'neon-violet' },
  { path: '/demo/tokens', label: 'Tokens', icon: Coins, color: 'neon-emerald' },
  { path: '/demo/leaderboard', label: 'Leaderboard', icon: Trophy, color: 'neon-amber' },
  { path: '/demo/alerts', label: 'Alerts', icon: Bell, color: 'neon-rose' },
  { path: '/demo/developer', label: 'Developer', icon: Code2, color: 'neon-cyan' },
];

export default function DemoLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-void flex">
      {/* Sidebar */}
      <aside className="w-64 demo-sidebar flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-glass-border">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 glass-card border-neon-cyan/30">
              <Sparkles className="w-5 h-5 text-neon-cyan" />
            </div>
            <div>
              <span className="font-semibold text-white">WalletWeaver</span>
              <span className="ml-2 px-2 py-0.5 bg-neon-amber/10 border border-neon-amber/30 text-neon-amber text-xs font-medium rounded-full">
                Demo
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== '/demo/dashboard' && location.pathname.startsWith(item.path));
            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                    isActive
                      ? `bg-${item.color}/10 text-${item.color} border border-${item.color}/30`
                      : 'text-slate-400 hover:text-white hover:bg-glass-50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`ml-auto w-1.5 h-1.5 rounded-full bg-${item.color}`}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Demo Notice */}
        <div className="p-4 border-t border-glass-border">
          <div className="glass-card p-3">
            <p className="text-xs text-slate-400">
              This is a demo with sample data.
              <Link to="/" className="text-neon-cyan hover:underline ml-1">
                Join waitlist
              </Link>{' '}
              for real access.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}
