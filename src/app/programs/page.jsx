import ProgramsPage from '@/components/programs-page/ProgramsPage';

export const metadata = {
  title: 'MMA, Calisthenics & Parkour Programs in Malad West',
  description:
    'Explore the three flagship programs at Evolve MMA & Calisthenics in Malad West, Mumbai: MMA, calisthenics, and parkour.',
  alternates: {
    canonical: '/programs',
  },
  keywords: [
    'MMA classes Malad West',
    'calisthenics classes Mumbai',
    'parkour classes Mumbai',
    'parkour training Malad West',
    'MMA and calisthenics training center Mumbai',
  ],
  openGraph: {
    title: 'Programs | Evolve MMA & Calisthenics',
    description:
      'See the three current programs at Evolve in Malad West: MMA, calisthenics, and parkour.',
    url: '/programs',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which program is best for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The best starting point depends on whether you are drawn to combat training, bodyweight strength, or movement practice. A trial makes that choice easier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer a trial before joining?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Evolve offers a trial so new visitors can experience the class rhythm and decide with real context before joining.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kinds of training programs are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The current flagship programs at Evolve are MMA, calisthenics, and parkour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which three programs are currently available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Right now the public-facing programs are Mixed Martial Arts, Calisthenics, and Parkour.',
      },
    },
  ],
};

export default function Programs() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ProgramsPage />
    </>
  );
}
