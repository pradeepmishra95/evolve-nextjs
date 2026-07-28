import Link from 'next/link';

import type { Coach } from '@/data/coaches';
import { BOOK_TRIAL_PATH } from '@/lib/links';

import styles from './CoachCard.module.css';

type CoachCardProps = {
  coach: Coach;
  compact?: boolean;
};

export default function CoachCard({ coach, compact = false }: CoachCardProps) {
  return (
    <article className={`${styles.card} ${compact ? styles.compact : ''}`}>
      <div className={styles.body}>
        <span className={styles.specialization}>{coach.specialization}</span>
        <p className={styles.bio}>{coach.bio}</p>

        {!compact ? (
          <>
            <ul className={styles.certifications}>
              {coach.certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
            <p className={styles.experience}>
              <strong>{coach.yearsExperience}+ years</strong> of coaching experience
            </p>
          </>
        ) : (
          <p className={styles.experience}>
            <strong>{coach.yearsExperience}+ years</strong> of experience
          </p>
        )}

        <Link
          href={BOOK_TRIAL_PATH}
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a trial
        </Link>
      </div>
    </article>
  );
}
