import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import HeroProofBar from '@/components/hero/HeroProofBar';
import { TRIAL_KIOSK_URL } from '@/lib/links';

import styles from './Hero.module.css';

const HERO_VIDEO_SOURCES = {
  desktop:
    'https://res.cloudinary.com/dd9yqqsa4/video/upload/v1771944389/boxing_web_yfflyf.mp4',
  // Replace this with your portrait/mobile hero video when it is ready.
  mobile:
    'https://res.cloudinary.com/dd9yqqsa4/video/upload/v1771944389/boxing_web_yfflyf.mp4',
};

const starterHighlights = [
  {
    id: '01',
    title: 'First session clarity',
    detail: 'Use one trial visit to understand the space, class pace, and what fits you best.',
  },
  {
    id: '02',
    title: 'Skill-first classes',
    detail: 'Sessions are built around drills, technique, timing, and body control instead of random intensity.',
  },
  {
    id: '03',
    title: 'Weekday-friendly timings',
    detail: 'Morning and evening batches make it easier to stay regular around work, school, and commute.',
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source
          media="(max-width: 767px)"
          src={HERO_VIDEO_SOURCES.mobile}
          type="video/mp4"
        />
        <source
          media="(min-width: 768px)"
          src={HERO_VIDEO_SOURCES.desktop}
          type="video/mp4"
        />
      </video>

      <div className={styles.scrim} />

      <div className={styles.container}>
        <Reveal className={styles.copy} distance={30}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowPill}>Coach-Led Training</span>
            <p className={styles.eyebrowMeta}>Malad West • MMA • Calisthenics • Parkour</p>
          </div>
          <h1>Train Like An Athlete. Build Strength That Shows Up In Real Life.</h1>
          <p className={styles.lead}>
            Train MMA, calisthenics, and parkour in a space built for skill,
            discipline, and athletic development, whether you are starting from
            scratch or returning with experience.
          </p>

          <div className={styles.actions}>
            <a
              href={TRIAL_KIOSK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              Book A Trial
            </a>

            <Link href="/programs" className={styles.secondaryCta}>
              Explore Programs
            </Link>
          </div>

          <p className={styles.helper}>
            If you are new, one visit is usually enough to understand the
            environment and your best next step.
          </p>

          <HeroProofBar />
        </Reveal>

        <Reveal className={styles.panel} delay={140} distance={26}>
          <p className={styles.panelEyebrow}>Start With Clarity</p>
          <h2 className={styles.panelTitle}>The first few sessions should feel straightforward.</h2>

          <div className={styles.trackList}>
            {starterHighlights.map((item) => (
              <div key={item.title} className={styles.track}>
                <div className={styles.trackHead}>
                  <span className={styles.trackIndex}>{item.id}</span>
                  <span>{item.title}</span>
                </div>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>

          <div className={styles.panelFooter}>
            <div className={styles.metaList}>
              <span>6 AM - 10 PM</span>
              <span>Three training paths</span>
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
