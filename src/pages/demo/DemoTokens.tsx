import { useState } from 'react';
import { Search } from 'lucide-react';
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
        <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-white mb-2">Token Explorer</h1>
                <p className="text-slate-400">Track smart money accumulation across tokens</p>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by symbol, name, or address..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50"
                    />
                </div>

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
                Showing {filteredTokens.length} of {tokensData.length} tokens
            </div>

            {/* Token Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <div className="text-center py-12">
                    <p className="text-slate-400">No tokens found matching your filters</p>
                </div>
            )}
        </div>
    );
}
