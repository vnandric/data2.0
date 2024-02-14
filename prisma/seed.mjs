import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const usersToCreate = 300;

  const fakeUsers = Array.from({ length: usersToCreate }, (_, index) => ({
    name: `User ${index + 1}`,
    email: `User${index + 1}@example.com`,
  }));

  try {
    for (const user of fakeUsers) {
      await prisma.user.create({
        data: user,
      });
    }
    console.log('Fake users seeded successfully!');
  } catch (error) {
    console.error('Error seeding fake users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
