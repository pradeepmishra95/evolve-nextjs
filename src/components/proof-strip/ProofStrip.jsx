import Reveal from '@/components/reveal/Reveal';

import styles from './ProofStrip.module.css';

const proofPoints = [
  {
    title: 'Skill-first sessions',
    detail: 'Pads, grappling, holds, vaults, and drills are taught with clear class structure.',
  },
  {
    title: '6 AM - 10 PM',
    detail: 'Train before work, after work, or around school and college routines.',
  },
  {
    title: 'Near Lower Malad Metro',
    detail: 'Easy to reach before work, after work, or as a planned weekend visit.',
  },
  {
    title: 'Trial before joining',
    detail: 'Use one visit to feel the floor, pace, and environment for yourself.',
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
