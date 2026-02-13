'use client';

import { useRef, useState } from 'react';
import styles from './Excersises.module.css';

const excercises = [
  { id:'kids', title:'Kids Batch', desc:'Fun strength, flexibility, and discipline training designed to build confidence and athletic foundations early.', video:'/videos/Video6.mp4'},
  { id:'fatloss', title:'Fat Loss Training', desc:'High-energy metabolic workouts engineered to accelerate fat loss while preserving lean muscle.', video:'/videos/Video6.mp4'},
  { id:'mma', title:'MMA', desc:'Complete combat training blending striking, grappling, endurance, and tactical awareness.', video:'/videos/Video6.mp4'},
  { id:'calisthenics', title:'Calisthenics', desc:'Elite bodyweight training focused on strength, balance, control, and movement mastery.', video:'/videos/Video6.mp4'},
  { id:'flips', title:'Flips & Tricks', desc:'Develop explosive power and aerial awareness through structured acrobatic progressions.', video:'/videos/Video6.mp4'},
  { id:'strength', title:'Strength & Conditioning', desc:'Science-backed programming to improve total-body power, stamina, and resilience.', video:'/videos/Video6.mp4'},
  { id:'personal', title:'Personal Training', desc:'Highly individualized coaching designed to deliver faster and safer results.', video:'/videos/Video6.mp4'},
  { id:'skills', title:'Skills Training', desc:'Precision-based drills that enhance coordination, agility, and athletic performance.', video:'/videos/Video6.mp4'},
  { id:'muaythai', title:'Muay Thai', desc:'Authentic striking system utilizing elbows, knees, kicks, and clinch control.', video:'/videos/Video6.mp4'},
  { id:'boxing', title:'Boxing', desc:'Refine footwork, timing, and punching accuracy while building elite conditioning.', video:'/videos/Video6.mp4'},
  { id:'grappling', title:'Grappling', desc:'Master positional dominance, submissions, and ground transitions.', video:'/videos/Video6.mp4'},
  { id:'yoga', title:'Yoga', desc:'Improve mobility, recovery, posture, and mental clarity through guided sessions.', video:'/videos/Video6.mp4'},
];

export default function Excercises() {

  const videoRefs = useRef([]);
  const [activeCard, setActiveCard] = useState(null);

  const handleEnter = (index) => {
    setActiveCard(index);
    videoRefs.current[index]?.play().catch(()=>{});
  };

  const handleLeave = (index) => {
    setActiveCard(null);
    const video = videoRefs.current[index];
    if(video){
      video.pause();
      video.currentTime = 0;
    }
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
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={() => handleLeave(index)}
            onClick={() =>
              activeCard === index
                ? handleLeave(index)
                : handleEnter(index)
            }
          >
            <div className={styles.inner}>

              {/* FRONT */}
              <div className={styles.front}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              {/* BACK */}
              <div className={styles.back}>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                <div className={styles.overlay} />

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
