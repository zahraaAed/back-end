const express = require("express");
const router = express.Router();
const {
  getCategory,
  getsCategory,
  createCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
router.get("/", getCategory);

router.get("/:id", getsCategory);

router.post("/post", createCategory);

router.delete("/delete/:id", deleteCategory);

router.patch("/update/:id", updateCategory);

module.exports = router;