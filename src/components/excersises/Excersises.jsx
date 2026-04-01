import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';

import styles from './Excersises.module.css';

const programs = [
  {
    title: 'Mixed Martial Arts',
    tag: 'Combat',
    image:
      'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035263/mma_gprnre.png',
    desc: 'Integrated striking, grappling, conditioning, and cage-awareness fundamentals.',
    points: ['Technique', 'Confidence', 'Fight conditioning'],
  },
  {
    title: 'Calisthenics',
    tag: 'Bodyweight Strength',
    image:
      'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771037485/calisthenics_vhwsuz.jpg',
    desc: 'Progressive work for upper-body strength, mobility, static holds, and control.',
    points: ['Pull strength', 'Body control', 'Skill progressions'],
  },
  {
    title: 'Parkour',
    tag: 'Movement',
    image:
      'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035261/flipss_g53q5v.png',
    desc: 'Athletic movement training built around jumps, vaults, landings, flips, and flow.',
    points: ['Explosive power', 'Aerial control', 'Movement confidence'],
  },
];

export default function Excercises() {
  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <Reveal className={styles.header} distance={24}>
          <p className={styles.eyebrow}>Signature Programs</p>
          <h2>Training tracks designed around outcomes, not filler.</h2>
          <p className={styles.lead}>
            The current training offer is focused on three flagship programs:
            MMA, calisthenics, and parkour. Each one is built to develop skill,
            confidence, and athletic movement in a clear progression.
          </p>

          <Link href="/programs" className={styles.viewAll}>
            See All Programs
          </Link>
        </Reveal>

        <div className={styles.grid}>
          {programs.map((item, index) => (
            <Reveal
              key={item.title}
              className={styles.card}
              delay={index * 70}
              distance={22}
            >
              <div className={styles.mediaWrap}>
                <Image
                  src={item.image}
                  alt={`${item.title} training at Evolve MMA & Calisthenics`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.cardBody}>
                <span className={styles.tag}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p className={styles.description}>{item.desc}</p>

                <ul className={styles.pointList}>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
