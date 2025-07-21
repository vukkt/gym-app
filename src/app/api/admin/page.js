// src/app/admin/page.js
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { isCoach } from '@/lib/authz';
import { prisma } from '@/lib/prisma';
import AdminClassRow from '@/components/AdminClassRow';

export const metadata = { title: 'Manage Classes • Gym XYZ' };

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!isCoach(session?.user)) redirect('/');

  const classes = await prisma.gymClass.findMany({
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

  return (
    <main className="mx-auto max-w-3xl py-10 space-y-8">
      <h1 className="text-3xl font-bold">Upcoming Classes</h1>

      {classes.length === 0 ? (
        <p className="text-gray-500">No classes scheduled.</p>
      ) : (
        <ul className="divide-y">
          {classes.map((c) => (
            <AdminClassRow key={c.id} c={c} />
          ))}
        </ul>
      )}
    </main>
  );
}
