import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';
import Section from '@/components/Section';
import ClassesFetcher from '@/components/ClassesFetcher';

export const metadata = {
  title: 'Your Account',
};

// Component to display user's bookings
function UserBookings({ classes, userBookings }) {
  const now = new Date();

  // Separate upcoming and past bookings
  const upcomingBookings =
    userBookings?.filter((booking) => new Date(booking.datetime) > now) || [];
  const pastBookings =
    userBookings?.filter((booking) => new Date(booking.datetime) <= now) || [];

  return (
    <div className="space-y-8">
      {/* Upcoming Sessions */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Upcoming Sessions</h2>
        {upcomingBookings.length === 0 ? (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
            <p className="text-gray-500">No upcoming sessions booked.</p>
            <a
              href="/book"
              className="inline-block mt-3 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors"
            >
              Book a Class
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {upcomingBookings.map((booking) => {
              const classInfo = classes.find((c) => c.id === booking.classId);
              return (
                <div
                  key={booking.id}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {classInfo?.name || 'Class'}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {new Date(booking.datetime).toLocaleDateString(
                          'en-US',
                          {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: '2-digit',
                          }
                        )}
                      </p>
                      {classInfo?.instructor && (
                        <p className="text-sm text-gray-500">
                          Instructor: {classInfo.instructor}
                        </p>
                      )}
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full text-sm font-medium">
                      Confirmed
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Past Sessions */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Past Sessions</h2>
        {pastBookings.length === 0 ? (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
            <p className="text-gray-500">No past sessions yet.</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {pastBookings
              .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
              .map((booking) => {
                const classInfo = classes.find((c) => c.id === booking.classId);
                return (
                  <div
                    key={booking.id}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 opacity-75"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">
                          {classInfo?.name || 'Class'}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {new Date(booking.datetime).toLocaleDateString(
                            'en-US',
                            {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: 'numeric',
                              minute: '2-digit',
                            }
                          )}
                        </p>
                        {classInfo?.instructor && (
                          <p className="text-sm text-gray-500">
                            Instructor: {classInfo.instructor}
                          </p>
                        )}
                      </div>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 rounded-full text-sm">
                        Completed
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default async function AccountPage() {
  const session = await getSession();

  if (!session) {
    // server-side redirect before any HTML is streamed
    redirect('/auth/signin');
  }

  const user = session.user;

  // You'll need to implement getUserBookings function
  // This would fetch the user's bookings from your database
  // const userBookings = await getUserBookings(user.id);

  return (
    <>
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          {/* User Profile Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={user.image ?? '/avatar-placeholder.png'}
                alt={user.name ?? user.email}
                className="h-20 w-20 rounded-full object-cover"
              />
              <div>
                <p className="text-xl font-semibold">{user.name ?? 'Member'}</p>
                <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Bookings Section */}
          <ClassesFetcher>
            {(classes) => (
              <UserBookings
                classes={classes}
                userBookings={[]} // Replace with actual user bookings data
              />
            )}
          </ClassesFetcher>
        </div>
      </Section>
    </>
  );
}
