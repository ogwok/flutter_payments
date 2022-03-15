const Product = require("../models/product.model");

const createProduct = async (productBody) => {
  return Product.create(productBody);
};

const getAllProducts = async () => {
  const Products = await Product.find();
  return Products;
};

const getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};

const deleteProduct = async (id) => {
  const ProductDeleted = await Product.deleteOne({ _id: id });
  return ProductDeleted;
};

const updateProduct = async (req) => {
  const ProductUpdated = await Product.updateOne(
    { _id: req.params.productId },
    { $set: { title: req.body.title } }
  );
  return ProductUpdated;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
};
