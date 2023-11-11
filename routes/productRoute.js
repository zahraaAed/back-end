const express = require("express");
const Router = express.Router();
const Upload = require("../multer");

const {
  getProduct,
  getsProduct,
  getProductsByFlavor,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productsController");
Router.get("/", getProduct);

Router.get("/:id", getsProduct);

Router.get("/flavor", getProductsByFlavor);

Router.post("/post", Upload.single("images"), createProduct);

Router.delete("/delete/:id", deleteProduct);

Router.patch("/update/:id", Upload.single("images"), updateProduct);

module.exports = Router;