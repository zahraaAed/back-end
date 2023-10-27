const express = require("express");
const router = express.Router();
const {
  createAdmin,
  getAdmin,
  getsAdmin,
  deleteAdmin,
  updateAdmin,
} = require("../controllers/AdminController");
router.get("/admin", getAdmin);

router.get("/admin/:id", getsAdmin);

router.post("/admin-post", createAdmin);

router.delete("/admin-delete/:id", deleteAdmin);

router.patch("/admin-update/:id", updateAdmin);

module.exports = router;