import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import { PROGRAMS } from '@/data/programs';
import { BOOK_TRIAL_PATH } from '@/lib/links';

import styles from './ProgramsOverview.module.css';

export default function ProgramsOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <Reveal className={styles.header} distance={24}>
          <div>
            <p className="section-eyebrow">Programs</p>
            <h1 className="section-heading">Choose the discipline that matches how you want to train.</h1>
          </div>
          <p className="section-lead">
            MMA and calisthenics are coached differently for a reason. Each path has its own
            technical goals, pace, and kind of progress. Jumba and Yoga are upcoming programs.
          </p>
        </Reveal>

        <div className={styles.stack}>
          {PROGRAMS.map((program, index) => (
            <Reveal
              key={program.slug}
              className={`${styles.row} ${index % 2 === 1 ? styles.reverse : ''}`}
              delay={index * 70}
              distance={22}
            >
              <div className={styles.media}>
                <Image
                  src={program.image}
                  alt={program.name}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 42vw"
                  className={styles.image}
                  style={{
                    objectFit: program.imageFit ?? 'cover',
                    objectPosition: program.imagePosition ?? 'center',
                  }}
                />
                <div className={styles.overlay} />
                <span className={styles.label}>{program.label}</span>
              </div>

              <div className={styles.copy}>
                <h2>{program.name}</h2>
                <p>{program.description}</p>
                <ul className={styles.highlights}>
                  {program.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className={styles.meta}>
                  <div>
                    <span>First class</span>
                    <strong>{program.firstClass}</strong>
                  </div>
                  <div>
                    <span>Schedule</span>
                    <strong>{program.scheduleHint}</strong>
                  </div>
                </div>
                <div className={styles.actions}>
                  <Link href={`/programs/${program.slug}`} className="button-secondary">
                    View Details
                  </Link>
                  <Link
                    href={BOOK_TRIAL_PATH}
                    className="button-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book A Trial
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
