import { prisma } from '@/lib/prisma';

export async function GET() {
  const classes = await prisma.gymClass.findMany({
    where: { startAt: { gte: new Date() } },
    orderBy: { startAt: 'asc' },
    select: {
      id: true,
      title: true,
      startAt: true,
      duration: true,
      slots: true,
      _count: { select: { bookings: true } },
    },
  });

  return Response.json(
    classes.map((c) => ({
      ...c,
      available: c.slots - c._count.bookings,
    }))
  );
}
