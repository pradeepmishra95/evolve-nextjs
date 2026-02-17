'use client';

import { useState } from 'react';
import styles from './Excersises.module.css';

const excercises = [
  { id:'kids', title:'Kids Batch', desc:'Fun strength, flexibility, and discipline training designed to build confidence and athletic foundations early.'},
  { id:'fatloss', title:'Fat Loss Training', desc:'High-energy metabolic workouts engineered to accelerate fat loss while preserving lean muscle.'},
  { id:'mma', title:'MMA', desc:'Complete combat training blending striking, grappling, endurance, and tactical awareness.'},
  { id:'calisthenics', title:'Calisthenics', desc:'Elite bodyweight training focused on strength, balance, control, and movement mastery.'},
  { id:'flips', title:'Flips & Tricks', desc:'Develop explosive power and aerial awareness through structured acrobatic progressions.'},
  { id:'strength', title:'Strength & Conditioning', desc:'Science-backed programming to improve total-body power, stamina, and resilience.'},
  { id:'personal', title:'Personal Training', desc:'Highly individualized coaching designed to deliver faster and safer results.'},
  { id:'skills', title:'Skills Training', desc:'Precision-based drills that enhance coordination, agility, and athletic performance.'},
  { id:'muaythai', title:'Muay Thai', desc:'Authentic striking system utilizing elbows, knees, kicks, and clinch control.'},
  { id:'boxing', title:'Boxing', desc:'Refine footwork, timing, and punching accuracy while building elite conditioning.'},
  { id:'grappling', title:'Grappling', desc:'Master positional dominance, submissions, and ground transitions.'},
  { id:'yoga', title:'Yoga', desc:'Improve mobility, recovery, posture, and mental clarity through guided sessions.'},
];

export default function Excercises() {

  const [activeCard, setActiveCard] = useState(null);

  const handleToggle = (index) => {
    setActiveCard(prev => prev === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Training Programs</h2>

      <div className={styles.grid}>
        {excercises.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.card} ${
              activeCard === index ? styles.flip : ''
            }`}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
            onClick={() => handleToggle(index)}
          >
            <div className={styles.inner}>

              {/* FRONT */}
              <div className={styles.front}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              {/* BACK */}
              <div className={styles.back}>
                <h3 className={styles.videoTitle}>
                  {item.title}
                </h3>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
