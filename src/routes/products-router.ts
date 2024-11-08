import { Router } from "express";
import {
  show,
  showByProvider,
  showByCategory,
  showByPartnumber,
  showByPartNumberAndProvider,
  showBySku,
} from "../controllers/products-controller";

const router: Router = Router();

router.get("/products-cache", show);
router.post("/products-cache", showByProvider);
router.get("/products-cache/sku/:sku", showBySku);
router.get("/products-cache/partNumber/:partnumber", showByPartnumber);
router.post(
  "/products-cache/partNumber/:partnumber",
  showByPartNumberAndProvider
);
router.post("/products-cache/category", showByCategory);

export default router;
