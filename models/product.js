const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  discountedPrice: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
