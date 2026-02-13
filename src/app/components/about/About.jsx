'use client';

import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>

      <div className={styles.container}>

        <div className={styles.logoWrapper}>
          <Image
            src="/images/logo.png"
            alt="Evolve MMA & Calisthenics Logo"
            width={140}
            height={140}
            priority
          />
        </div>

        <h2 className={styles.heading}>
          About Evolve MMA & Calisthenics
        </h2>

        <p className={styles.lead}>
          <span className={styles.highlight}>
            Evolve MMA & Calisthenics
          </span>{' '}
          is a performance-driven training facility built for individuals who
          pursue <span className={styles.strong}>real strength</span>,{' '}
          <span className={styles.strong}>mobility</span>, and{' '}
          <span className={styles.strong}>discipline</span>.
        </p>

        <p>
          We focus on training the body to{' '}
          <span className={styles.strong}>move naturally</span>, develop{' '}
          <span className={styles.strong}>usable strength</span>, and achieve{' '}
          <span className={styles.strong}>complete physical control</span>
          through calisthenics, mixed martial arts, and functional conditioning.
        </p>

        <p>
          Our structured programs support{' '}
          <span className={styles.strong}>beginners</span>,{' '}
          <span className={styles.strong}>serious athletes</span>, and{' '}
          <span className={styles.strong}>working professionals</span>.
          Every session follows proven methodologies — never random workouts.
        </p>

        <p>
          Training at Evolve cultivates{' '}
          <span className={styles.strong}>confidence</span>,{' '}
          <span className={styles.strong}>mental resilience</span>, and long-term{' '}
          <span className={styles.strong}>consistency</span>.  
          Fitness here is not a temporary phase — it becomes a{' '}
          <span className={styles.highlight}>lifestyle.</span>
        </p>

        <a
          href="https://wa.me/918850957882"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.joinBtn}
        >
          Book a Trial
        </a>

      </div>
    </section>
  );
}
