import Reveal from '@/components/reveal/Reveal';

import styles from './ProofStrip.module.css';

const proofPoints = [
  {
    title: 'Coach-led batches',
    detail: 'Technique feedback and structured progressions in every session.',
  },
  {
    title: 'Beginner-friendly entry',
    detail: 'Clear onboarding for first-timers, professionals, and young athletes.',
  },
  {
    title: 'All-round training',
    detail: 'MMA, calisthenics, and parkour training under one roof.',
  },
  {
    title: 'Convenient location',
    detail: 'Near Lower Malad Metro Station in Malad West, Mumbai.',
  },
];

export default function ProofStrip() {
  return (
    <section className={styles.strip}>
      <div className={styles.inner}>
        {proofPoints.map((item, index) => (
          <Reveal
            key={item.title}
            className={styles.card}
            delay={index * 70}
            distance={20}
          >
            <p className={styles.title}>{item.title}</p>
            <p className={styles.detail}>{item.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
