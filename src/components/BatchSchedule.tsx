import Link from 'next/link';

import {
  SCHEDULE_DAYS,
  SCHEDULE_SLOTS,
  type BatchEntry,
  type ScheduleGrid,
} from '@/data/schedule';
import { BOOK_TRIAL_PATH } from '@/lib/links';

import styles from './BatchSchedule.module.css';

type BatchScheduleProps = {
  schedule: ScheduleGrid;
};

function renderCell(day: (typeof SCHEDULE_DAYS)[number], slot: (typeof SCHEDULE_SLOTS)[number], entry?: BatchEntry) {
  if (!entry) {
    return <div className={styles.emptyCell}>No batch</div>;
  }

  const href = BOOK_TRIAL_PATH;
  const isFull = entry.status === 'full';

  return (
    <div className={`${styles.batchCard} ${isFull ? styles.full : ''}`}>
      <strong>{entry.program}</strong>
      <span>{entry.trainer}</span>
      <p>{isFull ? 'Batch currently full' : `${entry.availableSpots} spots left`}</p>
      {isFull ? (
        <span className={styles.fullLabel}>Full</span>
      ) : (
        <Link href={href} className={styles.bookButton} target="_blank" rel="noopener noreferrer">
          Book
        </Link>
      )}
    </div>
  );
}

export default function BatchSchedule({ schedule }: BatchScheduleProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.legend}>
        <span className={styles.open}>Open</span>
        <span className={styles.limited}>Limited</span>
        <span className={styles.fullBadge}>Full</span>
      </div>

      <div className={styles.scrollArea}>
        <div className={styles.table}>
          <div className={styles.cornerCell}>Time</div>
          {SCHEDULE_DAYS.map((day) => (
            <div key={day} className={styles.dayHeader}>
              {day}
            </div>
          ))}

          {SCHEDULE_SLOTS.flatMap((slot) => [
            <div key={`${slot}-label`} className={styles.slotLabel}>
              {slot}
            </div>,
            ...SCHEDULE_DAYS.map((day) => (
              <div key={`${day}-${slot}`} className={styles.cell}>
                {renderCell(day, slot, schedule[day][slot])}
              </div>
            )),
          ])}
        </div>
      </div>
    </div>
  );
}
