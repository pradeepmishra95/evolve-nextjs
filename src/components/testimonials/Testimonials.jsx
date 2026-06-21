'use client';

import { useGoogleReviews } from '@/components/google-reviews/GoogleReviewsProvider';
import Reveal from '@/components/reveal/Reveal';

import styles from './Testimonials.module.css';

const fallbackTestimonials = [
  {
    signal: 'Wanted technique correction',
    quote:
      'The coaches actually correct technique instead of just making the class exhausting.',
    name: 'Rahul',
    role: 'Working professional',
    program: 'Calisthenics',
  },
  {
    signal: 'Needed a beginner-safe start',
    quote:
      'I started with zero combat background, and the coaches made the first few classes feel manageable.',
    name: 'Anita',
    role: 'First-time trainee',
    program: 'MMA',
  },
  {
    signal: 'Wanted movement coaching',
    quote:
      'There is real coaching on landings, control, and confidence, so the movement work feels purposeful.',
    name: 'Amit',
    role: 'Weekend athlete',
    program: 'Movement',
  },
  {
    signal: 'Needed something positive for a child',
    quote:
      'My child enjoys the drills, and I can already see more confidence and focus outside training too.',
    name: 'Pooja',
    role: 'Parent',
    program: 'Kids Batch',
  },
];

function formatRating(value) {
  return typeof value === 'number' ? value.toFixed(1) : null;
}

function shortenQuote(text, maxLength = 120) {
  if (typeof text !== 'string') return '';
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

export default function Testimonials() {
  const { googleReviews, hasReviews } = useGoogleReviews();
  const isGoogleSource = hasReviews && googleReviews;
  const visibleReviews = (
    isGoogleSource ? googleReviews.reviews : fallbackTestimonials
  ).slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <Reveal className={styles.header} distance={22}>
          <p className={styles.eyebrow}>
            {isGoogleSource ? 'Google Reviews' : 'Member Feedback'}
          </p>
          <h2>
            {isGoogleSource
              ? 'Reviews give a quick first impression before the first visit.'
              : 'What people notice in the first few classes matters most.'}
          </h2>
          <p className={styles.lead}>
            {isGoogleSource
              ? 'A few public reviews usually tell new visitors enough to decide whether to visit.'
              : 'The useful signal is whether people mention clarity, coaching, and a reason to return.'}
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
        ) : null}

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
                &ldquo;{shortenQuote(isGoogleSource ? item.text : item.quote)}&rdquo;
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
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
