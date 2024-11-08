import { Request, Response } from "express";
import {
  showProducts,
  showProductsByProvider,
  showProductsByCategory,
  showProductsByPartnumber,
  showProductsByPartnumberAndProvider,
  showProductsBySku,
} from "../services/product-service";

export const show = async (req: Request, res: Response) => {
  const response = await showProducts();

  if (response.status === "failure") {
    return res.status(404).json(response);
  }

  return res.status(200).json(response);
};

export const showByProvider = async (req: Request, res: Response) => {
  const provider = req.body.provider as string;

  if (!provider) {
    return res.status(400).json({
      status: "failure",
      error: "Provider is required",
    });
  }

  const response = await showProductsByProvider(provider);

  if (response.status === "failure") {
    return res.status(404).json(response);
  }

  return res.status(200).json(response);
};

export const showBySku = async (req: Request, res: Response) => {
  const sku = req.params.sku as string;

  const response = await showProductsBySku(sku);

  if (response.status === "failure") {
    return res.status(404).json(response);
  }

  return res.status(200).json(response);
};

export const showByPartnumber = async (req: Request, res: Response) => {
  const partnumber = req.params.partnumber as string;

  const response = await showProductsByPartnumber(partnumber);

  if (response.status === "failure") {
    return res.status(404).json(response);
  }

  return res.status(200).json(response);
};

export const showByPartNumberAndProvider = async (
  req: Request,
  res: Response
) => {
  const provider = req.body.provider as string;
  const partnumber = req.params.partnumber as string;

  const response = await showProductsByPartnumberAndProvider(
    provider,
    partnumber
  );

  if (response.status === "failure") {
    return res.status(404).json(response);
  }

  return res.status(200).json(response);
};

export const showByCategory = async (req: Request, res: Response) => {
  const category = req.body.category as string;
  if (!category) {
    return res.status(400).json({
      status: "failure",
      error: "Category is required",
    });
  }

  const response = await showProductsByCategory(category);

  if (response.status === "failure") {
    return res.status(404).json(response);
  }

  return res.status(200).json(response);
};
