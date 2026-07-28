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
            <p className="section-eyebrow">Training Goals</p>
            <h2 className="section-heading">What progress can look like in each program.</h2>
          </div>
          <p className="section-lead">
            Your starting point and pace are personal. These are the skills each program is
            designed to develop, not promised timelines or fabricated student results.
          </p>
        </Reveal>

        <div className={styles.track}>
          {entries.map((entry, index) => (
            <Reveal
              key={`${entry.program}-${entry.title}`}
              className={styles.card}
              delay={index * 60}
              distance={18}
            >
              <div className={styles.meta}>
                <span>{entry.program}</span>
              </div>
              <h3>{entry.title}</h3>
              <p className={styles.milestone}>{entry.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
