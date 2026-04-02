'use client';

import { useState } from 'react';
import Image from 'next/image';

import styles from '@/app/programs/programs.module.css';

const programs = [
  {
    id: 'mma',
    title: 'Mixed Martial Arts',
    shortDesc: 'Learn striking, grappling, cage awareness, and conditioning in one track.',
    fullDesc:
      'The MMA track is built for people who want combat skill, sharper reactions, and better conditioning through pad work, drills, grappling, and structured sparring foundations.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035263/mma_gprnre.png',
  },
  {
    id: 'calisthenics',
    title: 'Calisthenics',
    shortDesc: 'Build strength, control, and mobility through bodyweight training.',
    fullDesc:
      'Calisthenics focuses on clean pulling and pushing strength, static control, mobility, and body awareness for people who want visible progress without depending on machines.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771037485/calisthenics_vhwsuz.jpg',
  },
  {
    id: 'parkour',
    title: 'Parkour',
    shortDesc: 'Train jumps, vaults, landings, and freer athletic movement.',
    fullDesc:
      'Parkour is for people who want better coordination, agility, and movement freedom through jumps, vaults, landings, flips, and progressive skill mechanics.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035261/flipss_g53q5v.png',
  },
];

export default function ProgramsPage() {
  const [openId, setOpenId] = useState(null);

  const toggleProgram = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.programs}>
      <h1 className={styles.heading}>Our Programs</h1>
      <div className="centerGlow"></div>

      <div className={styles.container}>
        {programs.map((item, index) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`${styles.programRow} ${
                index % 2 !== 0 ? styles.reverse : ''
              }`}
            >
              <div className={styles.imageWrapper}>
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.image}
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={index < 2}
                    sizes="(max-width:768px) 100vw, 50vw"
                    className={styles.image}
                  />
                )}
              </div>

              <div className={styles.text}>
                <h3>{item.title}</h3>
                <p>{isOpen ? item.fullDesc : item.shortDesc}</p>
                <button
                  className={styles.btn}
                  onClick={() => toggleProgram(item.id)}
                >
                  {isOpen ? 'See Less' : 'See More'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
