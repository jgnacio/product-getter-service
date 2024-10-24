import { Request, Response } from "express";
import { showProducts } from "../services/product-service";

export const show = async (req: Request, res: Response) => {
  const provider = req.body.provider as string;

  if (!provider) {
    return res.status(400).json({
      message: "Provider is required",
    });
  }

  const products = await showProducts(provider);

  return res.status(200).json({
    message: "List Data Product on Cache - GCP",
    data: products,
  });
};
