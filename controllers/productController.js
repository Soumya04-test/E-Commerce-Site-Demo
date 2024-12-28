const Product = require("../models/product");

// Controller for product creation
exports.createProduct = async (req, res) => {
  try {
    const { title, description, discountedPrice, originalPrice, imageUrl } =
      req.body;
    let newProduct = new Product({
      title,
      description,
      discountedPrice,
      originalPrice,
      imageUrl,
    });
    newProduct = await newProduct.save({});
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.messeage });
  }
};

// Controller for single product fetching
exports.allproducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.messeage });
  }
};

// Controller for single product fetching
exports.singleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller for single product update
exports.updateProduct = async (req, res) => {
  try {
    const { title, description, discountedPrice, originalPrice, imageUrl } =
      req.body;

    let updatedProduct = new Product({
      title,
      description,
      discountedPrice,
      originalPrice,
      imageUrl,
      _id: req.params.id,
    });

    updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updatedProduct
    );

    res.json({ message: "Product updated successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Controller for product creation
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ errror: error.message });
  }
};
