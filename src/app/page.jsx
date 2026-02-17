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
      <InstaReels />
      <Excercises />
      <Testimonials />
      <About />
      <MapSection />
    </main>
  );
}

