import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import TokenCard from '../../components/demo/TokenCard';
import tokensData from '../../data/demo/tokens.json';

const chains = ['all', 'ethereum', 'solana', 'base', 'arbitrum', 'polygon'];

export default function DemoTokens() {
    const [search, setSearch] = useState('');
    const [chainFilter, setChainFilter] = useState('all');

    const filteredTokens = tokensData.filter((token) => {
        const matchesSearch =
            token.symbol.toLowerCase().includes(search.toLowerCase()) ||
            token.name.toLowerCase().includes(search.toLowerCase()) ||
            token.address.toLowerCase().includes(search.toLowerCase());

        const matchesChain = chainFilter === 'all' || token.chain === chainFilter;

        return matchesSearch && matchesChain;
    });

    return (
        <div className="p-2 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Token Intelligence</h1>
                    <p className="text-slate-400">Real-time narrative flow and accumulation signals</p>
                </div>
                <div className="text-right hidden md:block">
                    <div className="text-2xl font-bold text-white tracking-tight">{filteredTokens.length}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">Active Signals</div>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-neon-cyan transition-colors" />
                    <input
                        type="text"
                        placeholder="Search by symbol, name, or address..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all shadow-sm"
                    />
                </div>

                <div className="relative min-w-[200px]">
                    <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <select
                        value={chainFilter}
                        onChange={(e) => setChainFilter(e.target.value)}
                        className="w-full pl-11 pr-8 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all appearance-none cursor-pointer hover:bg-white/10"
                    >
                        {chains.map((chain) => (
                            <option key={chain} value={chain} className="bg-slate-900">
                                {chain === 'all' ? 'All Chains' : chain}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Token Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filteredTokens.map((token) => (
                    <TokenCard
                        key={token.address}
                        address={token.address}
                        symbol={token.symbol}
                        name={token.name}
                        chain={token.chain}
                        price={token.price}
                        change24h={token.change24h}
                        smartMoneyAccumulation={token.smartMoneyAccumulation}
                        narrativeTags={token.narrativeTags}
                    />
                ))}
            </div>

            {filteredTokens.length === 0 && (
                <div className="text-center py-20 bg-white/5 border border-dashed border-white/10 rounded-2xl">
                    <p className="text-slate-400">No tokens found matching your filters</p>
                    <button
                        onClick={() => { setSearch(''); setChainFilter('all'); }}
                        className="mt-4 text-neon-cyan hover:underline text-sm font-medium"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    );
}
