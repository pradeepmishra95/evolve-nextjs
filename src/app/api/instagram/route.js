import { NextResponse } from "next/server";

export async function GET() {
  try {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;

    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}`
    );

    const data = await res.json();

    const reels = data.data
      .filter((item) => item.media_type === "VIDEO")
      .map((item) => ({
        id: item.id,
        media_url: item.media_url,
        thumbnail: item.thumbnail_url,
        permalink: item.permalink,
      }));

    return NextResponse.json(reels);
  } catch {
    return NextResponse.json({ error: "Failed to fetch reels" }, { status: 500 });
  }
}
