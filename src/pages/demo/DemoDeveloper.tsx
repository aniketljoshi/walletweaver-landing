import { useState } from 'react';
import { Code2, Play, Copy, Check, Terminal, Database, Server } from 'lucide-react';

const sampleQueries = {
    wallet: `query WalletProfile($address: String!) {
  wallet(address: $address) {
    address
    ensName
    entity {
      id
      name
      type
    }
    smartMoneyScore
    metrics {
      totalValue
      pnl30d
      roi30d
      winRate
    }
  }
}`,
    token: `query TokenHolders($address: String!) {
  token(address: $address) {
    symbol
    name
    price
    topHolders(limit: 10) {
      wallet {
        address
        smartMoneyScore
      }
      balance
      percentOwned
    }
    smartMoneyAccumulation
  }
}`,
    leaderboard: `query SmartMoneyLeaderboard {
  leaderboard(
    timeRange: "30d"
    sortBy: "roi"
    limit: 20
  ) {
    wallets {
      address
      label
      smartMoneyScore
      roi30d
      pnl30d
      winRate
    }
  }
}`,
};

const sampleResponse = {
    data: {
        wallet: {
            address: "0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503",
            ensName: null,
            entity: {
                id: "ent_001",
                name: "Smart Money Whale #1",
                type: "whale"
            },
            smartMoneyScore: 92,
            metrics: {
                totalValue: 89000000,
                pnl30d: 8920000,
                roi30d: 156.8,
                winRate: 82
            }
        }
    }
};

const codeSnippets = {
    typescript: `import { WalletWeaver } from '@walletweaver/sdk';

const client = new WalletWeaver({ 
  apiKey: process.env.WW_API_KEY 
});

const wallet = await client.wallets.get(
  '0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503'
);

console.log(wallet.smartMoneyScore);
// Output: 92`,
    python: `from walletweaver import WalletWeaver

client = WalletWeaver(api_key=os.environ['WW_API_KEY'])

wallet = client.wallets.get(
    '0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503'
)

print(wallet.smart_money_score)
# Output: 92`,
    go: `import "github.com/walletweaver/walletweaver-go"

client := walletweaver.NewClient(
    os.Getenv("WW_API_KEY"),
)

wallet, _ := client.Wallets.Get(
    ctx, 
    "0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503",
)

fmt.Println(wallet.SmartMoneyScore)
// Output: 92`,
};

export default function DemoDeveloper() {
    const [selectedQuery, setSelectedQuery] = useState<keyof typeof sampleQueries>('wallet');
    const [selectedLang, setSelectedLang] = useState<keyof typeof codeSnippets>('typescript');
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="p-2 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight mb-2 flex items-center gap-3">
                        <Terminal className="w-8 h-8 text-neon-emerald" />
                        Neural API Interface
                    </h1>
                    <p className="text-slate-400">Direct neural-link to on-chain intelligence</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    SYSTEM ONLINE
                </div>
            </div>

            {/* GraphQL Playground */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* Query Panel */}
                <div className="bg-void-deep border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
                    <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5 backdrop-blur-md">
                        <h2 className="font-bold text-white text-sm tracking-widest uppercase">Query Builder</h2>
                        <div className="flex gap-2 bg-black/40 p-1 rounded-lg">
                            {Object.keys(sampleQueries).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedQuery(key as keyof typeof sampleQueries)}
                                    className={`px-3 py-1 text-[10px] font-bold uppercase rounded-md transition-all ${selectedQuery === key
                                        ? 'bg-neon-cyan/20 text-neon-cyan shadow-[0_0_10px_rgba(0,229,255,0.2)]'
                                        : 'text-slate-500 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {key}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="relative flex-1 bg-[#0d0e12]">
                        <pre className="p-6 text-sm text-blue-300 font-mono overflow-auto h-full scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            <code>{sampleQueries[selectedQuery]}</code>
                        </pre>
                        <button
                            onClick={() => handleCopy(sampleQueries[selectedQuery])}
                            className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5"
                        >
                            {copied ? (
                                <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                                <Copy className="w-4 h-4 text-slate-400" />
                            )}
                        </button>
                    </div>
                    <div className="p-4 border-t border-white/5 bg-white/5 backdrop-blur-md flex justify-end">
                        <button className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                            <Play className="w-4 h-4" />
                            Execute
                        </button>
                    </div>
                </div>

                {/* Response Panel */}
                <div className="bg-void-deep border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
                    <div className="p-4 border-b border-white/5 bg-white/5 backdrop-blur-md flex items-center justify-between">
                        <h2 className="font-bold text-white text-sm tracking-widest uppercase">JSON Response</h2>
                        <span className="text-xs font-mono text-emerald-400">200 OK • 24ms</span>
                    </div>
                    <pre className="p-6 text-sm text-emerald-400 font-mono overflow-auto h-full scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent bg-[#0d0e12]">
                        <code>{JSON.stringify(sampleResponse, null, 2)}</code>
                    </pre>
                </div>
            </div>

            {/* SDK Code Snippets */}
            <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                    <h2 className="font-bold text-white text-sm tracking-widest uppercase flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-neon-violet" />
                        SDK Integration
                    </h2>
                    <div className="flex gap-2">
                        {Object.keys(codeSnippets).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setSelectedLang(lang as keyof typeof codeSnippets)}
                                className={`px-4 py-1.5 text-xs font-bold uppercase rounded-lg transition-all ${selectedLang === lang
                                    ? 'bg-neon-violet/20 text-neon-violet border border-neon-violet/30'
                                    : 'bg-white/5 text-slate-400 border border-transparent hover:text-white hover:border-white/10'
                                    }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="relative bg-black/40">
                    <pre className="p-6 text-sm text-slate-300 font-mono overflow-x-auto">
                        <code>{codeSnippets[selectedLang]}</code>
                    </pre>
                    <button
                        onClick={() => handleCopy(codeSnippets[selectedLang])}
                        className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5"
                    >
                        {copied ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                            <Copy className="w-4 h-4 text-slate-400" />
                        )}
                    </button>
                </div>
            </div>

            {/* API Info */}
            <div className="mt-8 grid sm:grid-cols-3 gap-5">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-neon-cyan/20 text-neon-cyan group-hover:scale-110 transition-transform">
                            <Server className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Endpoint</div>
                    </div>
                    <code className="text-sm text-white font-mono block bg-black/40 p-2 rounded border border-white/5 truncate">
                        https://api.walletweaver.com/graphql
                    </code>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-neon-amber/20 text-neon-amber group-hover:scale-110 transition-transform">
                            <Terminal className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Rate Limit</div>
                    </div>
                    <span className="text-white font-bold">100 req/min (Free Tier)</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-neon-violet/20 text-neon-violet group-hover:scale-110 transition-transform">
                            <Database className="w-5 h-5" />
                        </div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">SDK Support</div>
                    </div>
                    <span className="text-white font-bold">TS, Python, Go, Rust</span>
                </div>
            </div>
        </div>
    );
}
