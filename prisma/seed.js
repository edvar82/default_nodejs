const { PrismaClient } = require('@prisma/client');
const { seedDefault } = require('./seeds/seedDefault');
const { seedUser } = require('./seeds/seedUser');

const prisma = new PrismaClient();

async function main() {
  await seedDefault();
  await seedUser();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
