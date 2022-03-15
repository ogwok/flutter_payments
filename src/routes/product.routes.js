const express = require("express");
const productController = require("../controllers/product.controller");
const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getProductById);
router.post("/", productController.createProduct);
router.delete("/:productId", productController.deleteProduct);
router.patch("/:productId", productController.updateProduct);

module.exports = router;
