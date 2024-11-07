"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showProductsByCategory = exports.showProductsByPartnumberAndProvider = exports.showProductsByPartnumber = exports.showProductsBySku = exports.showProducts = void 0;
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
    // Mostrar PriceHistory
    const products = await prisma.product.findMany({
        where: {
            providerId: provider.ID_Provider,
        },
        include: {
            priceHistory: {
                orderBy: {
                    priceUpdatedAt: "desc",
                },
            },
            provider: true,
            category: true,
        },
    });
    return {
        status: "success",
        data: products,
    };
};
exports.showProducts = showProducts;
const showProductsBySku = async (sku) => {
    const products = await prisma.product.findMany({
        where: {
            sku: sku,
        },
        include: {
            priceHistory: {
                orderBy: {
                    priceUpdatedAt: "desc",
                },
            },
            provider: true,
            category: true,
        },
    });
    if (!products) {
        console.error("Product not found");
        return {
            status: "failure",
            error: "Product not found",
        };
    }
    return {
        status: "success",
        data: products,
    };
};
exports.showProductsBySku = showProductsBySku;
const showProductsByPartnumber = async (partnumber) => {
    const products = await prisma.product.findMany({
        where: {
            partNumber: partnumber,
        },
        include: {
            priceHistory: {
                orderBy: {
                    priceUpdatedAt: "desc",
                },
            },
            provider: true,
            category: true,
        },
    });
    if (!products) {
        console.error("Product not found");
        return {
            status: "failure",
            error: "Product not found",
        };
    }
    return {
        status: "success",
        data: products,
    };
};
exports.showProductsByPartnumber = showProductsByPartnumber;
const showProductsByPartnumberAndProvider = async (provider, partnumber) => {
    const providerData = await prisma.provider.findFirst({
        where: { name: provider },
    });
    if (!providerData) {
        console.error("Provider not found");
        return {
            status: "failure",
            error: "Provider not found",
        };
    }
    const products = await prisma.product.findMany({
        where: {
            partNumber: partnumber,
            providerId: providerData.ID_Provider,
        },
        include: {
            priceHistory: {
                orderBy: {
                    priceUpdatedAt: "desc",
                },
            },
            provider: true,
            category: true,
        },
    });
    if (!products) {
        console.error("Product not found");
        return {
            status: "failure",
            error: "Product not found",
        };
    }
    return {
        status: "success",
        data: products,
    };
};
exports.showProductsByPartnumberAndProvider = showProductsByPartnumberAndProvider;
const showProductsByCategory = async (categoryName) => {
    const category = await prisma.category.findFirst({
        where: { name: categoryName },
    });
    if (!category) {
        console.error("Category not found");
        return {
            status: "failure",
            error: "Category not found",
        };
    }
    const products = await prisma.product.findMany({
        where: {
            categoryId: category.id,
        },
        include: {
            priceHistory: {
                orderBy: {
                    priceUpdatedAt: "desc",
                },
            },
            provider: true,
            category: true,
        },
    });
    if (!products) {
        console.error("Product not found");
        return {
            status: "failure",
            error: "Product not found",
        };
    }
    return {
        status: "success",
        data: products,
    };
};
exports.showProductsByCategory = showProductsByCategory;
