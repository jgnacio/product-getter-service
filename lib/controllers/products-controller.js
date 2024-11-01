"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = void 0;
const product_service_1 = require("../services/product-service");
const show = async (req, res) => {
    const provider = req.body.provider;
    if (!provider) {
        return res.status(400).json({
            status: "failure",
            error: "Provider is required",
        });
    }
    const response = await (0, product_service_1.showProducts)(provider);
    if (response.status === "failure") {
        return res.status(404).json(response);
    }
    return res.status(200).json(response);
};
exports.show = show;
