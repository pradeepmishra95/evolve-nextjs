import { NextResponse } from 'next/server';

const MEDIA_FIELDS = 'id,caption,media_type,media_product_type,media_url,thumbnail_url,permalink';
const MAX_MEDIA_PAGES = 10;

function normalizeReels(items) {
  const videoItems = items.filter((item) => item.media_type === 'VIDEO' && item.media_url);
  const reelItems = videoItems.filter((item) => item.media_product_type === 'REELS');
  const itemsToReturn = reelItems.length ? reelItems : videoItems;

  return itemsToReturn
    .map((item) => ({
      id: item.id,
      media_url: item.media_url,
      thumbnail: item.thumbnail_url,
      permalink: item.permalink,
      media_product_type: item.media_product_type,
    }));
}

async function fetchPagedMedia(url, fallbackMessage) {
  const items = [];
  let nextUrl = url;
  let pageCount = 0;

  while (nextUrl && pageCount < MAX_MEDIA_PAGES) {
    const res = await fetch(nextUrl, { cache: 'no-store' });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error?.message || fallbackMessage);
    }

    if (!Array.isArray(data?.data)) {
      throw new Error('Instagram media payload was not in the expected format.');
    }

    items.push(...data.data);
    nextUrl = typeof data?.paging?.next === 'string' ? data.paging.next : null;
    pageCount += 1;
  }

  return items;
}

async function fetchBusinessAccountReels(token) {
  const pagesRes = await fetch(
    `https://graph.facebook.com/me/accounts?fields=id,name,instagram_business_account{id,username}&access_token=${token}`,
    {
      cache: 'no-store',
    }
  );

  const pagesData = await pagesRes.json();

  if (!pagesRes.ok) {
    throw new Error(pagesData?.error?.message || 'Failed to load connected Facebook Pages.');
  }

  if (!Array.isArray(pagesData?.data)) {
    throw new Error('Facebook Pages payload was not in the expected format.');
  }

  const instagramAccount = pagesData.data
    .map((page) => page.instagram_business_account)
    .find((account) => account?.id);

  if (!instagramAccount?.id) {
    throw new Error('No Instagram business account is linked to the current token.');
  }

  const mediaItems = await fetchPagedMedia(
    `https://graph.facebook.com/v23.0/${instagramAccount.id}/media?fields=${MEDIA_FIELDS}&access_token=${token}`,
    'Instagram business media request failed.'
  );

  return normalizeReels(mediaItems);
}

async function fetchBasicDisplayReels(token) {
  const mediaItems = await fetchPagedMedia(
    `https://graph.instagram.com/me/media?fields=${MEDIA_FIELDS}&access_token=${token}`,
    'Instagram API request failed.'
  );

  return normalizeReels(mediaItems);
}

export async function GET() {
  try {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: 'Instagram access token is missing.' },
        { status: 500 }
      );
    }

    try {
      const reels = await fetchBusinessAccountReels(token);

      return NextResponse.json(reels);
    } catch (businessError) {
      try {
        const reels = await fetchBasicDisplayReels(token);

        return NextResponse.json(reels);
      } catch (basicDisplayError) {
        return NextResponse.json(
          {
            error:
              basicDisplayError instanceof Error
                ? basicDisplayError.message
                : 'Instagram API request failed.',
            fallback_error:
              businessError instanceof Error ? businessError.message : null,
          },
          { status: 502 }
        );
      }
    }
  } catch {
    return NextResponse.json({ error: 'Failed to fetch reels' }, { status: 500 });
  }
}
