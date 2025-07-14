import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session)
    return Response.json({ error: 'Unauthenticated' }, { status: 401 });

  const { classId } = await req.json();
  if (!classId)
    return Response.json({ error: 'Missing classId' }, { status: 400 });

  const clazz = await prisma.gymClass.findUnique({
    where: { id: classId },
    include: { bookings: true },
  });
  if (!clazz)
    return Response.json({ error: 'Class not found' }, { status: 404 });
  if (clazz.bookings.length >= clazz.slots)
    return Response.json({ error: 'Class full' }, { status: 409 });

  const booking = await prisma.booking.create({
    data: { classId, userId: session.user.id },
  });
  return Response.json(booking, { status: 201 });
}
