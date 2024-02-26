require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
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
