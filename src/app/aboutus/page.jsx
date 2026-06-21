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
    detail: 'Easy to reach before work, after work, or as a planned weekend visit.',
  },
  {
    label: 'Schedule',
    title: 'Monday - Saturday, 6:00 AM - 10:00 PM',
    detail: 'Morning and evening batches make consistent training more realistic.',
  },
  {
    label: 'Format',
    title: 'Coach-led batches with clear progressions',
    detail: 'Defined sessions, active corrections, and less guesswork than a generic open floor.',
  },
  {
    label: 'Programs',
    title: 'MMA and Calisthenics',
    detail: 'Combat training and bodyweight strength are the core lanes; other movement offerings arrive soon.',
  },
];

const trainingPillars = [
  'Technique, timing, and control matter just as much as effort and sweat.',
  'Programs are taught as disciplines with their own logic, not blended into vague circuit training.',
  'The aim is athletic carryover you can feel outside class too: posture, stamina, coordination, and composure.',
  'A first visit should help you understand how the place runs before you decide whether to join.',
];

const whoItFits = [
  'Beginners who want a clear starting point instead of being left to figure everything out alone.',
  'People drawn to combat sports, bodyweight strength, or movement practice for the long term.',
  'Students and working professionals who need usable timings, not ideal-world schedules.',
  'Parents who want a disciplined environment with real instruction for their child.',
];

const visitSteps = [
  {
    title: 'Tell us what interests you',
    detail:
      'Share whether you are interested in MMA, calisthenics, kids batches, or simply starting structured training.',
  },
  {
    title: 'Come in and feel the training rhythm',
    detail:
      'A first session helps you see the floor, the teaching style, and the pace of the batch in real life.',
  },
  {
    title: 'Decide based on fit, not guesswork',
    detail:
      'After that visit, it is easier to choose a program, timing, and routine you can actually maintain.',
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
            Evolve brings together MMA, calisthenics, and Zumba & Dance with structured coaching in one space for people who want to learn, not just sweat. Yoga is upcoming.
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
            If you are still figuring out where you fit, that is normal. Share
            your goal and schedule, and the team can tell you which batch is
            worth trying first.
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
            <p>
              This is not meant to feel like a generic room full of machines and
              disconnected exercises. The space is organised around coached
              classes, repeatable drills, and skill-based improvement.
            </p>
            <ul className={styles.contentList}>
              {trainingPillars.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.contentCard} delay={90} distance={22}>
            <h2>Who tends to do well here</h2>
            <p>
              The best fit is someone who wants a discipline to practice, not
              just a place to burn calories for a day.
            </p>
            <ul className={styles.contentList}>
              {whoItFits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className={styles.visitPanel} distance={22}>
          <h2>Your first visit should make the place easier to understand.</h2>
          <p>
            A good first session shows you the pace of class, the coaching
            style, and the kind of people already training there.
          </p>

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
