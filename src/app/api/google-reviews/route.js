import { NextResponse } from 'next/server';

import {
  GOOGLE_REVIEWS_REVALIDATE_SECONDS,
  getGoogleReviews,
} from '@/lib/google-reviews';

const SUCCESS_CACHE_CONTROL = `public, s-maxage=${GOOGLE_REVIEWS_REVALIDATE_SECONDS}, stale-while-revalidate=${GOOGLE_REVIEWS_REVALIDATE_SECONDS * 4}`;

export async function GET() {
  try {
    const data = await getGoogleReviews();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': SUCCESS_CACHE_CONTROL,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || 'Failed to fetch Google reviews.' },
      {
        status: error?.status || 500,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    );
  }
}
