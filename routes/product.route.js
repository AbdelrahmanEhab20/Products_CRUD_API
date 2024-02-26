const express = require("express");

const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

// get route -- Get All products
router.get("/", getProducts);
// get Single route -- Get one product by ID
router.get("/:id", getProductById);
// post create product route  -- Add Product
router.post("/", createProduct);
// put update product -- update product
router.put("/:id", updateProduct);
// delete route -- delete product
router.delete("/:id", deleteProduct);
module.exports = router;
