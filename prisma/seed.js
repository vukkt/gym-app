// prisma/seed.js
import { PrismaClient, Role } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  /* ---------- demo COACH user ---------- */
  const coach = await prisma.user.upsert({
    where: { email: 'coach@gym.xyz' },
    update: { role: Role.COACH },
    create: {
      email: 'coach@gym.xyz',
      name: 'Demo Coach',
      role: Role.COACH,
    },
  });

  /* ---------- wipe demo data ---------- */
  await prisma.booking.deleteMany();
  await prisma.gymClass.deleteMany();

  const now = new Date();
  const plus = (min) => new Date(now.getTime() + min * 60_000);

  /* ---------- demo classes ---------- */
  await prisma.gymClass.createMany({
    data: [
      {
        id: 'hiit-demo',
        title: 'HIIT Blast',
        startAt: plus(60),
        duration: 45,
        slots: 10,
      },
      {
        id: 'power-demo',
        title: 'Powerlifting',
        startAt: plus(120),
        duration: 60,
        slots: 8,
      },
      {
        id: 'yoga-demo',
        title: 'Yoga Flex',
        startAt: plus(180),
        duration: 50,
        slots: 12,
      },
    ],
  });

  console.log('Seed complete. Coach user id:', coach.id);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
