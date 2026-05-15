import { Hero } from './components/Hero';
import { SkillsMarquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { StageSection } from './components/StageSection';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#f0ece4] relative">
      <main>
        <Hero />
        <SkillsMarquee />
        <About />
        <Services />
        <Gallery />
        <StageSection />
        <BookingCTA />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
