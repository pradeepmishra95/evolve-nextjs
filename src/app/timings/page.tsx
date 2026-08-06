import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import { BOOK_TRIAL_PATH, WHATSAPP_PROGRAM_HELP_URL } from '@/lib/links';
import { buildMetadata } from '@/lib/metadata';

import styles from './timings.module.css';

export const metadata = buildMetadata({
  title: 'Batch Timings | Evolve Sports And Fitness Club',
  description:
    'View calisthenics and MMA batch timings at Evolve Sports And Fitness Club in Malad West, Mumbai.',
  path: '/timings',
  keywords: [
    'MMA timings Malad West',
    'calisthenics batch timings Mumbai',
    'Evolve batch schedule',
  ],
});

type Session = {
  period: 'Morning' | 'Evening';
  times: string[];
};

type ProgramSchedule = {
  name: string;
  number: string;
  days?: string;
  description: string;
  accent: 'orange' | 'red' | 'green' | 'purple';
  sessions: Session[];
};

const schedules: ProgramSchedule[] = [
  {
    name: 'Calisthenics',
    number: '01',
    days: 'Monday – Friday',
    description: 'Strength, skill and body control — choose from nine weekday batches.',
    accent: 'orange',
    sessions: [
      {
        period: 'Morning',
        times: ['6:00 AM – 7:00 AM', '7:00 AM – 8:00 AM', '8:00 AM – 9:00 AM', '9:00 AM – 10:00 AM'],
      },
      {
        period: 'Evening',
        times: [
          '5:00 PM – 6:00 PM',
          '6:00 PM – 7:00 PM',
          '7:00 PM – 8:00 PM',
          '8:00 PM – 9:00 PM',
          '9:00 PM – 10:00 PM',
        ],
      },
    ],
  },
  {
    name: 'MMA',
    number: '02',
    days: 'Monday – Friday',
    description: 'Technique, conditioning and combat training across four evening batches.',
    accent: 'red',
    sessions: [
      {
        period: 'Evening',
        times: [
          '6:00 PM – 7:00 PM',
          '7:00 PM – 8:00 PM',
          '8:00 PM – 9:00 PM',
          '9:00 PM – 10:00 PM',
        ],
      },
    ],
  },
];

function PeriodIcon({ period }: { period: Session['period'] }) {
  if (period === 'Morning') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5a8.5 8.5 0 1 0 12 12Z" />
    </svg>
  );
}

export default function TimingsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.shell}>
        <Reveal className={styles.hero} distance={24}>
          <div className={styles.heroCopy}>
            <p className="section-eyebrow">Weekly Schedule</p>
            <h1 className="section-heading">Find your time.<br />Build your routine.</h1>
            <p className="section-lead">
              From early starts to after-work sessions, choose a batch that fits your day and keep
              showing up for yourself.
            </p>
          </div>

          <div className={styles.heroNote}>
            <span className={styles.liveDot} aria-hidden="true" />
            <div>
              <strong>2 programs. Morning to night.</strong>
              <p>Pick your preferred batch and confirm availability with our team.</p>
            </div>
          </div>
        </Reveal>

        <section className={styles.scheduleSection} aria-labelledby="batch-schedule-heading">
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.panelEyebrow}>Batch timings</p>
              <h2 id="batch-schedule-heading">Your week at Evolve</h2>
            </div>
            <p>All times are shown in IST. Calisthenics and MMA batches run Monday to Friday.</p>
          </div>

          <div className={styles.scheduleGrid}>
            {schedules.map((program, index) => (
              <Reveal
                as="article"
                key={program.name}
                className={`${styles.programCard} ${styles[program.accent]}`}
                delay={index * 70}
                distance={18}
              >
                <div className={styles.programHeader}>
                  <div className={styles.programTitle}>
                    <span className={styles.programNumber}>{program.number}</span>
                    <div>
                      <h3>{program.name}</h3>
                      {program.days && <span className={styles.daysBadge}>{program.days}</span>}
                    </div>
                  </div>
                  <p>{program.description}</p>
                </div>

                <div className={styles.sessionList}>
                  {program.sessions.map((session) => (
                    <div className={styles.session} key={session.period}>
                      <div className={styles.periodLabel}>
                        <span className={styles.periodIcon}>
                          <PeriodIcon period={session.period} />
                        </span>
                        <span>{session.period}</span>
                      </div>
                      <div className={styles.timeGrid}>
                        {session.times.map((time) => (
                          <div className={styles.timeChip} key={time}>
                            <span className={styles.clockDot} aria-hidden="true" />
                            <time>{time}</time>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className={styles.cta} distance={18}>
          <div>
            <p className={styles.panelEyebrow}>Ready when you are</p>
            <h2>Not sure which batch is right for you?</h2>
            <p>Tell us your goal and preferred time. We’ll help you choose the best place to start.</p>
          </div>
          <div className={styles.actions}>
            <Link href={BOOK_TRIAL_PATH} className="button-primary" target="_blank" rel="noopener noreferrer">
              Book A Trial
            </Link>
            <Link
              href={WHATSAPP_PROGRAM_HELP_URL}
              className="button-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk To The Team
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
