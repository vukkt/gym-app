import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { isCoach } from '@/lib/authz';
import Section from '@/components/Section';
import CoachClassFetcher from '@/components/CoachClassFetcher';

export const metadata = { title: 'Coach Console • Gym XYZ' };

export default async function CoachPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) redirect('/auth/signin?callbackUrl=/coach');
  if (!isCoach(session.user)) notFound();

  return (
    <Section className="max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">Coach Console</h1>

      {/* ➊ New‑class form */}
      <CoachClassFetcher render="form" />

      <hr className="border-gray-300 dark:border-gray-700" />

      {/* ➋ Table of upcoming classes */}
      <CoachClassFetcher render="table" />
    </Section>
  );
}
