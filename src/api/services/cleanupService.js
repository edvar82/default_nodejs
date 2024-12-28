const cron = require("node-cron");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CleanupService {
    initializeCleanupTasks() {
        console.log("Initializing cleanup tasks");
        cron.schedule("0 0 * * *", async () => {
            try {
                console.log("Running cleanup tasks");
                await this.handleExpiredUsers();
            } catch (error) {
                console.error("Error in cleanup tasks:", error);
            }
        });
    }

    async handleExpiredUsers() {
        const expiredUsers = await prisma.user.findMany({
            where: {
                expiryDateTime: {
                    lte: new Date(),
                },
            },
        });

        for (const user of expiredUsers) {
            await prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    status: "expired",
                },
            });
        }
    }
}

module.exports = new CleanupService();
