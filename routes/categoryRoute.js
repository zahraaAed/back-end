const express = require("express");
const router = express.Router();
const Upload = require("../multer");

const {
  getCategory,
  getsCategory,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
router.get("/", getCategory);

router.get("/:id", getsCategory);

router.post("/post", Upload.single("images"), createCategory);

router.delete("/delete/:id", deleteCategory);

router.patch("/update/:id", Upload.single("images"), updateCategory);

module.exports = router;