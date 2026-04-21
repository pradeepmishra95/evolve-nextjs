import ProofStrip from '@/components/proof-strip/ProofStrip';
import TrialJourney from '@/components/trial-journey/TrialJourney';
import InstaReels from '@/components/insta-reels/InstaReels';
import Testimonials from '@/components/testimonials/Testimonials';
import Excercises from '@/components/excersises/Excersises';
import ProgressShowcase from '@/components/ProgressShowcase';
import CommunitySection from '@/components/CommunitySection';
import About from '@/components/about/About';
import MapSection from '@/components/mapsection/MapSection';
import Hero from '@/components/hero/Hero';
import { PROGRESS_ENTRIES } from '@/data/progress';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title:
    'Evolve MMA & Calisthenics | MMA & Calisthenics Training in Malad West, Mumbai',
  description:
    'Coach-led MMA and calisthenics training in Malad West, Mumbai with trial booking, schedules, coaches, and program details. Jumba and Yoga are upcoming programs.',
  path: '/',
  keywords: [
    'MMA training Malad West',
    'calisthenics Malad West',
    'jumba upcoming',
    'yoga upcoming',
    'Malad West training center',
    'book MMA trial Mumbai',
  ],
});

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <InstaReels />
      <ProofStrip />
      <About />
      <Excercises />
      {/* TrainingGallery hidden for now; bring it back here when ready to reveal. */}
      <Testimonials />
      <ProgressShowcase entries={PROGRESS_ENTRIES} />
      <TrialJourney />
      <MapSection />
      <CommunitySection />
    </main>
  );
}
