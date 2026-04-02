import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';

import styles from './Excersises.module.css';

const programs = [
  {
    number: '01',
    title: 'Mixed Martial Arts',
    tag: 'Combat',
    image:
      'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035263/mma_gprnre.png',
    desc: 'Integrated striking, grappling, conditioning, and cage-awareness fundamentals.',
    points: ['Technique', 'Confidence', 'Fight conditioning'],
    bestFor: 'People who want combat skill, conditioning, and a more athletic training base.',
  },
  {
    number: '02',
    title: 'Calisthenics',
    tag: 'Bodyweight Strength',
    image:
      'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771037485/calisthenics_vhwsuz.jpg',
    desc: 'Progressive work for upper-body strength, mobility, static holds, and control.',
    points: ['Pull strength', 'Body control', 'Skill progressions'],
    bestFor: 'People who want visible strength, better control, and bodyweight progressions.',
  },
  {
    number: '03',
    title: 'Parkour',
    tag: 'Movement',
    image:
      'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035261/flipss_g53q5v.png',
    desc: 'Athletic movement training built around jumps, vaults, landings, flips, and flow.',
    points: ['Explosive power', 'Aerial control', 'Movement confidence'],
    bestFor: 'People who want confidence, agility, and more freedom in how they move.',
  },
];

export default function Excercises() {
  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <Reveal className={styles.header} distance={24}>
          <div className={styles.headerTop}>
            <div className={styles.headerCopy}>
              <p className={styles.eyebrow}>Programs</p>
              <h2>Three paths, three very different training experiences.</h2>
              <p className={styles.lead}>
                MMA sharpens combat skill, calisthenics builds bodyweight
                strength, and parkour develops movement confidence. Pick the
                path that matches what you want to learn next.
              </p>
            </div>

            <div className={styles.headerSide}>
              <p className={styles.headerNote}>
                You do not need to commit to everything at once. Start with the
                program that excites you most and build from there.
              </p>

              <Link href="/programs" className={styles.viewAll}>
                Explore Programs
              </Link>
            </div>
          </div>
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
                <div className={styles.mediaOverlay} />
                <span className={styles.cardNumber}>{item.number}</span>
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

                <div className={styles.cardFooter}>
                  <span className={styles.footerLabel}>Best for</span>
                  <p className={styles.footerText}>{item.bestFor}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
