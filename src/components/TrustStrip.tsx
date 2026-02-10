import { InfiniteMovingCards } from './ui/InfiniteMovingCards';

const chainLogosRow1 = [
  { quote: '', name: 'Ethereum', title: '', dot: '#627EEA' },
  { quote: '', name: 'Solana', title: '', dot: '#14F195' },
  { quote: '', name: 'Base', title: '', dot: '#0052FF' },
  { quote: '', name: 'Arbitrum', title: '', dot: '#96BEDC' },
  { quote: '', name: 'Polygon', title: '', dot: '#8247E5' },
  { quote: '', name: 'Optimism', title: '', dot: '#FF0420' },
  { quote: '', name: 'Avalanche', title: '', dot: '#E84142' },
  { quote: '', name: 'BNB Chain', title: '', dot: '#F0B90B' },
];

const chainLogosRow2 = [
  { quote: '', name: 'Optimism', title: '', dot: '#FF0420' },
  { quote: '', name: 'Avalanche', title: '', dot: '#E84142' },
  { quote: '', name: 'BNB Chain', title: '', dot: '#F0B90B' },
  { quote: '', name: 'Ethereum', title: '', dot: '#627EEA' },
  { quote: '', name: 'Solana', title: '', dot: '#14F195' },
  { quote: '', name: 'Base', title: '', dot: '#0052FF' },
  { quote: '', name: 'Arbitrum', title: '', dot: '#96BEDC' },
  { quote: '', name: 'Polygon', title: '', dot: '#8247E5' },
];

// Custom renderer items for the chain badges
const row1Items = chainLogosRow1.map((c) => ({
  quote: c.name,
  name: c.name,
  title: c.dot,
}));

const row2Items = chainLogosRow2.map((c) => ({
  quote: c.name,
  name: c.name,
  title: c.dot,
}));

export default function TrustStrip() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Fade masks on edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-void-deep to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-void-deep to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <p className="text-center text-xs font-medium uppercase tracking-widest text-slate-500 mb-8">
          Trusted by Builders
        </p>

        {/* Row 1 — scrolls left */}
        <div className="mb-4">
          <InfiniteMovingCards
            items={row1Items}
            direction="left"
            speed="slow"
            className="[&_li]:w-auto [&_li]:px-5 [&_li]:py-3 [&_li]:rounded-full [&_li]:border-white/[0.06] [&_li]:bg-white/[0.02]"
          />
        </div>

        {/* Row 2 — scrolls right */}
        <div>
          <InfiniteMovingCards
            items={row2Items}
            direction="right"
            speed="slow"
            className="[&_li]:w-auto [&_li]:px-5 [&_li]:py-3 [&_li]:rounded-full [&_li]:border-white/[0.06] [&_li]:bg-white/[0.02]"
          />
        </div>
      </div>
    </section>
  );
}
