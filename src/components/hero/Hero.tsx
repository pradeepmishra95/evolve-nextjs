import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import HeroProofBar from '@/components/hero/HeroProofBar';
import { BOOK_TRIAL_PATH } from '@/lib/links';

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroMedia} aria-hidden="true">
        <div className={`${styles.heroImage} ${styles.calisthenicsImage}`} />
        <div className={`${styles.heroImage} ${styles.mmaImage}`} />
      </div>

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
