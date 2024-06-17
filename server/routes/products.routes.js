const express = require("express");
const ProductController = require("../controllers/products.controller");

const router = express.Router();

router.get("/", ProductController.getAllProducts);

router.post("/checkout", ProductController.productsCheckout);

module.exports = { productsRouter: router };
