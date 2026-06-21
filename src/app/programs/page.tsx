import ProgramsOverview from '@/components/ProgramsOverview';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'MMA & Calisthenics Programs | Evolve — Malad West Mumbai',
  description:
    'Explore MMA, calisthenics, and Zumba & Dance programs at Evolve in Malad West, Mumbai. Yoga is upcoming.',
  path: '/programs',
  keywords: [
    'MMA programs Malad West',
    'calisthenics programs Mumbai',
    'zumba dance classes Mumbai',
    'yoga upcoming Mumbai',
    'Evolve programs',
  ],
});

export default function ProgramsPage() {
  return <ProgramsOverview />;
}
