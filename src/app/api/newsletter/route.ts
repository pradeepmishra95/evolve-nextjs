import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json();

  console.log('Newsletter signup:', payload);
  // Connect to Mailchimp / Resend mailing list here.

  return NextResponse.json({ success: true });
}
