const express = require("express");
const router = express.Router();
const {
  getReview,
  getsReview,
  createReview,
  deleteReview,
  updateReview,
  getReviewByProductId
} = require("../controllers/reviewController");
router.get("/", getReview);

router.get("/review/:productId", getReviewByProductId);

router.get("/:id", getsReview);

router.post("/post", createReview);

router.delete("/delete/:id", deleteReview);

router.patch("/update/:id", updateReview);

module.exports = router;