import Link from 'next/link';

import BatchSchedule from '@/components/BatchSchedule';
import Reveal from '@/components/reveal/Reveal';
import { WEEKLY_SCHEDULE } from '@/data/schedule';
import { BOOK_TRIAL_PATH } from '@/lib/links';
import { buildMetadata } from '@/lib/metadata';

import styles from './timings.module.css';

export const metadata = buildMetadata({
  title: 'Live Batch Schedule | Evolve MMA & Calisthenics',
  description:
    'View the weekly MMA and calisthenics batch schedule at Evolve in Malad West, Mumbai, with trainer names, spots, and booking links.',
  path: '/timings',
  keywords: [
    'MMA timings Malad West',
    'calisthenics batch timings Mumbai',
    'jumba schedule Mumbai',
    'yoga schedule Mumbai',
    'Evolve batch schedule',
  ],
});

const quickCards = [
  {
    title: 'Updated weekly',
    detail: 'Batch placeholders are shown here and can be refreshed regularly as availability changes.',
  },
  {
    title: 'Morning to evening',
    detail: 'The timetable is built to work around school, work, and commute-heavy routines.',
  },
  {
    title: 'Book from the grid',
    detail: 'Open and limited slots can go straight into the trial booking flow with one click.',
  },
];

export default function TimingsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <Reveal className={styles.hero} distance={24}>
          <div className={styles.copy}>
            <p className="section-eyebrow">Timings & Availability</p>
            <h1 className="section-heading">A weekly timetable built to show real batch options, not vague promises.</h1>
            <p className="section-lead">
              Use the schedule to see which days, time slots, and programs fit your routine.
              Open batches, limited spots, and full sessions are all visible in one place.
            </p>
          </div>

          <div className={styles.actions}>
            <Link href={BOOK_TRIAL_PATH} className="button-primary" target="_blank" rel="noopener noreferrer">
              Book A Trial
            </Link>
          </div>
        </Reveal>

        <div className={styles.quickGrid}>
          {quickCards.map((card) => (
            <div key={card.title} className={styles.quickCard}>
              <strong>{card.title}</strong>
              <p>{card.detail}</p>
            </div>
          ))}
        </div>

        <Reveal className={styles.schedulePanel} distance={22}>
          <div className={styles.scheduleHeader}>
            <div>
              <p className={styles.panelEyebrow}>Weekly Batch Grid</p>
              <h2>See where the space is open, nearly full, or already packed.</h2>
            </div>
            <p>
              This grid uses placeholder trainers and spot counts for now, but it is structured so
              it can be updated weekly without changing the layout.
            </p>
          </div>

          <BatchSchedule schedule={WEEKLY_SCHEDULE} />
        </Reveal>
      </div>
    </main>
  );
}
