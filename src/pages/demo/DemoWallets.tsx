import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import WalletCard from '../../components/demo/WalletCard';
import walletsData from '../../data/demo/wallets.json';

const entityTypes = ['all', 'whale', 'fund', 'trader', 'exchange', 'bot', 'market_maker', 'founder'];
const chains = ['all', 'ethereum', 'solana', 'base', 'arbitrum', 'polygon'];

export default function DemoWallets() {
    const [search, setSearch] = useState('');
    const [entityFilter, setEntityFilter] = useState('all');
    const [chainFilter, setChainFilter] = useState('all');

    const filteredWallets = walletsData.filter((wallet) => {
        const matchesSearch =
            wallet.label.toLowerCase().includes(search.toLowerCase()) ||
            wallet.address.toLowerCase().includes(search.toLowerCase()) ||
            (wallet.ensName && wallet.ensName.toLowerCase().includes(search.toLowerCase()));

        const matchesEntity = entityFilter === 'all' || wallet.entityType === entityFilter;
        const matchesChain = chainFilter === 'all' || wallet.chain === chainFilter;

        return matchesSearch && matchesEntity && matchesChain;
    });

    return (
        <div className="p-2 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Smart Wallet Explorer</h1>
                    <p className="text-slate-400">Track high-conviction entities across chains</p>
                </div>
                <div className="text-right hidden md:block">
                    <div className="text-2xl font-bold text-white tracking-tight">{filteredWallets.length}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">Active Entities</div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-neon-cyan transition-colors" />
                    <input
                        type="text"
                        placeholder="Search by address, ENS, or label..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all shadow-sm"
                    />
                </div>

                <div className="relative">
                    <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <select
                        value={entityFilter}
                        onChange={(e) => setEntityFilter(e.target.value)}
                        className="pl-11 pr-8 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all appearance-none cursor-pointer hover:bg-white/10"
                    >
                        {entityTypes.map((type) => (
                            <option key={type} value={type} className="bg-slate-900">
                                {type === 'all' ? 'All Types' : type.replace('_', ' ')}
                            </option>
                        ))}
                    </select>
                </div>

                <select
                    value={chainFilter}
                    onChange={(e) => setChainFilter(e.target.value)}
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all appearance-none cursor-pointer hover:bg-white/10"
                >
                    {chains.map((chain) => (
                        <option key={chain} value={chain} className="bg-slate-900">
                            {chain === 'all' ? 'All Chains' : chain}
                        </option>
                    ))}
                </select>
            </div>

            {/* Wallet Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredWallets.map((wallet) => (
                    <WalletCard
                        key={wallet.address}
                        address={wallet.address}
                        ensName={wallet.ensName}
                        label={wallet.label}
                        entityType={wallet.entityType}
                        chain={wallet.chain}
                        smartMoneyScore={wallet.smartMoneyScore}
                        pnl30d={wallet.pnl30d}
                        roi30d={wallet.roi30d}
                        winRate={wallet.winRate}
                    />
                ))}
            </div>

            {filteredWallets.length === 0 && (
                <div className="text-center py-20 bg-white/5 border border-dashed border-white/10 rounded-2xl">
                    <p className="text-slate-400">No active entities found matching your criteria</p>
                    <button
                        onClick={() => { setSearch(''); setEntityFilter('all'); setChainFilter('all'); }}
                        className="mt-4 text-neon-cyan hover:underline text-sm font-medium"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    );
}
