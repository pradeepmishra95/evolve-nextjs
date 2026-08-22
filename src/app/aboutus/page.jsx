import MapSection from '@/components/mapsection/MapSection';
import Reveal from '@/components/reveal/Reveal';
import { WHATSAPP_PROGRAM_FIT_URL } from '@/lib/links';

import styles from './aboutus.module.css';

export const metadata = {
  title: 'About Evolve Sports And Fitness Club in Malad West',
  description:
    'Learn about Evolve Sports And Fitness Club in Malad West, Mumbai, including the training philosophy, coaching approach, and trial experience.',
  alternates: {
    canonical: '/aboutus',
  },
  keywords: [
    'about Evolve Sports And Fitness Club',
    'Malad West training center',
    'MMA and calisthenics training center Mumbai',
    'coach-led training center Malad West',
    'fitness training center near Lower Malad Metro',
  ],
  openGraph: {
    title: 'About Us | Evolve Sports And Fitness Club',
    description:
      'See how Evolve approaches coaching, progression, beginner guidance, and performance-focused training in Malad West.',
    url: '/aboutus',
  },
};

const facts = [
  {
    label: 'Location',
    title: 'Malad West, near Lower Malad Metro',
    detail: 'Easy to reach throughout the week.',
  },
  {
    label: 'Schedule',
    title: 'Monday - Saturday, 6:00 AM - 10:00 PM',
    detail: 'Morning and evening batches available.',
  },
  {
    label: 'Format',
    title: 'Technique-first batches',
    detail: 'Active correction and focused sessions.',
  },
  {
    label: 'Programs',
    title: 'MMA and Calisthenics',
    detail: 'Combat skill and bodyweight strength training.',
  },
];

const trainingPillars = [
  'Technique, timing, and control',
  'Discipline-specific practice',
  'Useful strength, stamina, and coordination',
];

const whoItFits = [
  'First-time and experienced trainees',
  'Combat sport and bodyweight enthusiasts',
  'Students and working professionals',
];

const visitSteps = [
  {
    title: 'Tell us what interests you',
    detail: 'Share your goal, preferred program, and schedule.',
  },
  {
    title: 'Come in and feel the training rhythm',
    detail:
      'See the floor, teaching style, and class pace in person.',
  },
  {
    title: 'Decide based on fit, not guesswork',
    detail:
      'Choose the program and timing that works for you.',
  },
];

export default function AboutUs() {
  return (
    <section className={styles.page}>
      <div className={styles.shell}>
        <Reveal className={styles.hero} distance={24}>
          <p className={styles.eyebrow}>About Evolve</p>
          <h1>A training center built around disciplines, not random workouts.</h1>
          <p className={styles.lead}>
            Train MMA and calisthenics in one focused, coach-led space.
          </p>

          <div className={styles.actions}>
            <a
              href={WHATSAPP_PROGRAM_FIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              Talk To The Team
            </a>
          </div>

          <p className={styles.helper}>
            Share your goal and schedule, and we’ll suggest a class to try.
          </p>
        </Reveal>

        <div className={styles.factsGrid}>
          {facts.map((fact, index) => (
            <Reveal
              key={fact.label}
              className={styles.factCard}
              delay={index * 60}
              distance={20}
            >
              <span>{fact.label}</span>
              <strong>{fact.title}</strong>
              <p>{fact.detail}</p>
            </Reveal>
          ))}
        </div>

        <div className={styles.splitGrid}>
          <Reveal className={styles.contentCard} distance={22}>
            <h2>What the training is built around</h2>
            <ul className={styles.contentList}>
              {trainingPillars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.contentCard} delay={90} distance={22}>
            <h2>Who tends to do well here</h2>
            <ul className={styles.contentList}>
              {whoItFits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className={styles.visitPanel} distance={22}>
          <h2>Your first visit should make the place easier to understand.</h2>

          <div className={styles.visitGrid}>
            {visitSteps.map((step, index) => (
              <Reveal
                key={step.title}
                className={styles.visitCard}
                delay={index * 70}
                distance={18}
              >
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      <MapSection
        title="Visit once and the center becomes easier to read."
        copy="One walk-through usually answers the practical questions about the setup, vibe, and class format much faster than text can."
      />
    </section>
  );
}
