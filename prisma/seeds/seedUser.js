const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedUser() {
  const user = await prisma.user.upsert({
    where: { id: '1' },
    update: {},
    create: { id: '1', email: 'teste@teste.com', name: 'Teste', role: 'admin' },
  });
  return user;
}

module.exports = { seedUser };
