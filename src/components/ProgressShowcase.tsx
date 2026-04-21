import Reveal from '@/components/reveal/Reveal';
import type { ProgressEntry } from '@/data/progress';

import styles from './ProgressShowcase.module.css';

type ProgressShowcaseProps = {
  entries: ProgressEntry[];
};

export default function ProgressShowcase({ entries }: ProgressShowcaseProps) {
  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <Reveal className={styles.header} distance={22}>
          <div>
            <p className="section-eyebrow">Student Progress</p>
            <h2 className="section-heading">Small milestones make the training feel real.</h2>
          </div>
          <p className="section-lead">
            Not every win is dramatic. Sometimes the real proof is the first clean pull-up,
            the first composed sparring round, or the first vault that felt controlled.
          </p>
        </Reveal>

        <div className={styles.track}>
          {entries.map((entry, index) => (
            <Reveal
              key={`${entry.studentName}-${entry.milestone}`}
              className={styles.card}
              delay={index * 60}
              distance={18}
            >
              <div className={styles.meta}>
                <span>{entry.program}</span>
                <strong>{entry.duration}</strong>
              </div>
              <h3>{entry.studentName}</h3>
              <p className={styles.milestone}>{entry.milestone}</p>
              {entry.quote ? <blockquote>{entry.quote}</blockquote> : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
