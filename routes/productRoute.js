const express = require("express");
const router = express.Router();
const {
  getProduct,
  getsProduct,
  getProductsByFlavor,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productsController");
router.get("/product", getProduct);

router.get("/product/:id", getsProduct);

router.get("/product-flavor", getProductsByFlavor);

router.post("/product-post", createProduct);

router.delete("/product-delete/:id", deleteProduct);

router.patch("/product-update/:id", updateProduct);

module.exports = router;