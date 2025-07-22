// src/app/api/dev-login/route.js
import { cookies } from 'next/headers';
import { SignJWT } from 'jose';
import { prisma } from '@/lib/prisma';

/** Only allow this helper in non‑production */
if (process.env.NODE_ENV === 'production') {
  throw new Error('/api/dev-login is disabled in production');
}

const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);

/** POST /api/dev-login?role=COACH|ADMIN|MEMBER  */
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const role = searchParams.get('role') ?? 'MEMBER';

  // Use first user with that role, or create one
  let user = await prisma.user.findFirst({ where: { role } });
  if (!user) {
    user = await prisma.user.create({
      data: { email: `${role.toLowerCase()}@dev.local`, role, name: role },
    });
  }

  // Minimal NextAuth‑compatible JWT
  const token = await new SignJWT({
    id: user.id,
    role: user.role,
    name: user.name,
    email: user.email,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);

  // set session cookie so browser is logged in
  cookies().set('next-auth.session-token', token, {
    httpOnly: false,
    secure: false,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return Response.json({ ok: true, token });
}
