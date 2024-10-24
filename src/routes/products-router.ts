import { Router } from "express";
import { show } from "../controllers/products-controller";

const router: Router = Router();

router.get("/products-cache", show);

export default router;
