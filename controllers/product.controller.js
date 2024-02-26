const Product = require("../models/product.model");

// get all controller
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// get one controller BY ID
const getProductById = async (req, res) => {
  try {
    let { id } = req.params;
    const singleProduct = await Product.findById(id);
    if (!singleProduct) {
      res.status(404).json({ message: "Product Not Found To Get It's Data!!" });
    }
    res.status(200).json(singleProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// create product controller
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// update product controller
const updateProduct = async (req, res) => {
  try {
    let { id } = req.params;
    const findProductAndUpdate = await Product.findByIdAndUpdate(id, req.body);
    if (!findProductAndUpdate) {
      res.status(404).json({ message: "Product Not Found To Be Updated!!" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// delete product controller
const deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;
    const findProductAndDelete = await Product.findByIdAndDelete(id);
    if (!findProductAndDelete) {
      res.status(404).json({ message: "Product Not Found To Be Deleted!!" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json({ message: "Product Deleted Successfully! ✅🟢" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
