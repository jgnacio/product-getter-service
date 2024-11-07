"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showByCategory = exports.showByPartNumberAndProvider = exports.showByPartnumber = exports.showBySku = exports.show = void 0;
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
const showBySku = async (req, res) => {
    const sku = req.params.sku;
    const response = await (0, product_service_1.showProductsBySku)(sku);
    if (response.status === "failure") {
        return res.status(404).json(response);
    }
    return res.status(200).json(response);
};
exports.showBySku = showBySku;
const showByPartnumber = async (req, res) => {
    const partnumber = req.params.partnumber;
    const response = await (0, product_service_1.showProductsByPartnumber)(partnumber);
    if (response.status === "failure") {
        return res.status(404).json(response);
    }
    return res.status(200).json(response);
};
exports.showByPartnumber = showByPartnumber;
const showByPartNumberAndProvider = async (req, res) => {
    const provider = req.body.provider;
    const partnumber = req.params.partnumber;
    const response = await (0, product_service_1.showProductsByPartnumberAndProvider)(provider, partnumber);
    if (response.status === "failure") {
        return res.status(404).json(response);
    }
    return res.status(200).json(response);
};
exports.showByPartNumberAndProvider = showByPartNumberAndProvider;
const showByCategory = async (req, res) => {
    const category = req.body.category;
    if (!category) {
        return res.status(400).json({
            status: "failure",
            error: "Category is required",
        });
    }
    const response = await (0, product_service_1.showProductsByCategory)(category);
    if (response.status === "failure") {
        return res.status(404).json(response);
    }
    return res.status(200).json(response);
};
exports.showByCategory = showByCategory;
