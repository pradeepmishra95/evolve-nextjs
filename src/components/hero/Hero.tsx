import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import HeroProofBar from '@/components/hero/HeroProofBar';
import { BOOK_TRIAL_PATH } from '@/lib/links';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroMedia} aria-hidden="true">
        <div className={`${styles.heroImage} ${styles.mmaCoachingImage}`} />
        <div className={`${styles.heroImage} ${styles.calisthenicsCoachingImage}`} />
        <div className={`${styles.heroImage} ${styles.calisthenicsCommunityImage}`} />
        <div className={`${styles.heroImage} ${styles.mmaClassImage}`} />
      </div>

      <div className={styles.scrim} />

      <div className={styles.container}>
        <Reveal className={styles.copy} distance={30}>
          <p className={styles.tagline}>MMA · Calisthenics · Dance</p>

          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowPill}>Coach-Led Training</span>
          </div>

          <h1 className={styles.title}>
            Build skill. Gain strength. <span>Move with confidence.</span>
          </h1>

          <p className={styles.lead}>
            Purposeful MMA, calisthenics, and dance training for every starting
            point—right here in Malad West.
          </p>

          <div className={styles.actions}>
            <Link href={BOOK_TRIAL_PATH} className={styles.primaryCta} target="_blank" rel="noopener noreferrer">
              Book A Trial
            </Link>

            <Link href="/programs" className={styles.secondaryCta}>
              Explore Programs
            </Link>
          </div>

          <div className={styles.helper} aria-label="Training benefits">
            <span>Beginner-friendly coaching</span>
            <span>Morning and evening batches</span>
            <span>Trial before joining</span>
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
