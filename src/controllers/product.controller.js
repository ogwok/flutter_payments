const ProductService = require("../services/product.service");

const createProduct = async (req, res) => {
  const product = await ProductService.createProduct(req.body);
  console.log("controller hit");
  res.send(product);
};

const getAllProducts = async (req, res) => {
  const products = await ProductService.getAllProducts();
  res.send(products);
};

const getProductById = async (req, res) => {
  const Product = await ProductService.getProductById(req.params.productId);
  res.send(Product);
};

const deleteProduct = async (req, res) => {
  const ProductDeleted = await ProductService.deleteProduct(
    req.params.productId
  );
   console.log("delete hit");
  res.send(ProductDeleted);
};

const updateProduct = async (req, res) => {
  const productUpdated = await ProductService.updateProduct(req);
  res.send(productUpdated);
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
};
