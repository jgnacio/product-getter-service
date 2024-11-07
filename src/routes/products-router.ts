import { Router } from "express";
import {
  show,
  showByCategory,
  showByPartnumber,
  showByPartNumberAndProvider,
  showBySku,
} from "../controllers/products-controller";

const router: Router = Router();

router.post("/products-cache", show);
router.get("/products-cache/sku/:sku", showBySku);
router.get("/products-cache/partNumber/:partnumber", showByPartnumber);
router.post(
  "/products-cache/partNumber/:partnumber",
  showByPartNumberAndProvider
);
router.post("/products-cache/category", showByCategory);

export default router;
