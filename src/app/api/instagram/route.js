import { NextResponse } from 'next/server';

export async function GET() {
  const ACCESS_TOKEN = process.env.INSTAGRAM_TOKEN;

  if (!ACCESS_TOKEN) {
    return NextResponse.json(
      { error: "Instagram token missing" },
      { status: 500 }
    );
  }

  let allMedia = [];
  let nextUrl = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,timestamp&limit=50&access_token=${ACCESS_TOKEN}`;

  try {
    // Loop through all pages
    while (nextUrl) {
      const response = await fetch(nextUrl, { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Failed to fetch");
      }

      allMedia = [...allMedia, ...data.data];

      // Check if next page exists
      nextUrl = data.paging?.next || null;
    }

    // Filter only VIDEO and sort latest first
    const videos = allMedia
      .filter(item => item.media_type === "VIDEO")
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return NextResponse.json(videos);

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}


