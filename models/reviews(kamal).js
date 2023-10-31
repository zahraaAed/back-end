const mongoose = require("mongoose");

const review_schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  body: {
    type: String,
    required: [true, "Please enter a review"],
  },
  product_id: {
    type: String,
    required: [true, "Please enter product ID"],
  },
});

const Review = mongoose.model("review", review_schema);

// module.exports = Review;