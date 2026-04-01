import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const GOOGLE_REVIEW_FIELD_MASK =
  'displayName,rating,userRatingCount,googleMapsUri,reviews';

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

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;
    const languageCode = process.env.GOOGLE_PLACES_LANGUAGE_CODE || 'en';
    const regionCode = process.env.GOOGLE_PLACES_REGION_CODE;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: 'Google Places credentials are missing.' },
        { status: 500 }
      );
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
      cache: 'no-store',
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: data?.error?.message || 'Google Places request failed.',
        },
        { status: response.status || 502 }
      );
    }

    const reviews = Array.isArray(data?.reviews)
      ? data.reviews
          .map((review) => {
            const text =
              trimReviewText(review?.text?.text) ||
              trimReviewText(review?.originalText?.text);

            return {
              id: review?.name || review?.googleMapsUri || review?.publishTime,
              name:
                review?.authorAttribution?.displayName?.trim() || 'Google reviewer',
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

    return NextResponse.json({
      placeName: data?.displayName?.text || 'Google Reviews',
      rating: data?.rating ?? null,
      userRatingCount: data?.userRatingCount ?? null,
      googleMapsUri: data?.googleMapsUri || null,
      reviews,
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch Google reviews.' },
      { status: 500 }
    );
  }
}
