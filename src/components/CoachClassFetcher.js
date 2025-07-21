import { prisma } from '@/lib/prisma';
import CoachClassForm from './CoachClassForm';
import CoachClassTable from './CoachClassTable';

export default async function CoachClassFetcher({ render }) {
  const classes = await prisma.gymClass.findMany({
    where: { startAt: { gte: new Date() } },
    orderBy: { startAt: 'asc' },
    include: { _count: { select: { bookings: true } } },
  });

  return render === 'form' ? (
    <CoachClassForm />
  ) : (
    <CoachClassTable initial={classes} />
  );
}
