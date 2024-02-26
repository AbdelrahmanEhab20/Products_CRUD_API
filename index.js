require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.model");
const productRoutes = require("./routes/product.route");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoutes);

// Connect TO DB , Then start running our server on port 3000
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB Connected Successfully! ✅🟢");
    app.listen(3000, () => console.log("SERVER RUNNING ON PORT 3000"));
  })
  .catch(() => console.log("DB Connected Failed! ⛔️⛔️"));

// get all saved products from our DB
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// get single Product by ---> ID :123
// app.get("/api/products/:id", async (req, res) => {
//   try {
//     let { id } = req.params;
//     const singleProduct = await Product.findById(id);
//     res.status(200).json(singleProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// update single Product by ---> ID :123 --> PUT method for the entire entity
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     let { id } = req.params;
//     const findProductAndUpdate = await Product.findByIdAndUpdate(id, req.body);
//     if (!findProductAndUpdate) {
//       res.status(404).json({ message: "Product Not Found To Be Updated!!" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// update single Product by ---> ID :123 --> PUT method for the entire entity
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     let { id } = req.params;
//     const findProductAndDelete = await Product.findByIdAndDelete(id);
//     if (!findProductAndDelete) {
//       res.status(404).json({ message: "Product Not Found To Be Deleted!!" });
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json({ message: "Product Deleted Successfully! ✅🟢" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// post save products to our DB
// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
