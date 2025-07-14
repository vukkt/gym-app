import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const start = Date.now();
  await prisma.class.deleteMany(); // reset on dev
  await prisma.booking.deleteMany();

  const now = new Date();
  const demo = [
    {
      title: 'HIIT Blast',
      startAt: new Date(now.getTime() + 3600e3),
      duration: 45,
      slots: 10,
    },
    {
      title: 'Powerlifting',
      startAt: new Date(now.getTime() + 7200e3),
      duration: 60,
      slots: 8,
    },
    {
      title: 'Yoga Flex',
      startAt: new Date(now.getTime() + 10800e3),
      duration: 50,
      slots: 12,
    },
  ];
  await prisma.class.createMany({ data: demo });
  console.log(`Seeded ${demo.length} classes in ${Date.now() - start} ms`);
}
main().finally(() => prisma.$disconnect());
