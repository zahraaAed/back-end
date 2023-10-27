const express = require("express");
const router = express.Router();
const {
  getCategory,
  getsCategory,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
router.get("/category", getCategory);

router.get("/category/:id", getsCategory);

router.post("/category-post", createCategory);

router.delete("/category-delete/:id", deleteCategory);

router.patch("/category-update/:id", updateCategory);

module.exports = router;