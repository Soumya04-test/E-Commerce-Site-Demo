const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.post("/create-product", productController.createProduct);
router.get("/all-product", productController.allproducts);
router.get("/all-product/:id", productController.singleProduct);
router.put("/all-product/:id", productController.updateProduct);
router.delete("/all-product/:id", productController.deleteProduct);

module.exports = router;
