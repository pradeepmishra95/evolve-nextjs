import InstaReels from '@/components/insta-reels/InstaReels';
import Testimonials from '@/components/testimonials/Testimonials';
import Excercises from '@/components/excersises/Excersises';
import About from '@/components/about/About';
import GoogleReviewsProvider from '@/components/google-reviews/GoogleReviewsProvider';
import MapSection from '@/components/mapsection/MapSection';
import Hero from '@/components/hero/Hero';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title:
    'Evolve Sports And Fitness Club | MMA & Calisthenics Training in Malad West, Mumbai',
  description:
    'Coach-led MMA and calisthenics training in Malad West, Mumbai with trial booking, schedules, coaches, and program details.',
  path: '/',
  keywords: [
    'MMA training Malad West',
    'calisthenics Malad West',
    'Malad West training center',
    'book MMA trial Mumbai',
  ],
});

export default function Home() {
  return (
    <GoogleReviewsProvider>
      <main className="relative">
        <Hero />
        <Excercises />
        <About />
        <Testimonials />
        <InstaReels />
        <MapSection />
      </main>
    </GoogleReviewsProvider>
  );
}
