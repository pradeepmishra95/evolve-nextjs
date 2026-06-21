import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import { LOGO_IMAGE_ALT, LOGO_IMAGE_PATH } from '@/lib/brand';
import { BOOK_TRIAL_PATH } from '@/lib/links';

import styles from './About.module.css';

const aboutStats = [
  { value: '2', label: 'core training paths' },
  { value: '6 AM - 10 PM', label: 'weekday-friendly training window' },
  { value: '1 trial visit', label: 'before choosing your next step' },
];

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.shell}>
        <Reveal className={styles.copy} distance={26}>
          <p className={styles.eyebrow}>Why Evolve</p>
          <h2>For people who want purposeful training, not random workouts.</h2>

          <p className={styles.lead}>
            Evolve brings MMA and calisthenics into a more guided format for
            people who want real skill, strength, and body control.
          </p>

          <div className={styles.statGrid}>
            {aboutStats.map((item) => (
              <div key={item.label} className={styles.statCard}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

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
          <div className={styles.logoWrap}>
            <Image
              src={LOGO_IMAGE_PATH}
              alt={LOGO_IMAGE_ALT}
              width={96}
              height={96}
            />
          </div>

          <h3>What stands out early</h3>
          <p className={styles.panelNote}>
            Technique comes first, the schedule is workable, and the classes
            feel more guided than generic.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
