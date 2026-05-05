'use client';

import { useGoogleReviews } from '@/components/google-reviews/GoogleReviewsProvider';

import styles from './Hero.module.css';

const fallbackProofs = [
  {
    label: 'Trial class',
    value: 'Visit before joining',
    detail: 'See the pace before deciding.',
  },
  {
    label: 'Coach-led',
    value: 'Attention in every batch',
    detail: 'Corrections, demos, and clear class flow.',
  },
  {
    label: 'Timings',
    value: '6 AM - 10 PM',
    detail: 'Morning and evening training options.',
  },
  {
    label: 'Location',
    value: 'Near Lower Malad Metro',
    detail: 'Easy access from Malad West.',
  },
];

function formatRating(value) {
  return typeof value === 'number' ? value.toFixed(1) : null;
}

function formatReviewCount(value) {
  if (typeof value !== 'number') {
    return null;
  }

  return `${value}+ reviews`;
}

export default function HeroProofBar() {
  const { googleReviews, hasSummary } = useGoogleReviews();
  const googleSummary = hasSummary
    ? {
        label: 'Google reviews',
        value: `${formatRating(googleReviews.rating)}/5 rating`,
        detail: `${formatReviewCount(googleReviews.userRatingCount)} on Google Maps`,
        href: googleReviews.googleMapsUri || null,
      }
    : null;

  const proofItems = googleSummary
    ? [googleSummary, ...fallbackProofs.slice(1)]
    : fallbackProofs;

  return (
    <div className={styles.proofBar}>
      {proofItems.map((item) => {
        const content = (
          <>
            <span className={styles.proofLabel}>{item.label}</span>
            <strong className={styles.proofValue}>{item.value}</strong>
            <small className={styles.proofDetail}>{item.detail}</small>
          </>
        );

        if (item.href) {
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.proofCard}
            >
              {content}
            </a>
          );
        }

        return (
          <div key={item.label} className={styles.proofCard}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
