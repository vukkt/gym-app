// src/app/api/bookings/route.js
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { resend } from '@/lib/resend';

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  const { classId } = await req.json();
  if (!classId) {
    return NextResponse.json({ error: 'Missing classId' }, { status: 400 });
  }

  // 1  find the class + current bookings
  const gymClass = await prisma.gymClass.findUnique({
    where: { id: classId },
    include: { bookings: true },
  });
  if (!gymClass) {
    return NextResponse.json({ error: 'Class not found' }, { status: 404 });
  }
  if (gymClass.bookings.length >= gymClass.slots) {
    return NextResponse.json({ error: 'Class full' }, { status: 409 });
  }

  // 2  persist booking
  const booking = await prisma.booking.create({
    data: { userId: session.user.id, classId },
  });

  // 3  send confirmation e‑mails (non‑blocking)
  sendEmails({ booking, gymClass, user: session.user }).catch(console.error);

  return NextResponse.json(booking, { status: 201 });
}

/* ── helper ───────────────────────────────────────────── */

async function sendEmails({ booking, gymClass, user }) {
  const start = new Date(gymClass.startAt).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  /** mail to member */
  await resend.emails.send({
    from: process.env.RESEND_FROM,
    to: user.email,
    subject: '✅ Your Gym XYZ booking is confirmed',
    text: `Hi ${user.name ?? ''}!

You're booked for "${gymClass.title}" on ${start}.

See you in the gym!
— Gym XYZ team`,
  });

  /** optional notification to staff */
  if (process.env.BOOKINGS_TO) {
    await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: process.env.BOOKINGS_TO,
      subject: `New booking: ${gymClass.title}`,
      text: `${user.email} booked a spot for "${gymClass.title}" (${start}).`,
    });
  }
}
