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
          </div>

          <div className={styles.actions}>
            <Link href={BOOK_TRIAL_PATH} className={styles.primaryCta} target="_blank" rel="noopener noreferrer">
              Book A Trial
            </Link>

            <Link href="/programs" className={styles.secondaryCta}>
              Explore Programs
            </Link>
          </div>

          <HeroProofBar />
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
