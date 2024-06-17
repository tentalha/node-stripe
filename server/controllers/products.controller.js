const { SECRET } = require("../envConfig");
const Product = require("../models/product.model");
const ProductService = require("../services/products.service");

const stripe = require("stripe")(SECRET);

const ProductController = {
  getAllProducts: async (req, res, next) => {
    try {
      const products = await ProductService.getAllProducts();
      res.json({ success: true, products });
    } catch (error) {
      next(error);
    }
  },
  productsCheckout: async (req, res, next) => {
    try {
      const { productIds = [] } = req.body;
      const productDetails = await Product.find({ _id: { $in: productIds } });
      const session = await stripe.checkout.sessions.create({
        line_items: productDetails.map((product) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              images: product.images,
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: 1,
        })),
        mode: "payment",
        success_url: "http://localhost:5173/complete",
        cancel_url: "http://localhost:5173/cancel",
      });

      res.status(200).json({
        success: true,
        message: "Payment got successfull!",
        productDetails,
        url: session.url,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = ProductController;
