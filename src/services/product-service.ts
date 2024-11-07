import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const showProducts = async (porvider: string) => {
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

export const showProductsBySku = async (sku: string) => {
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

export const showProductsByPartnumber = async (partnumber: string) => {
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

export const showProductsByPartnumberAndProvider = async (
  provider: string,
  partnumber: string
) => {
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

export const showProductsByCategory = async (categoryName: string) => {
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
