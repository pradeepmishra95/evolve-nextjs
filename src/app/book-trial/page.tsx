import { Suspense } from 'react';

import BookingForm from '@/components/BookingForm';
import Reveal from '@/components/reveal/Reveal';
import { buildMetadata } from '@/lib/metadata';

import styles from './book-trial.module.css';

export const metadata = buildMetadata({
  title: 'Book A Trial | Evolve MMA & Calisthenics',
  description:
    'Book a trial at Evolve MMA & Calisthenics in Malad West, Mumbai. Share your preferred program, timing, and details in one quick form.',
  path: '/book-trial',
  keywords: [
    'book MMA trial Malad West',
    'book calisthenics trial Mumbai',
    'jumba trial Mumbai',
    'yoga trial Mumbai',
    'Evolve trial booking',
  ],
});

const quickPoints = [
  {
    title: 'Simple first step',
    detail: 'Tell us your goal, preferred timing, and which program interests you most.',
  },
  {
    title: 'Coach-led placement',
    detail: 'The team can guide you into the batch that best matches your level and schedule.',
  },
  {
    title: 'No guesswork',
    detail: 'Your first visit should help you understand the pace, coaching style, and fit.',
  },
];

export default function BookTrialPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <Reveal className={styles.hero} distance={24}>
          <div className={styles.copy}>
            <p className="section-eyebrow">Book A Trial</p>
            <h1 className="section-heading">Use one visit to see whether the training fits you in real life.</h1>
            <p className="section-lead">
              This form is the easiest way to tell us what you want to train, when you are
              free, and anything we should know before your first class.
            </p>
          </div>

          <div className={styles.quickGrid}>
            {quickPoints.map((point) => (
              <div key={point.title} className={styles.quickCard}>
                <strong>{point.title}</strong>
                <p>{point.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className={styles.content}>
          <div className={styles.formPanel}>
            <Suspense fallback={null}>
              <BookingForm />
            </Suspense>
          </div>

          <Reveal className={styles.sidePanel} delay={120} distance={22}>
            <p className={styles.sideEyebrow}>What To Expect</p>
            <h2>Your first class should feel guided, not overwhelming.</h2>
            <ul className={styles.expectList}>
              <li>You do not need experience before booking.</li>
              <li>You can mention injuries, age, schedule, or confidence concerns in the form.</li>
              <li>Morning, afternoon, and evening preferences help us point you to the right batch.</li>
              <li>You can book first and decide later which membership or timing suits you best.</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
