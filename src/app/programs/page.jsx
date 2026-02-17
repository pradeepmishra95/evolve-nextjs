'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './programs.module.css';

const programs = [
  {
    id: 'kids',
    title: 'Kids Batch',
    shortDesc: 'Build strength, discipline, and confidence from an early age.',
    fullDesc:
      'Our Kids Program is designed to develop strong physical foundations while nurturing confidence, discipline, and teamwork. Through structured workouts, agility drills, and fun strength-building activities, children improve coordination, flexibility, and focus. Sessions are conducted in a safe, motivating environment where young athletes learn the value of consistency, respect, and perseverance.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035262/kids_isgzhq.png',
  },
  {
    id: 'fatloss',
    title: 'Fat Loss Training',
    shortDesc: 'Scientifically designed training for sustainable fat loss.',
    fullDesc:
      'This results-driven program combines high-intensity interval training, metabolic conditioning, and strength circuits to accelerate fat loss while preserving lean muscle. Every session is strategically programmed to boost metabolism, improve cardiovascular health, and enhance overall energy levels. Along with expert guidance, members develop long-term habits that support sustainable transformation.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035264/fatloss_br6zcd.png',
  },
  {
    id: 'mma',
    title: 'Mixed Martial Arts',
    shortDesc: 'Master striking, grappling, and complete combat skills.',
    fullDesc:
      'Our MMA program delivers a complete combat sports experience by integrating striking, grappling, cage control, and endurance training. Athletes build tactical awareness, mental resilience, and elite-level conditioning while learning real fight strategies. Whether training competitively or for fitness, members experience the discipline and intensity required to perform at a high level.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035263/mma_gprnre.png',
  },
  {
    id: 'calisthenics',
    title: 'Calisthenics',
    shortDesc: 'Develop elite strength using only your bodyweight.',
    fullDesc:
      'Calisthenics focuses on mastering body control through progressive strength techniques such as pull-ups, dips, levers, and static holds. This program enhances mobility, stability, and muscular endurance while building an athletic physique. With structured progressions and expert coaching, members safely advance from foundational movements to impressive strength skills.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771037485/calisthenics_vhwsuz.jpg',
  },
  {
    id: 'flips',
    title: 'Flips & Tricks',
    shortDesc: 'Train explosive power and aerial body control.',
    fullDesc:
      'Designed for athletes who want to move with confidence and precision, this program teaches flips, rotations, and advanced aerial mechanics. Emphasis is placed on technique, spatial awareness, and safe landing practices to minimize injury risk. Members gradually develop explosive power and coordination while unlocking dynamic movement capabilities.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035261/flipss_g53q5v.png',
  },
  {
    id: 'strength',
    title: 'Strength & Conditioning',
    shortDesc: 'Increase power, endurance, and athletic dominance.',
    fullDesc:
      'Built on proven sports science principles, this program improves total-body strength, muscular endurance, and injury resistance. Training includes compound lifts, functional movements, and structured conditioning protocols that translate directly into athletic performance. Ideal for anyone seeking measurable physical improvement.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035263/strength_okkpkc.png',
  },
  {
    id: 'personal',
    title: 'Personal Training',
    shortDesc: 'Highly personalized coaching for faster results.',
    fullDesc:
      'Personal Training delivers focused attention with customized workout strategies aligned to your goals, fitness level, and biomechanics. Trainers continuously monitor progress, refine technique, and optimize performance to ensure efficient results. This is the fastest and safest path toward transformation.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035266/personal_gczan7.png',
  },
  {
    id: 'skills',
    title: 'Skills Training',
    shortDesc: 'Enhance precision, speed, and athletic coordination.',
    fullDesc:
      'Our Skills Training program targets the fine details that elevate athletic performance. Through reaction drills, agility work, and neuromuscular training, members improve coordination, balance, and movement efficiency. Perfect for athletes looking to sharpen their competitive edge.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035256/skills_ek1d63.png',
  },
  {
    id: 'muaythai',
    title: 'Muay Thai',
    shortDesc: 'Learn the art of eight limbs with authentic technique.',
    fullDesc:
      'This traditional striking system develops devastating power using punches, kicks, elbows, and knees. Training includes pad work, clinch techniques, defensive strategies, and elite conditioning. Beyond physical benefits, practitioners cultivate mental toughness and composure under pressure.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035273/kickboxing_qrrt2y.png',
  },
  {
    id: 'grappling',
    title: 'Grappling',
    shortDesc: 'Control opponents with technique and leverage.',
    fullDesc:
      'Focused on positional dominance and submission strategy, our grappling program teaches efficient movement on the ground. Athletes learn escapes, transitions, and control mechanics while building exceptional functional strength. Live sparring ensures practical skill development.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035259/grappling_yiazwb.png',
  },
  {
    id: 'yoga',
    title: 'Yoga',
    shortDesc: 'Restore mobility, balance, and mental clarity.',
    fullDesc:
      'Yoga supports recovery while enhancing flexibility, posture, and breathing efficiency. Guided sessions help reduce stress, prevent injuries, and improve muscular balance. Ideal for athletes and professionals alike, it creates harmony between physical performance and mental wellbeing.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035260/yoga_mnhe1q.png',
  },
  {
    id: 'kickboxing',
    title: 'Kickboxing',
    shortDesc: 'High-energy sessions that build strength and stamina.',
    fullDesc:
      'Kickboxing blends powerful striking combinations with intense conditioning to deliver a full-body workout. Members improve coordination, speed, and cardiovascular endurance while burning significant calories. Each session is both technically engaging and physically demanding.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035273/kickboxing_qrrt2y.png',
  },
  {
    id: 'wrestling',
    title: 'Wrestling',
    shortDesc: 'Develop unmatched balance, strength, and control.',
    fullDesc:
      'Our wrestling program emphasizes takedowns, positional control, and leverage-based techniques that build dominant physical capability. Athletes gain explosive strength, resilience, and strategic awareness — attributes essential for competitive success.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035261/wrestling_cymuih.png',
  },
  {
    id: 'selfdefense',
    title: 'Self Defense',
    shortDesc: 'Practical techniques for real-world safety.',
    fullDesc:
      'Self Defense training equips individuals with the awareness and skills needed to respond effectively in threatening situations. Members learn escape tactics, defensive positioning, and situational judgment while building confidence and composure.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035258/selfdefense_zxniaw.png',
  },
  {
    id: 'athlete',
    title: 'Athlete Training',
    shortDesc: 'Performance training built for serious competitors.',
    fullDesc:
      'Engineered for aspiring and professional athletes, this program targets speed, agility, explosiveness, and recovery optimization. Using structured performance metrics, athletes consistently push beyond limitations and reach peak physical output.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035256/athlete_opbklh.png',
  },
  {
    id: 'boxing',
    title: 'Boxing',
    shortDesc: 'Refine technique, timing, and ring intelligence.',
    fullDesc:
      'Boxing develops precision, footwork, defensive awareness, and striking accuracy. Through pad work, bag drills, and controlled sparring, members cultivate discipline, stamina, and sharp reflexes while experiencing one of the most respected combat sports.',
    image: 'https://res.cloudinary.com/dd9yqqsa4/image/upload/v1771035256/boxing_rpxtcq.png',
  },
];


export default function Programs() {
  const [openId, setOpenId] = useState(null);

  const toggleProgram = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className={styles.programs}>
      <h1 className={styles.heading}>Our Programs</h1>

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
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index < 2}
                  sizes="(max-width:768px) 100vw, 50vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.text}>
                <h3>{item.title}</h3>

                <p>
                  {isOpen ? item.fullDesc : item.shortDesc}
                </p>

                <button
                  className={styles.btn}
                  onClick={() => toggleProgram(item.id)}
                  aria-expanded={isOpen}
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
