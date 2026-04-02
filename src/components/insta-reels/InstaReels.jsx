'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { FaInstagram } from 'react-icons/fa';

import { INSTAGRAM_PROFILE_URL } from '@/lib/links';
import styles from './InstaReels.module.css';

const PLACEHOLDER_COUNT = 3;

function formatClipIndex(index) {
  return `Reel ${String(index + 1).padStart(2, '0')}`;
}

function getClipType(video) {
  return video.media_product_type === 'REELS' ? 'Instagram Reel' : 'Training Clip';
}

function getReelKey(video, index) {
  return video.id || `reel-${index}`;
}

export default function InstaReels() {
  const [reels, setReels] = useState([]);
  const [status, setStatus] = useState('loading');
  const [loadedVideoKeys, setLoadedVideoKeys] = useState({});
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const loadedVideoKeysRef = useRef(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function syncViewport() {
      setIsMobile(window.innerWidth < 768);
    }

    syncViewport();
    window.addEventListener('resize', syncViewport);

    async function fetchReels() {
      try {
        const response = await fetch('/api/instagram', { cache: 'no-store' });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.error || 'Instagram feed request failed.');
        }

        loadedVideoKeysRef.current = new Set();
        setLoadedVideoKeys({});

        if (Array.isArray(data) && data.length > 0) {
          setReels(data);
          setStatus('ready');
          return;
        }

        setReels([]);
        setStatus('empty');
      } catch {
        setReels([]);
        setStatus('error');
      }
    }

    fetchReels();
    return () => window.removeEventListener('resize', syncViewport);
  }, []);

  const ensureVideoLoaded = useCallback((index) => {
    const video = videoRefs.current[index];
    const reel = reels[index];

    if (!video || !reel) return false;

    const key = getReelKey(reel, index);

    if (loadedVideoKeysRef.current.has(key)) {
      return true;
    }

    const source = video.querySelector('source');

    if (!source) return false;

    source.src = reel.media_url;
    video.load();
    loadedVideoKeysRef.current.add(key);
    setLoadedVideoKeys((prev) =>
      prev[key] ? prev : { ...prev, [key]: true }
    );

    return false;
  }, [reels]);

  const playWhenReady = (video, { muted }) => {
    const startPlayback = () => {
      video.muted = muted;
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      startPlayback();
      return;
    }

    video.addEventListener('loadeddata', startPlayback, { once: true });
  };

  const playVideo = (index) => {
    const targetVideo = videoRefs.current[index];

    if (!targetVideo) return;

    ensureVideoLoaded(index);

    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        playWhenReady(v, { muted: false });
      } else {
        v.pause();
        v.currentTime = 0;
        v.muted = true;
      }
    });
  };

  const stopVideo = (index) => {
    const v = videoRefs.current[index];

    if (!v) return;

    v.pause();
    v.currentTime = 0;
    v.muted = true;
  };

  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const video = entry.target;
          const index = Number(video.dataset.index);

          if (entry.isIntersecting) {
            ensureVideoLoaded(index);
            playWhenReady(video, { muted: true });
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      {
        threshold: 0.75,
      }
    );

    videoRefs.current.forEach((v) => v && observer.observe(v));

    return () => observer.disconnect();
  }, [ensureVideoLoaded, reels, isMobile]);

  const scrollLeft = () => {
    if (!containerRef.current) return;

    containerRef.current.scrollBy({
      left: -350,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    if (!containerRef.current) return;

    containerRef.current.scrollBy({
      left: 350,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.reelsSection}>
      <div className={styles.header}>
        <div className={styles.headerCopy}>
          <p className={styles.eyebrow}>Training Highlights</p>
          <h2 className={styles.title}>See the training atmosphere before you visit.</h2>
          <p className={styles.lead}>
            Real reels create trust faster than promises do. Browse recent clips,
            feel the energy of the sessions, and get a clearer sense of how the
            training center moves.
          </p>
        </div>

        <div className={styles.headerSide}>
          <div className={styles.statusCard}>
            <span className={styles.statusLabel}>Live from Instagram</span>
            <strong>
              {status === 'ready' ? `${reels.length} reels live` : '@evolve_mmacalisthenics'}
            </strong>
          </div>

          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaInstagram aria-hidden="true" />
            Open Instagram
          </a>
        </div>
      </div>

      {status === 'loading' ? (
        <div className={styles.placeholderRow} aria-hidden="true">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
            <div key={index} className={styles.placeholderCard}>
              <div className={styles.placeholderGlow} />
            </div>
          ))}
        </div>
      ) : null}

      {status === 'error' || status === 'empty' ? (
        <div className={styles.fallback}>
          <div>
            <p className={styles.fallbackEyebrow}>Instagram Feed</p>
            <h3>
              {status === 'error'
                ? 'Live reels are temporarily unavailable.'
                : 'Fresh reels will appear here soon.'}
            </h3>
            <p>
              {status === 'error'
                ? 'The Instagram feed did not load this time, but the profile is still active and worth checking directly.'
                : 'The section is ready for reels, but there is no video feed to display right now.'}
            </p>
          </div>

          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaInstagram aria-hidden="true" />
            View Profile
          </a>
        </div>
      ) : null}

      {status === 'ready' ? (
        <div className={styles.wrapper}>
          <button
            type="button"
            onClick={scrollLeft}
            className={styles.arrowLeft}
            aria-label="Scroll reels left"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={scrollRight}
            className={styles.arrowRight}
            aria-label="Scroll reels right"
          >
            ›
          </button>

          <div ref={containerRef} className={styles.reelsContainer}>
            {reels.map((video, index) => (
              <article
                key={video.id || index}
                className={styles.reelCard}
              >
                <div className={styles.videoFrame}>
                  {(() => {
                    const isLoaded = Boolean(loadedVideoKeys[getReelKey(video, index)]);

                    return (
                      <div className={styles.badgeRow}>
                        <span className={styles.badge}>{formatClipIndex(index)}</span>
                        <span className={styles.badgeMuted}>
                          {isMobile
                            ? isLoaded
                              ? 'Autoplays muted'
                              : 'Loads on view'
                            : isLoaded
                              ? 'Hover for sound'
                              : 'Hover to load'}
                        </span>
                      </div>
                    );
                  })()}

                  <div className={styles.videoOverlay} />

                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    data-index={index}
                    poster={video.thumbnail}
                    playsInline
                    loop
                    muted
                    preload="none"
                    controls={Boolean(loadedVideoKeys[getReelKey(video, index)])}
                    controlsList="nodownload noplaybackrate noremoteplayback"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                    className={styles.video}
                    onMouseEnter={() => !isMobile && playVideo(index)}
                    onMouseLeave={() => !isMobile && stopVideo(index)}
                    onFocus={() => ensureVideoLoaded(index)}
                    onClick={() => ensureVideoLoaded(index)}
                  >
                    <source type="video/mp4" />
                  </video>
                </div>

                <div className={styles.cardMeta}>
                  <div>
                    <p className={styles.cardType}>{getClipType(video)}</p>
                    <p className={styles.cardHint}>
                      Real session footage from the training center floor.
                    </p>
                  </div>

                  {video.permalink ? (
                    <a
                      href={video.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      Open
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
