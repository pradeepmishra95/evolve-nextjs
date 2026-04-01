import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import { TRIAL_KIOSK_URL } from '@/lib/links';

import styles from './About.module.css';

const pillars = [
  'Programs designed for real progression, not random daily workouts.',
  'Technique, mobility, and body control built alongside strength and conditioning.',
  'An environment that works for beginners, athletes, and working professionals.',
];

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.shell}>
        <Reveal className={styles.copy} distance={26}>
          <p className={styles.eyebrow}>About Evolve</p>
          <h2>Built for people who want more than generic fitness.</h2>

          <p className={styles.lead}>
            Evolve MMA &amp; Calisthenics is a performance-driven training space
            where strength, mobility, discipline, and athletic movement are developed
            together.
          </p>

          <p>
            The approach is simple: coach-led sessions, clear progressions, and
            training that improves how you move, perform, and carry yourself
            outside the gym too.
          </p>

          <div className={styles.actions}>
            <Link href="/aboutus" className={styles.secondaryLink}>
              Learn More About The Gym
            </Link>

            <a
              href={TRIAL_KIOSK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              Book A Trial
            </a>
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

          <h3>What makes the training experience different</h3>

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
