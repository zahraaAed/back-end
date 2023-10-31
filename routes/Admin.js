const express = require("express");
const router = express.Router();
const {
  createAdmin,
  getAdmin,
  getsAdmin,
  deleteAdmin,
  updateAdmin,
} = require("../controllers/AdminController");
router.get("/", getAdmin);

router.get("/:id", getsAdmin);

router.post("/post", createAdmin);

router.delete("/delete/:id", deleteAdmin);

router.patch("/update/:id", updateAdmin);

module.exports = router;