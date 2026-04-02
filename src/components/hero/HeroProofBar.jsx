'use client';

import { useEffect, useState } from 'react';

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
  const [googleSummary, setGoogleSummary] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadGoogleSummary() {
      try {
        const response = await fetch('/api/google-reviews', { cache: 'no-store' });

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        if (
          cancelled ||
          typeof data?.rating !== 'number' ||
          typeof data?.userRatingCount !== 'number'
        ) {
          return;
        }

        setGoogleSummary({
          label: 'Google reviews',
          value: `${formatRating(data.rating)}/5 rating`,
          detail: `${formatReviewCount(data.userRatingCount)} on Google Maps`,
          href: data.googleMapsUri || null,
        });
      } catch {
        // Quiet fallback keeps the hero stable even if reviews are unavailable.
      }
    }

    loadGoogleSummary();

    return () => {
      cancelled = true;
    };
  }, []);

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
