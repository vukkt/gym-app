import { prisma } from '@/lib/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { isCoach } from '@/lib/authz';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
  const session = await getServerSession(authOptions);
  if (!isCoach(session?.user))
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const body = await req.json();
  const updated = await prisma.gymClass.update({
    where: { id: params.id },
    data: body,
  });
  return NextResponse.json(updated, { status: 200 });
}

export async function DELETE(_, { params }) {
  const session = await getServerSession(authOptions);
  if (!isCoach(session?.user))
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  await prisma.gymClass.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true }, { status: 200 });
}
