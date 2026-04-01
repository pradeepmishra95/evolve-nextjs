import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import HeroProofBar from '@/components/hero/HeroProofBar';
import { TRIAL_KIOSK_URL } from '@/lib/links';

import styles from './Hero.module.css';

const starterTracks = [
  {
    title: 'MMA',
    detail: 'Striking, conditioning, and real skill-based combat training.',
  },
  {
    title: 'Calisthenics',
    detail: 'Bodyweight strength, control, and athletic movement progressions.',
  },
  {
    title: 'Parkour',
    detail: 'Jumps, vaults, balance, and movement confidence in one track.',
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        src="https://res.cloudinary.com/dd9yqqsa4/video/upload/v1771944389/boxing_web_yfflyf.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />

      <div className={styles.scrim} />

      <div className={styles.container}>
        <Reveal className={styles.copy} distance={30}>
          <p className={styles.eyebrow}>Malad West | MMA | Calisthenics | Parkour</p>
          <h1>Train Like An Athlete. Build Strength That Shows Up In Real Life.</h1>
          <p className={styles.lead}>
            Coach-led MMA, calisthenics, and parkour for beginners, working
            professionals, and anyone who wants athletic training with clear
            progression.
          </p>

          <div className={styles.actions}>
            <a
              href={TRIAL_KIOSK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              Book A Free Trial
            </a>

            <Link href="/programs" className={styles.secondaryCta}>
              Explore Programs
            </Link>
          </div>

          <p className={styles.helper}>
            New to training? Book a trial through the form and we will guide
            your first class.
          </p>

          <HeroProofBar />
        </Reveal>

        <Reveal className={styles.panel} delay={140} distance={26}>
          <p className={styles.panelEyebrow}>Choose your starting point</p>
          <h2 className={styles.panelTitle}>
            Three flagship programs. One coach-led training space.
          </h2>

          <div className={styles.trackList}>
            {starterTracks.map((item) => (
              <div key={item.title} className={styles.track}>
                <span>{item.title}</span>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>

          <div className={styles.panelFooter}>
            <div className={styles.metaList}>
              <span>6 AM - 10 PM</span>
              <span>Free trial first</span>
              <span>Malad West</span>
            </div>

            <Link href="/timings" className={styles.panelLink}>
              See Timings
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
