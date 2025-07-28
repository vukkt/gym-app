import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import NavbarClient from './NavbarClient';

export default async function NavbarServer() {
  const session = await getServerSession(authOptions);

  return <NavbarClient initialSession={session} />;
}
