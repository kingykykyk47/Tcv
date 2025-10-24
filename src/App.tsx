import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Steps } from './components/Steps';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Base background */}
      <div className="fixed inset-0 bg-black pointer-events-none" />
      
      {/* Grid pattern */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Radial gradient spots */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[110px]" />
      </div>
      
      {/* Vignette effect */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-50 pointer-events-none" />

      <Navigation />
      
      <div className="relative z-10">
        <Hero />
        <Stats />
        <Features />
        <Steps />
        <Pricing />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
