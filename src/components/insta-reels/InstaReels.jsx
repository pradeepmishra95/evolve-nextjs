'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './InstaReels.module.css';

export default function InstaReels() {

  const [reels, setReels] = useState([]);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  // const [slowNetwork, setSlowNetwork] = useState(false);


  useEffect(() => {

    setIsMobile(window.innerWidth < 768);

    async function fetchReels() {
      const response = await fetch('/api/instagram');
      const data = await response.json();
      console.log("REELS DATA 👉", data); // 👈 Yaha

      if (Array.isArray(data)) {
        setReels(data);
      }
    }

    fetchReels();
  }, []);


  //   useEffect(() => {

  //  const connection = navigator.connection;

  //  if (connection) {
  //    setSlowNetwork(
  //      connection.saveData ||
  //      connection.effectiveType === "2g" ||
  //      connection.effectiveType === "3g"
  //    );
  //  }

  // }, []);



  /* ---------- DESKTOP HOVER ---------- */

  const playVideo = (index) => {

    videoRefs.current.forEach((v, i) => {

      if (!v) return;

      if (i === index) {
        v.muted = false;
        v.play().catch(() => { });
      } else {
        v.pause();
        v.currentTime = 0;
      }

    });

  };

  const stopVideo = (index) => {
    const v = videoRefs.current[index];
    if (!v) return;

    v.pause();
    v.currentTime = 0;
  };



  /* ---------- MOBILE AUTOPLAY ---------- */

  useEffect(() => {

    if (!isMobile) return;

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach(entry => {

          const video = entry.target;

          if (entry.isIntersecting) {

            video.muted = false; // SOUND ON
            video.play().catch(() => { });

          } else {

            video.pause();
            video.currentTime = 0;

          }

        });

      },
      {
        threshold: 0.75
      }
    );

    videoRefs.current.forEach(v => v && observer.observe(v));

    return () => observer.disconnect();

  }, [reels, isMobile]);



  /* ---------- SCROLL BUTTONS ---------- */

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -350,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 350,
      behavior: 'smooth'
    });
  };


  if (!reels.length) return null;



  return (
    <section className={styles.reelsSection}>

      <h2 className={styles.title}>Training Highlights</h2>


      <div className={styles.wrapper}>

        {/* ARROWS */}

        <button
          onClick={scrollLeft}
          className={styles.arrowLeft}
        >
          ‹
        </button>

        <button
          onClick={scrollRight}
          className={styles.arrowRight}
        >
          ›
        </button>



        <div
          ref={containerRef}
          className={styles.reelsContainer}
        >

          {reels.map((video, index) => (

            <div key={video.id || index} className={styles.reelCard}>

             <video
                ref={(el) => videoRefs.current[index] = el}
                poster={video.thumbnail}
                playsInline
                loop
                muted={!isMobile}
                preload="none"
                controls
                controlsList="nodownload noplaybackrate noremoteplayback "
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                className={styles.video}
                onMouseEnter={() => !isMobile && playVideo(index)}
                onMouseLeave={() => !isMobile && stopVideo(index)}
              >
                <source src={video.media_url} type="video/mp4" />
              </video>



            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
