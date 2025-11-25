import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import CoreValue from './components/CoreValue';
import ProductGrid from './components/ProductGrid';
import HowItWorks from './components/HowItWorks';
import TargetUsers from './components/TargetUsers';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <TrustStrip />
      <CoreValue />
      <ProductGrid />
      <HowItWorks />
      <TargetUsers />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
