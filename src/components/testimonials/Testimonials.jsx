'use client';

import { useEffect, useState } from 'react';

import Reveal from '@/components/reveal/Reveal';

import styles from './Testimonials.module.css';

const fallbackTestimonials = [
  {
    signal: 'Wanted technique correction',
    quote:
      'The coaches actually correct technique instead of just making the class exhausting. That is what made me stay.',
    name: 'Rahul',
    role: 'Working professional',
    program: 'Calisthenics',
    takeaway: 'Stayed because the coaching felt attentive instead of generic.',
  },
  {
    signal: 'Needed a beginner-safe start',
    quote:
      'I started with zero combat background. The coaches explained the structure, corrected the basics, and made the first few classes feel manageable.',
    name: 'Anita',
    role: 'First-time trainee',
    program: 'MMA',
    takeaway: 'Felt coached from the start instead of feeling lost in the room.',
  },
  {
    signal: 'Wanted movement coaching',
    quote:
      'The parkour sessions are not random tricks. There is real coaching on landings, control, and confidence, which makes the training feel much safer and more purposeful.',
    name: 'Amit',
    role: 'Weekend athlete',
    program: 'Parkour',
    takeaway: 'Noticed that the sessions were coached in detail, not just high-energy.',
  },
  {
    signal: 'Needed something positive for a child',
    quote:
      'My child enjoys the discipline and movement drills, and I can see more confidence and focus outside training too.',
    name: 'Pooja',
    role: 'Parent',
    program: 'Kids Batch',
    takeaway: 'Saw the value beyond the sessions as well, not just during class.',
  },
];

function formatRating(value) {
  return typeof value === 'number' ? value.toFixed(1) : null;
}

export default function Testimonials() {
  const [googleReviews, setGoogleReviews] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;

    async function loadGoogleReviews() {
      try {
        const response = await fetch('/api/google-reviews', { cache: 'no-store' });

        if (!response.ok) {
          throw new Error('Failed to fetch Google reviews');
        }

        const data = await response.json();

        if (cancelled) {
          return;
        }

        if (Array.isArray(data?.reviews) && data.reviews.length > 0) {
          setGoogleReviews(data);
          setStatus('ready');
          return;
        }

        setStatus('fallback');
      } catch {
        if (!cancelled) {
          setStatus('fallback');
        }
      }
    }

    loadGoogleReviews();

    return () => {
      cancelled = true;
    };
  }, []);

  const isGoogleSource = status === 'ready' && googleReviews;
  const visibleReviews = isGoogleSource ? googleReviews.reviews : fallbackTestimonials;

  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <Reveal className={styles.header} distance={22}>
          <p className={styles.eyebrow}>
            {isGoogleSource ? 'Google Reviews' : 'Member Feedback'}
          </p>
          <h2>
            {isGoogleSource
              ? 'Public reviews give a first impression before the first visit.'
              : 'The strongest signal is what people notice after a few classes.'}
          </h2>
          <p className={styles.lead}>
            {isGoogleSource
              ? 'These Google reviews help new visitors understand the place, people, and training atmosphere in public words, not brand copy.'
              : 'The useful part of feedback is whether people mention clarity, attention, safety, and a reason to keep returning.'}
          </p>
        </Reveal>

        {isGoogleSource ? (
          <Reveal className={styles.summaryPanel} delay={70} distance={18}>
            <div className={styles.summaryGrid}>
              <div className={styles.summaryCard}>
                <span>Overall rating</span>
                <strong>
                  {formatRating(googleReviews.rating) || 'N/A'}
                  {formatRating(googleReviews.rating) ? '/5' : ''}
                </strong>
              </div>

              <div className={styles.summaryCard}>
                <span>Google review count</span>
                <strong>{googleReviews.userRatingCount || 'N/A'}</strong>
              </div>

              <div className={styles.summaryCard}>
                <span>Place</span>
                <strong>{googleReviews.placeName}</strong>
              </div>
            </div>

            <div className={styles.summaryFooter}>
              <span className={styles.sourceBadge}>Source: Google Maps</span>
              <p className={styles.summaryNote}>
                Google sorts these reviews by relevance.
              </p>
              {googleReviews.googleMapsUri ? (
                <a
                  href={googleReviews.googleMapsUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.providerLink}
                >
                  View more on Google Maps
                </a>
              ) : null}
            </div>
          </Reveal>
        ) : (
          <Reveal className={styles.contextPanel} delay={70} distance={18}>
            <p className={styles.contextTitle}>
              What people usually care about before they join
            </p>
            <ul className={styles.contextList}>
              <li>Will I feel lost if I am a beginner?</li>
              <li>Will anyone actually correct my technique?</li>
              <li>Can I fit this around work, school, or family schedules?</li>
            </ul>
          </Reveal>
        )}

        <div className={styles.grid}>
          {visibleReviews.map((item, index) => (
            <Reveal
              key={
                isGoogleSource
                  ? item.id || `${item.name}-${item.relativePublishTimeDescription}`
                  : `${item.name}-${item.program}`
              }
              className={styles.card}
              delay={index * 70}
              distance={20}
            >
              <div className={styles.topRow}>
                <span className={styles.signal}>
                  {isGoogleSource
                    ? `${formatRating(item.rating) || 'N/A'}${
                        formatRating(item.rating) ? '/5 rating' : ''
                      }`
                    : item.signal}
                </span>
                <span className={styles.program}>
                  {isGoogleSource
                    ? item.relativePublishTimeDescription
                    : item.program}
                </span>
              </div>

              <p className={styles.quote}>
                &ldquo;{isGoogleSource ? item.text : item.quote}&rdquo;
              </p>

              <div className={styles.person}>
                {isGoogleSource && item.authorUri ? (
                  <a
                    href={item.authorUri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.authorLink}
                  >
                    {item.name}
                  </a>
                ) : (
                  <strong>{item.name}</strong>
                )}
                <span>{isGoogleSource ? 'Google reviewer' : item.role}</span>
              </div>

              {isGoogleSource ? (
                <div className={styles.reviewActions}>
                  {item.googleMapsUri ? (
                    <a
                      href={item.googleMapsUri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.inlineLink}
                    >
                      Read on Google Maps
                    </a>
                  ) : null}
                  {item.flagContentUri ? (
                    <a
                      href={item.flagContentUri}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.inlineLink}
                    >
                      Report review
                    </a>
                  ) : null}
                </div>
              ) : (
                <>
                  <p className={styles.takeawayLabel}>Why it mattered</p>
                  <p className={styles.takeaway}>{item.takeaway}</p>
                </>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
