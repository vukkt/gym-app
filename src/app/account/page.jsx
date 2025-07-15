import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';

export const metadata = {
  title: 'Your Account',
};

export default async function AccountPage() {
  const session = await getSession();

  if (!session) {
    // server-side redirect before any HTML is streamed
    redirect('/auth/signin');
  }

  const user = session.user;

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Account</h1>

      <div className="flex items-center gap-4 mb-8">
        <img
          src={user.image ?? '/avatar-placeholder.png'}
          alt={user.name ?? user.email}
          className="h-20 w-20 rounded-full object-cover"
        />
        <div>
          <p className="text-xl font-semibold">{user.name ?? 'Member'}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* Placeholder for future “My bookings” table */}
      <p className="text-gray-500">
        Booking history &amp; upcoming sessions will appear here.
      </p>
    </section>
  );
}
