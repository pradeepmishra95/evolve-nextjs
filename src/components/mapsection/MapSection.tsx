import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import { BOOK_TRIAL_PATH, GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL } from '@/lib/links';

import styles from './MapSection.module.css';

export default function MapSection({
  title = 'The space makes more sense once you see it in person.',
  copy = 'Walk in, look at the floor, and get a better feel for the setup, class rhythm, and location than any page can give you.',
}) {
  return (
    <section className={styles.mapSection}>
      <div className={styles.shell}>
        <Reveal className={styles.copy} distance={22}>
          <p className={styles.eyebrow}>Visit The Center</p>
          <h2>{title}</h2>
          <p>{copy}</p>

          <div className={styles.actions}>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              Open In Google Maps
            </a>

            <Link href={BOOK_TRIAL_PATH} className={styles.primaryLink} target="_blank" rel="noopener noreferrer">
              Book A Trial
            </Link>
          </div>
        </Reveal>

        <Reveal className={styles.frame} delay={120} distance={24}>
          <iframe
            className={styles.map}
            title="Map showing Evolve MMA & Calisthenics in Malad West, Mumbai"
            src={GOOGLE_MAPS_EMBED_URL}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
