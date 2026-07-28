'use client';

import { useGoogleReviews } from '@/components/google-reviews/GoogleReviewsProvider';
import Reveal from '@/components/reveal/Reveal';
import { GOOGLE_MAPS_URL } from '@/lib/links';

import styles from './Testimonials.module.css';

function formatRating(value) {
  return typeof value === 'number' ? value.toFixed(1) : null;
}

function shortenQuote(text, maxLength = 96) {
  if (typeof text !== 'string') return '';
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

export default function Testimonials() {
  const { googleReviews, hasReviews } = useGoogleReviews();
  const isGoogleSource = hasReviews && googleReviews;
  const visibleReviews = isGoogleSource ? googleReviews.reviews.slice(0, 3) : [];

  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <Reveal className={styles.header} distance={22}>
          <p className={styles.eyebrow}>
            Google Reviews
          </p>
          <h2>
            What members are saying.
          </h2>
        </Reveal>

        {isGoogleSource ? (
          <Reveal className={styles.summaryPanel} delay={70} distance={18}>
            <div className={styles.ratingSummary}>
              <strong>
                {formatRating(googleReviews.rating) || 'N/A'}
                {formatRating(googleReviews.rating) ? '/5 on Google' : ' on Google'}
              </strong>
              <span>{googleReviews.userRatingCount || 'No'} reviews</span>
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
            <p className={styles.contextTitle}>Live reviews are temporarily unavailable.</p>
            <p className={styles.summaryNote}>
              We do not show invented fallback testimonials. Open Google Maps to see currently
              published reviews and location details.
            </p>
            <div className={styles.summaryFooter}>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.providerLink}
              >
                View on Google Maps
              </a>
            </div>
          </Reveal>
        )}

        <div className={styles.grid}>
          {visibleReviews.map((item, index) => (
            <Reveal
              key={item.id || `${item.name}-${item.relativePublishTimeDescription}`}
              className={styles.card}
              delay={index * 70}
              distance={20}
            >
              <div className={styles.topRow}>
                <span className={styles.signal}>
                  {`${formatRating(item.rating) || 'N/A'}${
                    formatRating(item.rating) ? '/5 rating' : ''
                  }`}
                </span>
                <span className={styles.program}>
                  {item.relativePublishTimeDescription}
                </span>
              </div>

              <p className={styles.quote}>
                &ldquo;{shortenQuote(item.text)}&rdquo;
              </p>

              <div className={styles.person}>
                {item.authorUri ? (
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
                <span>Google reviewer</span>
              </div>

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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
