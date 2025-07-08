import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
   const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for port 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log('✅ Email sent successfully to:', process.env.EMAIL_RECEIVER || process.env.EMAIL_USER);
    return NextResponse.json({ message: 'Email sent successfully ✅' }, { status: 200 });

  } catch (error: any) {
    console.error('❌ Email error:', error.message || error);
    return NextResponse.json(
      { message: 'Error sending email ❌', error: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
