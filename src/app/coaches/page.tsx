import CoachCard from '@/components/CoachCard';
import Reveal from '@/components/reveal/Reveal';
import { COACHES } from '@/data/coaches';
import { buildMetadata } from '@/lib/metadata';

import styles from './coaches.module.css';

export const metadata = buildMetadata({
  title: 'Coaches | Evolve MMA & Calisthenics',
  description:
    'Meet the MMA and calisthenics coaches at Evolve in Malad West, Mumbai. Parkour has been retired on the site.',
  path: '/coaches',
  keywords: [
    'MMA coach Malad West',
    'calisthenics coach Mumbai',
    'jumba coach Mumbai',
    'yoga coach Mumbai',
    'Evolve coaches',
  ],
});

const values = [
  {
    title: 'Technique-first teaching',
    detail: 'The aim is to explain, correct, and progress you instead of just running hard sessions.',
  },
  {
    title: 'Different specialists',
    detail: 'Each training path has its own coach profile so the learning stays discipline-specific.',
  },
  {
    title: 'Trial-friendly',
    detail: 'You can book directly with a coach preference if you already know who you want to train with.',
  },
];

export default function CoachesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <Reveal className={styles.hero} distance={24}>
          <div className={styles.copy}>
            <p className="section-eyebrow">Coaches</p>
            <h1 className="section-heading">Meet the team behind the training floor.</h1>
            <p className="section-lead">
              Coaching quality is what turns curiosity into consistency. These placeholder profiles
              show how each discipline at Evolve can have a visible guide behind it.
            </p>
          </div>
        </Reveal>

        <div className={styles.valueGrid}>
          {values.map((value) => (
            <div key={value.title} className={styles.valueCard}>
              <strong>{value.title}</strong>
              <p>{value.detail}</p>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {COACHES.map((coach) => (
            <CoachCard key={coach.slug} coach={coach} />
          ))}
        </div>
      </div>
    </main>
  );
}
