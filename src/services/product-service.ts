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

  const products = await prisma.product.findMany({
    where: {
      providerId: provider.ID_Provider,
    },
  });

  return products;
};
