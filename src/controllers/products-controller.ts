import { Request, Response } from "express";
import { showProducts } from "../services/product-service";

export const show = async (req: Request, res: Response) => {
  const provider = req.body.provider as string;

  if (!provider) {
    return res.status(400).json({
      status: "failure",
      error: "Provider is required",
    });
  }

  const response = await showProducts(provider);

  if (response.status === "failure") {
    return res.status(404).json(response);
  }

  return res.status(200).json(response);
};
