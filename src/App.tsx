import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreValue from './components/CoreValue';
import ProductGrid from './components/ProductGrid';
import HowItWorks from './components/HowItWorks';
import TargetUsers from './components/TargetUsers';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <div className="min-h-screen bg-void-deep">
      <CustomCursor />
      <Navbar />
      <PageTransition className="flex-1">
        <main>
          <Hero />
          <CoreValue />
          <ProductGrid />
          <HowItWorks />
          <TargetUsers />
          <Pricing />
          <FAQ />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}

export default App;
