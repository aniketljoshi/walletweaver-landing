import { useState } from 'react';
import { Code2, Play, Copy, Check } from 'lucide-react';

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
        <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <Code2 className="w-6 h-6 text-emerald-400" />
                    <h1 className="text-2xl font-bold text-white">API Console</h1>
                </div>
                <p className="text-slate-400">Explore the WalletWeaver GraphQL API</p>
            </div>

            {/* GraphQL Playground */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* Query Panel */}
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
                    <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
                        <h2 className="font-semibold text-white">Query</h2>
                        <div className="flex gap-2">
                            {Object.keys(sampleQueries).map((key) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedQuery(key as keyof typeof sampleQueries)}
                                    className={`px-3 py-1 text-xs rounded-full transition-colors ${selectedQuery === key
                                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                            : 'bg-slate-700/50 text-slate-400 hover:text-white'
                                        }`}
                                >
                                    {key}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <pre className="p-4 text-sm text-slate-300 font-mono overflow-x-auto max-h-80">
                            <code>{sampleQueries[selectedQuery]}</code>
                        </pre>
                        <button
                            onClick={() => handleCopy(sampleQueries[selectedQuery])}
                            className="absolute top-2 right-2 p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors"
                        >
                            {copied ? (
                                <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                                <Copy className="w-4 h-4 text-slate-400" />
                            )}
                        </button>
                    </div>
                    <div className="p-4 border-t border-slate-700/50 flex justify-end">
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/30 transition-colors">
                            <Play className="w-4 h-4" />
                            Run Query
                        </button>
                    </div>
                </div>

                {/* Response Panel */}
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
                    <div className="p-4 border-b border-slate-700/50">
                        <h2 className="font-semibold text-white">Response</h2>
                    </div>
                    <pre className="p-4 text-sm text-emerald-400 font-mono overflow-x-auto max-h-96">
                        <code>{JSON.stringify(sampleResponse, null, 2)}</code>
                    </pre>
                </div>
            </div>

            {/* SDK Code Snippets */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
                    <h2 className="font-semibold text-white">SDK Examples</h2>
                    <div className="flex gap-2">
                        {Object.keys(codeSnippets).map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setSelectedLang(lang as keyof typeof codeSnippets)}
                                className={`px-3 py-1 text-xs rounded-full transition-colors capitalize ${selectedLang === lang
                                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                        : 'bg-slate-700/50 text-slate-400 hover:text-white'
                                    }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <pre className="p-4 text-sm text-slate-300 font-mono overflow-x-auto">
                        <code>{codeSnippets[selectedLang]}</code>
                    </pre>
                    <button
                        onClick={() => handleCopy(codeSnippets[selectedLang])}
                        className="absolute top-2 right-2 p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors"
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
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                    <div className="text-sm text-slate-400 mb-1">Endpoint</div>
                    <code className="text-sm text-white">https://api.walletweaver.com/graphql</code>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                    <div className="text-sm text-slate-400 mb-1">Rate Limit</div>
                    <span className="text-white">100 requests/min (Free)</span>
                </div>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-4">
                    <div className="text-sm text-slate-400 mb-1">SDKs Available</div>
                    <span className="text-white">TypeScript, Python, Go</span>
                </div>
            </div>
        </div>
    );
}
