import ProgramsOverview from '@/components/ProgramsOverview';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'MMA & Calisthenics Programs | Evolve — Malad West Mumbai',
  description:
    'Explore MMA and calisthenics programs at Evolve in Malad West, Mumbai. Jumba and Yoga are upcoming programs.',
  path: '/programs',
  keywords: [
    'MMA programs Malad West',
    'calisthenics programs Mumbai',
    'jumba upcoming Mumbai',
    'yoga upcoming Mumbai',
    'Evolve programs',
  ],
});

export default function ProgramsPage() {
  return <ProgramsOverview />;
}
