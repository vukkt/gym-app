import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.booking.deleteMany();
  await prisma.gymClass.deleteMany();

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
  await prisma.gymClass.createMany({ data: demo });

  console.log(`Seeded ${demo.length} classes`);
}
main().finally(() => prisma.$disconnect());
