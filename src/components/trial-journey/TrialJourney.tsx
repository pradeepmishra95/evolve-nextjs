import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import { BOOK_TRIAL_PATH } from '@/lib/links';

import styles from './TrialJourney.module.css';

const steps = [
  {
    title: 'Share what you want from training',
    detail:
      'Tell us whether you want fight skills, bodyweight strength, movement training, or a suitable kids batch.',
  },
  {
    title: 'Get placed into a suitable session',
    detail:
      'We look at age, experience, schedule, and comfort level before suggesting the best batch to try.',
  },
  {
    title: 'Use the class as your reference point',
    detail:
      'By the end of the visit, you should know how the class feels and whether the format suits you.',
  },
];

const reassurancePoints = [
  'You do not need prior training knowledge before booking.',
  'You can ask about age groups, intensity, timings, and program fit.',
  'The first visit is meant to clarify the experience, not rush a decision.',
];

export default function TrialJourney() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <Reveal className={styles.copy} distance={24}>
          <p className={styles.eyebrow}>First Visit Flow</p>
          <h2>A first visit should remove doubt, not create pressure.</h2>
          <p className={styles.lead}>
            This step is about seeing the floor, feeling the class pace, and
            understanding whether the format suits your goal before you commit.
          </p>

          <Link href={BOOK_TRIAL_PATH} className={styles.cta} target="_blank" rel="noopener noreferrer">
            Book A Trial
          </Link>

          <ul className={styles.reassuranceList}>
            {reassurancePoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              className={styles.step}
              delay={index * 80}
              distance={22}
            >
              <span className={styles.number}>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
