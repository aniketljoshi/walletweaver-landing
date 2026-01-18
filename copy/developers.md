# WalletWeaver — Developers

## Hero Section

### Headline
**Build On-Chain Intelligence Into Your Products**

### Subheadline
One GraphQL API. Five chains. Real-time wallet clustering, smart-money scoring, and entity resolution — delivered through production-ready SDKs for TypeScript, Python, and Go.

### CTA Buttons
- **Primary**: Get Your API Key — Free
- **Secondary**: Explore Documentation

---

## Why Developers Choose WalletWeaver

### GraphQL-First API
Query exactly the data you need with our flexible GraphQL schema. Persisted queries for production performance. Interactive playground for rapid development.

### Multi-Language SDKs
Production-tested SDKs for TypeScript, Python, and Go. Type-safe clients, automatic retries, and built-in rate limiting. Ship faster with less boilerplate.

### Real-Time Webhooks
Subscribe to wallet activity, token events, and smart-money moves. Sub-second delivery to your endpoints. Configurable filters and transformation rules.

### Enterprise Infrastructure
99.9% uptime SLA. Kafka-powered ingestion. Redshift-backed analytics. SOC 2 compliant. Built for production workloads from day one.

---

## SDK Quick Start

### TypeScript
```typescript
import { WalletWeaver } from '@walletweaver/sdk';

const client = new WalletWeaver({ apiKey: process.env.WW_API_KEY });

// Get wallet entity and smart-money score
const wallet = await client.wallets.get('0x1234...abcd');
console.log(wallet.entity.name, wallet.smartMoneyScore);

// Subscribe to real-time alerts
client.alerts.subscribe({
  walletAddress: '0x1234...abcd',
  events: ['transfer', 'swap'],
  callback: (event) => console.log(event)
});
```

### Python
```python
from walletweaver import WalletWeaver

client = WalletWeaver(api_key=os.environ['WW_API_KEY'])

# Get wallet entity and smart-money score
wallet = client.wallets.get('0x1234...abcd')
print(wallet.entity.name, wallet.smart_money_score)

# Query smart money leaderboard
leaders = client.leaderboards.get(
    chain='ethereum',
    metric='roi_30d',
    limit=100
)
```

### Go
```go
import "github.com/walletweaver/walletweaver-go"

client := walletweaver.NewClient(os.Getenv("WW_API_KEY"))

// Get wallet entity and smart-money score
wallet, _ := client.Wallets.Get(ctx, "0x1234...abcd")
fmt.Println(wallet.Entity.Name, wallet.SmartMoneyScore)

// Stream real-time events
stream, _ := client.Events.Stream(ctx, walletweaver.StreamOptions{
    Chains: []string{"ethereum", "base"},
    Events: []string{"large_transfer"},
})
```

---

## GraphQL API Features

### Wallet Intelligence
```graphql
query WalletProfile($address: String!) {
  wallet(address: $address) {
    address
    chain
    entity {
      id
      name
      type
      clusteredWallets
    }
    smartMoneyScore
    metrics {
      totalValue
      pnl30d
      winRate
      avgHoldTime
    }
  }
}
```

### Token Analytics
```graphql
query TokenHolders($token: String!) {
  token(address: $token) {
    topHolders(limit: 50) {
      wallet {
        address
        smartMoneyScore
      }
      balance
      percentOwned
      firstPurchase
    }
    smartMoneyConcentration
    narrativeTags
  }
}
```

### Real-Time Subscriptions
```graphql
subscription SmartMoneyAlerts($minScore: Int!) {
  walletActivity(minSmartMoneyScore: $minScore) {
    wallet {
      address
      entity {
        name
      }
    }
    event {
      type
      token
      amount
      timestamp
    }
  }
}
```

---

## Integration Guides

### Trading Bots
Connect WalletWeaver to your trading infrastructure via webhooks. Copy smart-money trades in real-time with configurable filters and position sizing rules.

### Analytics Dashboards
Embed wallet intelligence into your analytics stack. Pre-built components for React, Vue, and Svelte. Data export to Redshift, BigQuery, and Snowflake.

### Compliance Systems
Integrate wallet risk scoring into your KYC/AML workflows. Entity resolution for counterparty identification. Audit-ready transaction trails.

### Research Tools
Build custom datasets for on-chain research. Historical data access via batch exports. Jupyter notebook templates included.

---

## Pricing for Developers

| Tier | API Calls | Features | Price |
|------|-----------|----------|-------|
| **Free** | 1,000/month | 5 chains, TypeScript SDK, Community support | $0/mo |
| **Pro** | 100,000/month | All SDKs, Real-time alerts, Priority support | $199/mo |
| **Enterprise** | Unlimited | Custom SLA, Self-hosted option, Dedicated support | Custom |

---

## Resources

- **Documentation**: Comprehensive guides and API reference
- **GraphQL Playground**: Interactive query builder
- **GitHub**: Open-source SDKs and example projects
- **Discord**: Developer community and support
- **Status Page**: Real-time system status

---

## CTA Section

### Ready to Build?
Get your API key in 30 seconds. No credit card required.

**Get Started Free →**

Questions? Contact us at developers@walletweaver.com
