'use client';
import { useRef } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
{
  text:'Amazing training experience with structured workouts, supportive coaches, and a positive environment that motivates you to push your limits every single day.',
  name:'Rahul',
},
{
  text:'Very professional setup with clean facilities, disciplined training schedules, and trainers who genuinely focus on technique, safety, and personal growth.',
  name:'Anita',
},
{
  text:'Highly recommended for anyone serious about fitness, strength, and consistency. The training pushes both physical and mental limits in the right way.',
  name:'Amit',
},
{
  text:'Great energy, passionate coaches, and a motivating atmosphere that makes every workout enjoyable, challenging, and worth coming back for.',
  name:'Pooja',
},
{
  text:'Amazing training experience with well-planned sessions that improve strength, stamina, flexibility, and confidence over time.',
  name:'Rahul',
},
{
  text:'Very professional setup where trainers give personal attention and correct form, ensuring long-term progress and injury-free training.',
  name:'Anita',
},
];

export default function Testimonials(){

  const containerRef = useRef(null);

  return(
    <section className={styles.section}>

      <h2 className={styles.title}>What People Say</h2>

      <div
        ref={containerRef}
        className={styles.container}
      >
        {testimonials.map((item,index)=>(
          <div key={index} className={styles.card}>
            <p className={styles.text}>{item.text}</p>
            <span className={styles.name}>— {item.name}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
