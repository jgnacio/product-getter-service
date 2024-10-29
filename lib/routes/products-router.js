"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controllers/products-controller");
const router = (0, express_1.Router)();
router.post("/products-cache", products_controller_1.show);
exports.default = router;
