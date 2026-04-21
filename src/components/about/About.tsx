import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import { BOOK_TRIAL_PATH } from '@/lib/links';

import styles from './About.module.css';

const pillars = [
  'Sessions are built around technique, timing, coordination, and control.',
  'Combat training and bodyweight strength are core programs; other movement offerings arrive soon.',
  'The weekly schedule works for students, professionals, and parents trying to stay regular.',
];

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
            Evolve is for people who want to learn something while they train:
            how to strike, move, climb, land, and build strength with better
            body control over time.
          </p>

          <p>
            Instead of selling intensity alone, the space brings together MMA
            and calisthenics in a more disciplined format than a generic
            open-floor setup usually offers. Jumba and Yoga are coming soon.
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
              src="https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771045740/logo_p9ooao.png"
              alt="Evolve MMA & Calisthenics logo"
              width={96}
              height={96}
            />
          </div>

          <h3>What people tend to notice early</h3>

          <ul className={styles.pillarList}>
            {pillars.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
