const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const Default = prisma.default;

async function getDefault() {
  return Default.findUnique({ where: { id: '1' } });
}

module.exports = { getDefault };
