"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProducts = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const showProducts = async () => {
    const products = await prisma.product.findMany();
    return products;
};
exports.showProducts = showProducts;
