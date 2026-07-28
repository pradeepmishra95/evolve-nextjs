import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import { BOOK_TRIAL_PATH } from '@/lib/links';

import styles from './About.module.css';

const benefits = [
  'Technique that carries into every session',
  'Morning and evening batches',
  'A trial before you commit',
];

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.shell}>
        <Reveal className={styles.copy} distance={26}>
          <p className={styles.eyebrow}>Why Evolve</p>
          <h2>For people who want purposeful training, not random workouts.</h2>

          <p className={styles.lead}>
            Build practical skill, strength, and body control through MMA and
            calisthenics.
          </p>

          <div className={styles.actions}>
            <Link href="/aboutus" className={styles.secondaryLink}>
              Learn More About The Center
            </Link>

            <Link href={BOOK_TRIAL_PATH} className={styles.primaryLink} target="_blank" rel="noopener noreferrer">
              Book A Trial
            </Link>
          </div>
        </Reveal>

        <Reveal className={styles.panel} delay={120} distance={24}>
          <h3>Why train here</h3>
          <ul className={styles.pillarList}>
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
