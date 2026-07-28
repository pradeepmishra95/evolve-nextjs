import Reveal from '@/components/reveal/Reveal';
import { buildMetadata } from '@/lib/metadata';

import styles from './coaches.module.css';

export const metadata = buildMetadata({
  title: 'Coaches | Evolve Sports And Fitness Club',
  description:
    'Learn about the MMA and calisthenics coaching focus at Evolve Sports And Fitness Club in Malad West, Mumbai.',
  path: '/coaches',
  keywords: [
    'MMA coach Malad West',
    'calisthenics coach Mumbai',
    'zumba dance coach Mumbai',
    'yoga coach Mumbai',
    'Evolve coaches',
  ],
});

const values = [
  {
    title: 'Technique-first teaching',
    detail: 'Clear explanation and useful correction.',
  },
  {
    title: 'Discipline-specific focus',
    detail: 'Training built for each discipline.',
  },
  {
    title: 'Trial-friendly',
    detail: 'Experience the class before joining.',
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
              Meet the people focused on your technique, confidence, and progress.
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
      </div>
    </main>
  );
}
