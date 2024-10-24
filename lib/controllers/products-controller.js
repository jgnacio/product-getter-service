"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
const product_service_1 = require("../services/product-service");
const show = async (req, res) => {
    const products = await (0, product_service_1.showProducts)();
    return res.status(201).json({
        message: "List Data Product on Cache - GCP",
        data: products,
    });
};
exports.show = show;
