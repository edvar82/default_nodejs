const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedDefault() {
  const default1 = await prisma.default.upsert({
    where: { id: '1' },
    update: {},
    create: { id: '1', text: 'Hello, World!' },
  });

  return default1;
}

module.exports = { seedDefault };
