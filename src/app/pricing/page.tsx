import { notFound } from 'next/navigation';

import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Pricing | Evolve Sports And Fitness Club',
  description:
    'Contact Evolve Sports And Fitness Club for current MMA and calisthenics membership options in Malad West, Mumbai.',
  path: '/pricing',
  keywords: [
    'MMA pricing Malad West',
    'calisthenics membership Mumbai',
    'Evolve pricing',
  ],
});

export default function PricingPage() {
  notFound();
}
