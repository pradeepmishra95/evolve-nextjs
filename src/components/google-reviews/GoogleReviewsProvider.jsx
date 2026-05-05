'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const GOOGLE_REVIEWS_ENABLED =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_ENABLED === 'true';

const INITIAL_CONTEXT_VALUE = {
  googleReviews: null,
  hasReviews: false,
  hasSummary: false,
  status: 'loading',
};

const FALLBACK_CONTEXT_VALUE = {
  googleReviews: null,
  hasReviews: false,
  hasSummary: false,
  status: 'fallback',
};

const GoogleReviewsContext = createContext(INITIAL_CONTEXT_VALUE);

export default function GoogleReviewsProvider({ children }) {
  const [value, setValue] = useState(
    GOOGLE_REVIEWS_ENABLED ? INITIAL_CONTEXT_VALUE : FALLBACK_CONTEXT_VALUE
  );

  useEffect(() => {
    if (!GOOGLE_REVIEWS_ENABLED) {
      setValue(FALLBACK_CONTEXT_VALUE);
      return undefined;
    }

    let active = true;
    const controller = new AbortController();

    async function loadGoogleReviews() {
      try {
        const response = await fetch('/api/google-reviews', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Google reviews');
        }

        const data = await response.json();

        if (!active) {
          return;
        }

        const hasSummary =
          typeof data?.rating === 'number' &&
          typeof data?.userRatingCount === 'number';
        const hasReviews =
          Array.isArray(data?.reviews) && data.reviews.length > 0;

        if (!hasSummary && !hasReviews) {
          setValue(FALLBACK_CONTEXT_VALUE);
          return;
        }

        setValue({
          googleReviews: data,
          hasReviews,
          hasSummary,
          status: 'ready',
        });
      } catch (error) {
        if (active && error?.name !== 'AbortError') {
          setValue(FALLBACK_CONTEXT_VALUE);
        }
      }
    }

    loadGoogleReviews();

    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  return (
    <GoogleReviewsContext.Provider value={value}>
      {children}
    </GoogleReviewsContext.Provider>
  );
}

export function useGoogleReviews() {
  return useContext(GoogleReviewsContext);
}
