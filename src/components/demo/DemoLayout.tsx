import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../PageTransition';
import {
  LayoutDashboard,
  Wallet,
  Coins,
  Trophy,
  Bell,
  Code2,
  Search,
  Settings,
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { path: '/demo/dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'electric-cyan', glow: 'shadow-[0_0_15px_rgba(0,229,255,0.4)]' },
  { path: '/demo/wallets', label: 'Smart Wallets', icon: Wallet, color: 'neon-violet', glow: 'shadow-[0_0_15px_rgba(167,139,250,0.4)]' },
  { path: '/demo/tokens', label: 'Token Analysis', icon: Coins, color: 'plasma-emerald', glow: 'shadow-[0_0_15px_rgba(52,211,153,0.4)]' },
  { path: '/demo/leaderboard', label: 'Leaderboard', icon: Trophy, color: 'solar-amber', glow: 'shadow-[0_0_15px_rgba(251,191,36,0.4)]' },
  { path: '/demo/alerts', label: 'Alerts', icon: Bell, color: 'neon-rose', glow: 'shadow-[0_0_15px_rgba(251,113,133,0.4)]' },
  { path: '/demo/developer', label: 'API Console', icon: Code2, color: 'electric-cyan', glow: 'shadow-[0_0_15px_rgba(0,229,255,0.4)]' },
];

export default function DemoLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-void-deep flex font-sans text-slate-300 selection:bg-neon-cyan/20 selection:text-neon-cyan overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-electric-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-quantum-purple/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="relative z-20 flex flex-col border-r border-white/5 bg-void/50 backdrop-blur-xl transition-all duration-500 will-change-width"
      >
        {/* Header */}
        <div className="h-20 flex items-center px-6 border-b border-white/5">
          <Link to="/" className="group flex items-center gap-3 w-full">
            <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
              <img src="/favicon.svg" alt="Logo" className="w-8 h-8 object-contain relative z-10" />
              <div className="absolute inset-0 bg-neon-cyan/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </div>
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col"
              >
                <span className="font-bold text-white tracking-tight">Wallet<span className="text-neon-cyan">Weaver</span></span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500">Terminal v2.0</span>
              </motion.div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/demo/dashboard' && location.pathname.startsWith(item.path));
            return (
              <Link key={item.path} to={item.path}>
                <div className="relative group">
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 bg-${item.color}/10 border-l-2 border-${item.color} rounded-r-xl`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className={`relative flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'}`}>
                    <item.icon className={`w-5 h-5 transition-colors ${isActive ? `text-${item.color} drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]` : ''}`} />
                    {isSidebarOpen && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="font-medium text-sm"
                      >
                        {item.label}
                      </motion.span>
                    )}
                    {/* Live/Count Indicators could go here */}
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/5 space-y-4">
          {isSidebarOpen ? (
            <div className="p-4 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-quantum-purple/10 border border-white/5">
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                You are viewing a <span className="text-white font-medium">Public Demo</span>. Data is simulated.
              </p>
              <Link to="/" className="block w-full py-2 text-center text-xs font-bold text-void-deep bg-neon-cyan rounded-lg hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                Get Full Access
              </Link>
            </div>
          ) : (
            <div className="flex justify-center">
              <Settings className="w-5 h-5 text-slate-500 hover:text-white transition-colors cursor-pointer" />
            </div>
          )}

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center py-2 hover:bg-white/5 rounded-lg transition-colors group"
          >
            <div className="w-1 h-8 rounded-full bg-slate-700 group-hover:bg-slate-500 transition-colors" />
          </button>
        </div>
      </motion.aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col relative z-10 overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 flex items-center justify-between px-8 border-b border-white/5 bg-void/30 backdrop-blur-md">
          <div className="flex items-center gap-4 w-96">
            <div className="relative w-full group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-neon-cyan transition-colors" />
              <input
                type="text"
                placeholder="Search wallets, tokens, or entities..."
                className="w-full bg-white/5 border border-white/5 focus:border-neon-cyan/50 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-600 outline-none transition-all focus:bg-white/10"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">System Operational</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-electric-cyan to-quantum-purple p-[1px]">
              <div className="w-full h-full rounded-full bg-void flex items-center justify-center">
                <span className="text-xs font-bold text-white">JD</span>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
