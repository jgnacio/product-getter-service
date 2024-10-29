"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProducts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const showProducts = async (porvider) => {
    const provider = await prisma.provider.findFirst({
        where: { name: porvider },
    });
    if (!provider) {
        console.error("Provider not found");
        return {
            status: "failure",
            error: "Provider not found",
        };
    }
    const products = await prisma.product.findMany({
        where: {
            providerId: provider.ID_Provider,
        },
    });
    return products;
};
exports.showProducts = showProducts;
