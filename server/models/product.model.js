// Import Mongoose
const mongoose = require("mongoose");

// Define the product schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    images: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create the model from the schema
const Product = mongoose.model("Product", productSchema);

// Export the model
module.exports = Product;
