const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedUser() {
    const user1 = await prisma.user.upsert({
        where: { id: "1" },
        update: {},
        create: {
            id: "1",
            email: "teste@teste.com",
            name: "Teste",
            role: "admin",
            status: "active",
            expiryDateTime: new Date(new Date().setHours(new Date().getHours() + 12)),
        },
    });

    const user2 = await prisma.user.upsert({
        where: { id: "2" },
        update: {},
        create: {
            id: "2",
            email: "ativo@teste.com",
            name: "Usuario Ativo",
            role: "user",
            status: "active",
            expiryDateTime: new Date(new Date().setDate(new Date().getDate() + 1)),
        },
    });

    const user3 = await prisma.user.upsert({
        where: { id: "3" },
        update: {},
        create: {
            id: "3",
            email: "inativo@teste.com",
            name: "Usuario Inativo",
            role: "user",
            status: "inactive",
            expiryDateTime: new Date(new Date().setDate(new Date().getDate() - 1)),
        },
    });

    return [user1, user2, user3];
}

module.exports = { seedUser };
