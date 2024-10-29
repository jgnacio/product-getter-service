"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
const product_service_1 = require("../services/product-service");
const show = async (req, res) => {
    const provider = req.body.provider;
    if (!provider) {
        return res.status(400).json({
            message: "Provider is required",
        });
    }
    const products = await (0, product_service_1.showProducts)(provider);
    return res.status(200).json({
        message: "List Data Product on Cache - GCP",
        data: products,
    });
};
exports.show = show;
