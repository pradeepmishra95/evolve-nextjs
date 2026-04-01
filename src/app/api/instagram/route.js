import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.json(
        { error: 'Instagram access token is missing.' },
        { status: 500 }
      );
    }

    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_product_type,media_url,thumbnail_url,permalink&access_token=${token}`,
      {
        cache: 'no-store',
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        {
          error: data?.error?.message || 'Instagram API request failed.',
        },
        { status: res.status || 502 }
      );
    }

    if (!Array.isArray(data?.data)) {
      return NextResponse.json(
        { error: 'Instagram API returned an unexpected payload.' },
        { status: 502 }
      );
    }

    const reels = data.data
      .filter((item) => item.media_type === 'VIDEO' && item.media_url)
      .map((item) => ({
        id: item.id,
        media_url: item.media_url,
        thumbnail: item.thumbnail_url,
        permalink: item.permalink,
        media_product_type: item.media_product_type,
      }));

    return NextResponse.json(reels);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch reels' }, { status: 500 });
  }
}
