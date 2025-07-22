import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { isCoach } from '@/lib/authz';

/**
 * Handles POST requests to create a new gym class.
 * Requires the user to be a COACH or ADMIN.
 *
 * @param {Request} req - The incoming request object.
 * @returns {Promise<NextResponse>} - A JSON response with the created class or an error.
 */
export async function POST(req) {
  // Get the server session to check user authentication and role
  const session = await getServerSession(authOptions);

  // Check if the user is authorized (coach or admin)
  if (!isCoach(session?.user)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Parse the request body to get class details
  const { title, startAt, duration, slots } = await req.json();

  // Validate required fields
  if (!title || !startAt || !duration || !slots) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 422 });
  }

  try {
    // Create the gym class in the database using Prisma
    const cls = await prisma.gymClass.create({
      data: {
        title,
        startAt: new Date(startAt), // Convert startAt to a Date object
        duration,
        slots,
      },
    });

    // Respond with the created class and a 201 status code
    return NextResponse.json(cls, { status: 201 });
  } catch (error) {
    console.error('Error creating gym class:', error);
    // Handle potential database errors
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
