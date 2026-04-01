import Image from 'next/image';
import Link from 'next/link';

import MapSection from '@/components/mapsection/MapSection';
import Reveal from '@/components/reveal/Reveal';

import styles from './aboutus.module.css';

export const metadata = {
  title: 'About Evolve MMA & Calisthenics in Malad West',
  description:
    'Learn about Evolve MMA & Calisthenics in Malad West, Mumbai, including the gym philosophy, coaching approach, featured coaches, and trial experience.',
  keywords: [
    'about Evolve MMA',
    'Malad West gym',
    'MMA and calisthenics gym Mumbai',
    'coach-led gym Malad West',
    'fitness gym near Lower Malad Metro',
  ],
  openGraph: {
    title: 'About Us | Evolve MMA & Calisthenics',
    description:
      'See how Evolve approaches coaching, progression, beginner guidance, and performance-focused training in Malad West.',
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
    detail: 'The goal is not random exhaustion. It is better movement, strength, and skill.',
  },
  {
    label: 'Programs',
    title: 'MMA, calisthenics, and parkour',
    detail: 'Three focused flagship programs built around skill, control, and athletic movement.',
  },
];

const trainingPillars = [
  'Technique and movement quality are treated like real parts of progress, not optional extras.',
  'Beginners, working professionals, and more experienced trainees all need structure that meets them at the right level.',
  'Strength, conditioning, mobility, and body control are developed together so training feels more athletic and useful outside the gym too.',
  'A free trial lowers the pressure and lets people understand the environment before they commit.',
];

const whoItFits = [
  'People who are new to MMA, calisthenics, or structured training and want guidance from the start.',
  'Working professionals who need real coaching and realistic batch timings, not guesswork.',
  'Parents looking for a disciplined, movement-focused environment for their child.',
  'Trainees who want performance-driven sessions instead of a generic gym-floor routine.',
];

const coaches = [
  {
    name: 'Rahul Gupta',
    role: 'Head Calisthenics Coach',
    summary:
      'Guides members through bodyweight strength, mobility, and progressive movement skill development.',
    focus: 'Calisthenics • Strength • Mobility',
    image:
      'https://res.cloudinary.com/dd9yqqsa4/image/upload/w_800,c_fill,g_auto,dpr_auto,q_auto:best,f_auto/RahulGupta_mnreqs.jpg',
  },
  {
    name: 'Zaid',
    role: 'MMA Coach',
    summary:
      'Builds striking, grappling confidence, and disciplined training habits with safety-first coaching.',
    focus: 'MMA • Striking • Grappling',
    image:
      'https://res.cloudinary.com/dd9yqqsa4/image/upload/w_800,c_fill,g_auto,dpr_auto,q_auto:best,f_auto/Zaid_dertug.jpg',
  },
  {
    name: 'Vishal Yadav',
    role: 'Calisthenics Coach',
    summary:
      'Works on strength progressions, movement quality, and long-term bodyweight control for all levels.',
    focus: 'Calisthenics • Strength • Movement',
    image:
      'https://res.cloudinary.com/dd9yqqsa4/image/upload/w_800,c_fill,g_auto,dpr_auto,q_auto:best,f_auto/VishalYadav_wvfgos.jpg',
  },
];

const visitSteps = [
  {
    title: 'Tell us your goal and current level',
    detail:
      'A quick trial form submission helps the team guide you toward the right batch from the beginning.',
  },
  {
    title: 'Visit for a trial class',
    detail:
      'See the space, meet the coaches, and understand how the sessions are structured before deciding.',
  },
  {
    title: 'Choose the next step with context',
    detail:
      'After the trial, it is easier to pick a program and timing that actually fits your routine.',
  },
];

export default function AboutUs() {
  return (
    <section className={styles.page}>
      <div className={styles.shell}>
        <Reveal className={styles.hero} distance={24}>
          <p className={styles.eyebrow}>About The Gym</p>
          <h1>Performance-driven training with enough clarity for beginners to start well.</h1>
          <p className={styles.lead}>
            Evolve MMA &amp; Calisthenics is built around coach-led progressions,
            consistent batches, and an environment that helps people train for
            strength, movement, confidence, and long-term improvement.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/918850957882?text=Hi!%20I%20want%20to%20understand%20which%20program%20fits%20me%20best."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              Talk To The Team
            </a>

            <Link href="/coaches" className={styles.secondaryLink}>
              Meet The Coaches
            </Link>
          </div>

          <p className={styles.helper}>
            If you are unsure where to start, you do not need to figure it out
            alone first. Share your goal, schedule, and comfort level with
            training, and the team can point you toward the most suitable batch.
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
              The gym is designed for people who want more than a membership and
              a random workout of the day. The aim is to make progress visible in
              how you move, how strong you feel, and how confidently you train.
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
              Evolve works best for people who want coaching, structure, and a
              clearer sense of progression than a standard gym-floor experience
              usually gives them.
            </p>
            <ul className={styles.contentList}>
              {whoItFits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className={styles.coachSection} distance={22}>
          <div className={styles.coachHeader}>
            <div>
              <p className={styles.eyebrow}>Featured Coaches</p>
              <h2>Coaching quality shapes the whole training experience.</h2>
              <p>
                The gym experience improves quickly when the people teaching know
                how to correct, progress, and adapt the session to the person in
                front of them.
              </p>
            </div>

            <Link href="/coaches" className={styles.coachLink}>
              View All Coaches
            </Link>
          </div>

          <div className={styles.coachGrid}>
            {coaches.map((coach, index) => (
              <Reveal
                key={coach.name}
                className={styles.coachCard}
                delay={index * 80}
                distance={20}
              >
                <div className={styles.coachImageWrap}>
                  <Image
                    src={coach.image}
                    alt={`${coach.name} - ${coach.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    className={styles.coachImage}
                  />
                </div>
                <p className={styles.coachRole}>{coach.role}</p>
                <h3>{coach.name}</h3>
                <p className={styles.coachSummary}>{coach.summary}</p>
                <span className={styles.coachFocus}>{coach.focus}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className={styles.visitPanel} distance={22}>
          <h2>What a first visit should feel like</h2>
          <p>
            A first session works best when it removes pressure instead of adding
            it. The goal is to help you understand the environment, meet the
            coaches, and leave knowing what the next step should be.
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
        title="Visit the gym once and the decision gets clearer."
        copy="See the space, ask questions, and understand which program and batch fit your goal before committing."
      />
    </section>
  );
}
