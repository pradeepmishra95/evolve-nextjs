import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import HeroProofBar from '@/components/hero/HeroProofBar';
import { BOOK_TRIAL_PATH } from '@/lib/links';

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
            <p className={styles.eyebrowMeta}>Malad West • MMA • Calisthenics • Jumba (upcoming) • Yoga (upcoming)</p>
          </div>
          <p className={styles.tagline}>MMA. Calisthenics. Jumba. Yoga.</p>
          <h1>Train with structure, skill, and a coaching standard you can feel from day one.</h1>
          <p className={styles.lead}>
            Evolve is a high-energy training center in Malad West for people who want
            real combat skill, bodyweight strength, and movement training instead of
            generic workouts that are easy to quit.
          </p>

          <div className={styles.actions}>
            <Link href={BOOK_TRIAL_PATH} className={styles.primaryCta} target="_blank" rel="noopener noreferrer">
              Book A Trial
            </Link>

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

      <div className={styles.scrollCue} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.scrollMouse}>
          <span />
        </div>
      </div>
    </section>
  );
}
