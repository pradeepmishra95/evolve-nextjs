import ProofStrip from '@/components/proof-strip/ProofStrip';
import TrialJourney from '@/components/trial-journey/TrialJourney';
import InstaReels from '@/components/insta-reels/InstaReels';
import Testimonials from '@/components/testimonials/Testimonials';
import Excercises from '@/components/excersises/Excersises';
import About from '@/components/about/About';
import MapSection from '@/components/mapsection/MapSection';
import Hero from '@/components/hero/Hero';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ProofStrip />
      <About />
      <Excercises />
      <InstaReels />
      <Testimonials />
      <TrialJourney />
      <MapSection />
    </main>
  );
}
