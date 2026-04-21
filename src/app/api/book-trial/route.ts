import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json();

  console.log('Book trial submission:', payload);
  // Connect to email service (Nodemailer / Resend) or Google Sheets webhook here.

  return NextResponse.json({ success: true });
}
