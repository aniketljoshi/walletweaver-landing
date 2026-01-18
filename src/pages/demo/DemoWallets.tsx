import { useState } from 'react';
import { Search } from 'lucide-react';
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
        <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">Wallet Explorer</h1>
                <p className="text-slate-400">Discover and track smart money wallets</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by address, ENS, or label..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
                    />
                </div>

                <select
                    value={entityFilter}
                    onChange={(e) => setEntityFilter(e.target.value)}
                    className="px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
                >
                    {entityTypes.map((type) => (
                        <option key={type} value={type}>
                            {type === 'all' ? 'All Types' : type.replace('_', ' ')}
                        </option>
                    ))}
                </select>

                <select
                    value={chainFilter}
                    onChange={(e) => setChainFilter(e.target.value)}
                    className="px-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
                >
                    {chains.map((chain) => (
                        <option key={chain} value={chain}>
                            {chain === 'all' ? 'All Chains' : chain}
                        </option>
                    ))}
                </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-slate-400 mb-4">
                Showing {filteredWallets.length} of {walletsData.length} wallets
            </div>

            {/* Wallet Grid */}
            <div className="grid md:grid-cols-2 gap-4">
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
                <div className="text-center py-12">
                    <p className="text-slate-400">No wallets found matching your filters</p>
                </div>
            )}
        </div>
    );
}
