import ProgramsOverview from '@/components/ProgramsOverview';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'MMA & Calisthenics Programs | Evolve — Malad West Mumbai',
  description:
    'Explore coach-led MMA and calisthenics programs at Evolve in Malad West, Mumbai.',
  path: '/programs',
  keywords: [
    'MMA programs Malad West',
    'calisthenics programs Mumbai',
    'Evolve programs',
  ],
});

export default function ProgramsPage() {
  return <ProgramsOverview />;
}
