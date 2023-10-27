const express = require("express");
const router = express.Router();
const {
  getReview,
  getsReview,
  createReview,
  deleteReview,
  updateReview,
} = require("../controllers/reviewController");
router.get("/review", getReview);

router.get("/review/:id", getsReview);

router.post("/review-post", createReview);

router.delete("/review-delete/:id", deleteReview);

router.patch("/review-update/:id", updateReview);

module.exports = router;