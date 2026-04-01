import Reveal from '@/components/reveal/Reveal';
import { TRIAL_KIOSK_URL } from '@/lib/links';

import styles from './TrialJourney.module.css';

const steps = [
  {
    title: 'Tell us your goal',
    detail:
      'Share whether you want MMA skills, calisthenics strength, or movement-based parkour training.',
  },
  {
    title: 'Join the right batch',
    detail:
      'We guide you to a suitable session based on your level, schedule, and comfort with training.',
  },
  {
    title: 'Train your first class',
    detail:
      'Meet the coaches, experience the environment, and leave with a clear path for your next step.',
  },
];

const reassurancePoints = [
  'No experience needed to book a first class.',
  'We help you choose the right batch before you arrive.',
  'You can visit once and decide after you have context.',
];

export default function TrialJourney() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <Reveal className={styles.copy} distance={24}>
          <p className={styles.eyebrow}>Free Trial Flow</p>
          <h2>Make the first session feel easy, not intimidating.</h2>
          <p className={styles.lead}>
            The goal is simple: remove friction, match you to the right session,
            and help you feel the coaching quality before you commit.
          </p>

          <a
            href={TRIAL_KIOSK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Book Your Trial
          </a>

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
