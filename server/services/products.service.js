const Product = require("../models/product.model");

const ProductService = {
  getAllProducts: async () => {
    return Product.find();
  },
};

module.exports = ProductService;
