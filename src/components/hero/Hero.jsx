'use client';
import { useRef, useState, useEffect } from 'react';
import styles from './Hero.module.css';

const videos = [
  'https://res.cloudinary.com/dd9yqqsa4/video/upload/v1771341745/hero_kcxn3g.mp4'
];

export default function Hero() {

  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [networkTier, setNetworkTier] = useState("fast");



  /* ========= NETWORK INTELLIGENCE ========= */

  useEffect(() => {

    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    let tier = "fast";

    if (connection) {

      if (connection.saveData) tier = "slow";

      else if (
        connection.effectiveType === "2g" ||
        connection.effectiveType === "3g"
      ) tier = "slow";

      else if (connection.effectiveType === "4g") tier = "medium";
    }

    // detect weak devices
    if (navigator.deviceMemory && navigator.deviceMemory <= 2) {
      tier = "slow";
    }

    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
      tier = "slow";
    }

    setNetworkTier(tier);

  }, []);



  /* ========= SMART PRELOAD ========= */

  useEffect(() => {

    if (networkTier === "slow") return;

    const nextIndex = (index + 1) % videos.length;

    const vid = document.createElement('video');

    vid.src = videos[nextIndex];

    // preload only metadata unless fast network
    vid.preload = networkTier === "fast"
      ? "auto"
      : "metadata";

  }, [index, networkTier]);



  /* ========= HANDLE VIDEO SWITCH ========= */

  const handleEnd = () => {

    const next = (index + 1) % videos.length;

    setIndex(next);

    const video = videoRef.current;

    if (!video) return;

    video.src = videos[next];

    video.play().catch(()=>{});
  };



  return (
    <section className={styles.hero}>

      <video
        ref={videoRef}
        className={styles.video}
        src={videos[index]}
        autoPlay
        muted
        playsInline

        /* ⭐ KEY CHANGE */
        preload={networkTier === "fast" ? "metadata" : "none"}

        onEnded={handleEnd}
      />

      <div className={styles.overlay}>

        <h3>Elite MMA & Calisthenics Training</h3>

        <h1>YOUR JOURNEY TO PEAK FITNESS</h1>

        <p>
          Professional MMA and calisthenics training focused on strength,
          discipline, mobility, and real-world performance for all fitness levels.
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
