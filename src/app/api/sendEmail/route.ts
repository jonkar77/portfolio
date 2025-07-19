// app/api/sendEmail/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { email, subject, message } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use custom SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject,
      text: message,
      replyTo: email,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// Optional — handle unsupported methods
export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
