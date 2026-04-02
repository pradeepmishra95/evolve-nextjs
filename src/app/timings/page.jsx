import Reveal from '@/components/reveal/Reveal';
import { TRIAL_KIOSK_URL } from '@/lib/links';

import styles from './timings.module.css';

export const metadata = {
  title: 'Training Center Timings & Batch Schedule in Malad West',
  description:
    'Check morning and evening batch timings for MMA, calisthenics, advanced calisthenics, and kids classes at Evolve MMA & Calisthenics in Malad West, Mumbai.',
  alternates: {
    canonical: '/timings',
  },
  keywords: [
    'MMA timings Malad West',
    'calisthenics batch timings Mumbai',
    'training schedule Malad West',
    'kids fitness timings Mumbai',
    'trial training center timings Malad West',
  ],
  openGraph: {
    title: 'Timings | Evolve MMA & Calisthenics',
    description:
      'See morning and evening batch timings and schedule details for MMA, calisthenics, and kids training at Evolve.',
    url: '/timings',
  },
};

const schedules = [
  {
    title: 'MMA Training',
    days: 'Monday - Friday',
    description: 'Striking, grappling, conditioning, and combat foundations.',
    batches: [
      {
        label: 'Morning batches',
        times: ['06:00 - 07:00', '07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00'],
      },
      {
        label: 'Evening batches',
        times: ['06:00 - 07:00 PM', '07:00 - 08:00 PM', '08:00 - 09:00 PM', '09:00 - 10:00 PM'],
      },
    ],
  },
  {
    title: 'Calisthenics',
    days: 'Monday - Friday',
    description: 'Bodyweight strength, movement control, and progressive skill work.',
    batches: [
      {
        label: 'Morning batches',
        times: ['06:00 - 07:00', '07:00 - 08:00', '08:00 - 09:00', '09:00 - 10:00'],
      },
      {
        label: 'Evening batches',
        times: ['06:00 - 07:00 PM', '07:00 - 08:00 PM', '08:00 - 09:00 PM', '09:00 - 10:00 PM'],
      },
    ],
  },
  {
    title: 'Advanced Calisthenics',
    days: 'Monday - Wednesday - Friday',
    description: 'Higher-skill batch for athletes focused on advanced strength and holds.',
    batches: [
      {
        label: 'Focused slots',
        times: ['08:00 - 09:00 AM', '08:00 - 09:00 PM'],
      },
    ],
  },
  {
    title: 'Kids Batch',
    days: 'Tuesday - Thursday - Saturday',
    description: 'Movement, discipline, coordination, and confidence-building for younger trainees.',
    batches: [
      {
        label: 'Evening slot',
        times: ['07:00 - 08:00 PM'],
      },
    ],
  },
];

const extras = [
  'Beach training session',
  'Ice bath recovery',
  'Marathon and endurance runs',
  'Team games and mobility work',
  'Yoga and meditation',
  'Breath work and recovery',
  'Fitness competitions',
  'Dance and movement sessions',
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the training center timings at Evolve MMA & Calisthenics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The training center operates Monday to Saturday from 6:00 AM to 10:00 PM, with morning and evening training batches.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there both morning and evening batches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. MMA and calisthenics programs have morning and evening options to make training easier around work, school, and daily routines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can beginners join a batch if they are unsure where to start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Beginners can book a trial and the team helps guide them to the most suitable batch based on their goal, level, and schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have a kids training schedule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. The kids batch runs on Tuesday, Thursday, and Saturday in the evening slot from 7:00 PM to 8:00 PM.',
      },
    },
  ],
};

function EnrollLink() {
  return (
    <a
      href={TRIAL_KIOSK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.enrollBtn}
    >
      Book Trial
    </a>
  );
}

export default function Timings() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <Reveal className={styles.hero} distance={24}>
            <p className={styles.eyebrow}>Schedule & Availability</p>
            <h1>A weekly schedule built for consistency, not guesswork.</h1>
            <p className={styles.lead}>
              Use the timetable to decide what actually fits your life. MMA and
              calisthenics run across morning and evening windows, with
              dedicated slots for advanced practice and kids batches.
            </p>

            <div className={styles.quickGrid}>
              <div className={styles.quickCard}>
                <span>Trial class</span>
                <strong>See the batch before you commit</strong>
              </div>
              <div className={styles.quickCard}>
                <span>Flexible slots</span>
                <strong>Choose a realistic morning or evening routine</strong>
              </div>
              <div className={styles.quickCard}>
                <span>Different formats</span>
                <strong>MMA, calisthenics, advanced practice, and kids timings</strong>
              </div>
            </div>

            <p className={styles.helper}>
              This page tells you when classes happen. If you want help picking
              between programs, the trial visit is the easiest next step.
            </p>
          </Reveal>

          <div className={styles.scheduleStack}>
            {schedules.map((schedule, scheduleIndex) => (
              <Reveal
                key={schedule.title}
                className={styles.section}
                delay={scheduleIndex * 80}
                distance={22}
              >
                <div className={styles.sectionHeader}>
                  <div>
                    <h2>{schedule.title}</h2>
                    <p>{schedule.description}</p>
                  </div>
                  <span className={styles.dayPill}>{schedule.days}</span>
                </div>

                {schedule.batches.map((batch) => (
                  <div key={batch.label} className={styles.batchBlock}>
                    <h3>{batch.label}</h3>
                    <div className={styles.tilesWrapper}>
                      {batch.times.map((time) => (
                        <div className={styles.tile} key={time}>
                          <div className={styles.timeTile}>{time}</div>
                          <EnrollLink />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.extraPanel} distance={22}>
            <div className={styles.extraHeader}>
              <div>
                <p className={styles.eyebrow}>Saturday Programming</p>
                <h2>Recovery, outdoor work, and movement variety.</h2>
              </div>

              <EnrollLink />
            </div>

            <ul className={styles.list}>
              {extras.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
