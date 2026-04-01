import Image from 'next/image';

import Reveal from '@/components/reveal/Reveal';

import styles from './coaches.module.css';

export const metadata = {
  title: 'Meet the Coaches at Evolve MMA & Calisthenics',
  description:
    'See the coaches behind Evolve MMA & Calisthenics in Malad West, Mumbai, including expertise across MMA, calisthenics, strength, and mobility.',
  keywords: [
    'MMA coach Malad West',
    'calisthenics coach Mumbai',
    'strength coach Malad West',
    'fitness coaches Evolve MMA',
    'gym coaches near Lower Malad Metro',
  ],
  openGraph: {
    title: 'Coaches | Evolve MMA & Calisthenics',
    description:
      'Meet the coaching team guiding MMA, calisthenics, strength, and movement training at Evolve.',
  },
};

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

export default function Coaches() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Reveal className={styles.header} distance={24}>
          <p className={styles.eyebrow}>Coaching Team</p>
          <h1>People stay consistent when the coaching quality is obvious.</h1>
          <p className={styles.lead}>
            The gym experience is shaped by who is teaching, how they correct,
            and whether they understand progression. That is where these coaches
            make the difference.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {coaches.map((coach, index) => (
            <Reveal
              key={coach.name}
              className={styles.card}
              delay={index * 80}
              distance={22}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={coach.image}
                  alt={`${coach.name} - ${coach.role}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>

              <p className={styles.role}>{coach.role}</p>
              <h2>{coach.name}</h2>
              <p className={styles.summary}>{coach.summary}</p>
              <span className={styles.focus}>{coach.focus}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
