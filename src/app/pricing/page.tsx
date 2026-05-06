import { notFound } from 'next/navigation';

import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Pricing | Evolve Sports And Fitness Club',
  description:
    'See placeholder membership pricing for MMA and calisthenics at Evolve Sports And Fitness Club in Malad West, Mumbai. Jumba & Yoga are upcoming.',
  path: '/pricing',
  keywords: [
    'MMA pricing Malad West',
    'calisthenics membership Mumbai',
    'jumba pricing Mumbai',
    'yoga pricing Mumbai',
    'Evolve pricing',
  ],
});

export default function PricingPage() {
  notFound();
}
