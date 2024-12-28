const express = require("express");

const router = express.Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (request, response) => {
    try {
        const users = await prisma.user.findMany();
        return response.status(200).json(users);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});

module.exports = router;
