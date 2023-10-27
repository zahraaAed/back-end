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
router.get("/", getProduct);

router.get("/:id", getsProduct);

router.get("/flavor", getProductsByFlavor);

router.post("/post", createProduct);

router.delete("/delete/:id", deleteProduct);

router.patch("/update/:id", updateProduct);

module.exports = router;