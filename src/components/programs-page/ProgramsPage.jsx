'use client';

import { useState } from 'react';
import Image from 'next/image';

import styles from '@/app/programs/programs.module.css';

const programs = [
  {
    id: 'mma',
    title: 'Mixed Martial Arts',
    shortDesc: 'Master striking, grappling, and complete combat skills.',
    fullDesc:
      'Our MMA program builds skill, confidence, and conditioning through structured striking, grappling, pad work, movement drills, and coached progressions.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035263/mma_gprnre.png',
  },
  {
    id: 'calisthenics',
    title: 'Calisthenics',
    shortDesc: 'Develop elite strength using only your bodyweight.',
    fullDesc:
      'Calisthenics focuses on body control, mobility, pulling strength, pushing strength, and progressive skill work through structured bodyweight training.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771037485/calisthenics_vhwsuz.jpg',
  },
  {
    id: 'parkour',
    title: 'Parkour',
    shortDesc: 'Train movement confidence, explosive power, and aerial body control.',
    fullDesc:
      'Parkour is designed for people who want to move with confidence, precision, and athletic freedom through jumps, landings, vaults, flips, and advanced movement mechanics.',
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
