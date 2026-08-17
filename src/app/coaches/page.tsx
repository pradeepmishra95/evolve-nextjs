import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import { BOOK_TRIAL_PATH } from '@/lib/links';
import { buildMetadata } from '@/lib/metadata';

import styles from './coaches.module.css';

export const metadata = buildMetadata({
  title: 'Coaches | Evolve Sports And Fitness Club',
  description:
    'Learn about the MMA and calisthenics coaching focus at Evolve Sports And Fitness Club in Malad West, Mumbai.',
  path: '/coaches',
  keywords: [
    'MMA coach Malad West',
    'calisthenics coach Mumbai',
    'zumba dance coach Mumbai',
    'yoga coach Mumbai',
    'Evolve coaches',
  ],
});

const values = [
  {
    title: 'Technique-first teaching',
    detail: 'Clear explanation and useful correction.',
  },
  {
    title: 'Discipline-specific focus',
    detail: 'Training built for each discipline.',
  },
  {
    title: 'Trial-friendly',
    detail: 'Experience the class before joining.',
  },
];

const coachingAreas = [
  {
    number: '01',
    discipline: 'Calisthenics',
    title: 'Strength with control',
    detail:
      'Build strong foundations through clear progressions, patient correction, and movement you can own.',
    focus: ['Bodyweight strength', 'Skill progressions', 'Mobility and control'],
  },
  {
    number: '02',
    discipline: 'MMA',
    title: 'Technique before intensity',
    detail:
      'Learn stance, movement, striking, and grappling fundamentals in sessions that stay structured and approachable.',
    focus: ['Striking fundamentals', 'Defence and footwork', 'Conditioning'],
  },
  {
    number: '03',
    discipline: 'Zumba & Dance',
    title: 'Energy with direction',
    detail:
      'Follow guided movement that builds rhythm, coordination, and stamina without losing the joy of the session.',
    focus: ['Rhythm and coordination', 'Cardio fitness', 'Group confidence'],
  },
];

export default function CoachesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <Reveal className={styles.hero} distance={24}>
          <div className={styles.copy}>
            <p className="section-eyebrow">Coaching At Evolve</p>
            <h1 className="section-heading">
              Coaching that makes every session easier to understand.
            </h1>
            <p className="section-lead">
              Clear demonstrations, useful corrections, and a training pace that helps you
              improve without feeling lost.
            </p>
          </div>

          <aside className={styles.heroNote}>
            <span>What good coaching feels like</span>
            <strong>Seen. Corrected. Encouraged.</strong>
            <p>Come for a trial and experience the coaching style before you commit.</p>
          </aside>
        </Reveal>

        <div className={styles.valueGrid}>
          {values.map((value, index) => (
            <div key={value.title} className={styles.valueCard}>
              <span>0{index + 1}</span>
              <strong>{value.title}</strong>
              <p>{value.detail}</p>
            </div>
          ))}
        </div>

        <section className={styles.coachingSection} aria-labelledby="coaching-focus-title">
          <div className={styles.sectionIntro}>
            <div>
              <p className="section-eyebrow">On The Training Floor</p>
              <h2 id="coaching-focus-title">Different disciplines. One coaching standard.</h2>
            </div>
            <p>
              Every program has its own pace and technique, but the goal stays the same:
              help you understand what to do and why it matters.
            </p>
          </div>

          <div className={styles.grid}>
            {coachingAreas.map((area, index) => (
              <Reveal
                as="article"
                key={area.discipline}
                className={styles.coachCard}
                delay={index * 70}
                distance={18}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardNumber}>{area.number}</span>
                  <span className={styles.discipline}>{area.discipline}</span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.detail}</p>
                <ul>
                  {area.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className={styles.cta} distance={18}>
          <div>
            <p className="section-eyebrow">Experience It Yourself</p>
            <h2>The best coaching introduction is a real session.</h2>
          </div>
          <Link
            href={BOOK_TRIAL_PATH}
            className="button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book A Trial
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
