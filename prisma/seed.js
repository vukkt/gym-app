import { prisma } from '../src/lib/prisma.js';

async function main() {
  // wipe old demo data
  await prisma.booking.deleteMany({});
  await prisma.gymClass.deleteMany({});

  const now = new Date();

  // helper to add minutes
  const plus = (n) => new Date(now.getTime() + n * 60000);

  await prisma.gymClass.createMany({
    data: [
      {
        id: 'hiit-demo', // fixed ids for easy testing
        title: 'HIIT Blast',
        startAt: plus(60), // 1 h from now
        duration: 45,
        slots: 10,
      },
      {
        id: 'power-demo',
        title: 'Powerlifting',
        startAt: plus(120), // 2 h from now
        duration: 60,
        slots: 8,
      },
      {
        id: 'yoga-demo',
        title: 'Yoga Flex',
        startAt: plus(180), // 3 h from now
        duration: 50,
        slots: 12,
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
