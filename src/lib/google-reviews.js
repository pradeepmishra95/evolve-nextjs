import { unstable_cache } from 'next/cache';

export const GOOGLE_REVIEWS_REVALIDATE_SECONDS = 60 * 30;

const GOOGLE_REVIEW_FIELD_MASK =
  'displayName,rating,userRatingCount,googleMapsUri,reviews';

function createGoogleReviewsError(message, status = 500) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function trimReviewText(value, maxLength = 280) {
  if (typeof value !== 'string') {
    return '';
  }

  const normalized = value.replace(/\s+/g, ' ').trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength - 3).trimEnd()}...`;
}

function normalizeGoogleReviewsPayload(data) {
  const reviews = Array.isArray(data?.reviews)
    ? data.reviews
        .map((review) => {
          const text =
            trimReviewText(review?.text?.text) ||
            trimReviewText(review?.originalText?.text);

          return {
            id: review?.name || review?.googleMapsUri || review?.publishTime,
            name:
              review?.authorAttribution?.displayName?.trim() ||
              'Google reviewer',
            authorUri: review?.authorAttribution?.uri || null,
            rating: review?.rating ?? null,
            relativePublishTimeDescription:
              review?.relativePublishTimeDescription || 'Google review',
            text,
            googleMapsUri: review?.googleMapsUri || null,
            flagContentUri: review?.flagContentUri || null,
          };
        })
        .filter((review) => review.text)
        .slice(0, 4)
    : [];

  return {
    placeName: data?.displayName?.text || 'Google Reviews',
    rating: data?.rating ?? null,
    userRatingCount: data?.userRatingCount ?? null,
    googleMapsUri: data?.googleMapsUri || null,
    reviews,
  };
}

async function fetchGoogleReviewsUncached() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  const languageCode = process.env.GOOGLE_PLACES_LANGUAGE_CODE || 'en';
  const regionCode = process.env.GOOGLE_PLACES_REGION_CODE;

  if (!apiKey || !placeId) {
    throw createGoogleReviewsError('Google Places credentials are missing.');
  }

  const url = new URL(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`
  );
  url.searchParams.set('languageCode', languageCode);

  if (regionCode) {
    url.searchParams.set('regionCode', regionCode);
  }

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': GOOGLE_REVIEW_FIELD_MASK,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw createGoogleReviewsError(
      data?.error?.message || 'Google Places request failed.',
      response.status || 502
    );
  }

  return normalizeGoogleReviewsPayload(data);
}

const getCachedGoogleReviews = unstable_cache(
  fetchGoogleReviewsUncached,
  ['google-reviews'],
  {
    revalidate: GOOGLE_REVIEWS_REVALIDATE_SECONDS,
  }
);

export async function getGoogleReviews() {
  return getCachedGoogleReviews();
}
