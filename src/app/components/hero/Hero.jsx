'use client';
import { useRef, useState, useEffect } from 'react';
import styles from './Hero.module.css';

const videos = [
  '/videos/Video1.mp4',
  '/videos/Video2.mp4',
  '/videos/Video3.mp4',
];

export default function Hero() {
  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);
  const videoCache = useRef([]);

  // Preload all videos on mount
  useEffect(() => {
    videoCache.current = videos.map((src) => {
      const vid = document.createElement('video');
      vid.src = src;
      vid.preload = 'auto';
      vid.muted = true;
      return vid;
    });
  }, []);

  const handleEnd = () => {
    const next = (index + 1) % videos.length;
    setIndex(next);
    // Use preloaded video src
    videoRef.current.src = videoCache.current[next].src;
    videoRef.current.play();
  };

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.video}
        src={videoCache.current[index]?.src || videos[index]}
        autoPlay
        muted
        playsInline
        preload="auto"
        playbackRate={0.75}
        onEnded={handleEnd}
      />
      <div className={styles.overlay}>
        <h3>Elite MMA & Calisthenics Training</h3>
        <h1>YOUR JOURNEY TO PEAK FITNESS</h1>
        <p>
          Professional MMA and calisthenics training focused on strength, discipline,
          mobility, and real-world performance for all fitness levels.
        </p>
        <a
          href="https://wa.me/918850957882"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Book a Free Trial
        </a>
      </div>
    </section>
  );
}


