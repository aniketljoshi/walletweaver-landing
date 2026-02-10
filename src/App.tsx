import FloatingNavbar from './components/FloatingNavbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DemoPreview from './components/DemoPreview';
import Stats from './components/Stats';
import MultiChain from './components/MultiChain';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-void-deep">
      <CustomCursor />
      <FloatingNavbar />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <HowItWorks />
        <DemoPreview />
        <Stats />
        <MultiChain />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
