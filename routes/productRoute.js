const express = require("express");
const router = express.Router();
const upload = require("../multer");

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

router.post("/post", upload.single("Images"), createProduct);

router.delete("/delete/:id", deleteProduct);

router.patch("/update/:id", upload.single("Image"), updateProduct);

module.exports = router;