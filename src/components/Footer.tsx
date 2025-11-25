import { Network, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-800/50 border border-slate-700/50 rounded-lg">
              <Network className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-lg font-semibold text-white">WalletWeaver</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a
              href="mailto:founders@walletweaver.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              founders@walletweaver.com
            </a>
          </div>

          <div className="text-sm text-slate-500">
            © 2025 WalletWeaver
          </div>
        </div>
      </div>
    </footer>
  );
}
