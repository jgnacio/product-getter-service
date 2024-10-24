import { Router } from "express";
import ProductsRouter from "./products-router";

const router: Router = Router();

router.use("/api/", ProductsRouter);

export default router;
