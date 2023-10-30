const Review = require("../models/reviews");
const mongoose = require("mongoose");
const Product = require("../models/products");
//get all
const getReview = async (req, res) => {
  const reviews = await Review.find({}).sort({ createdAt: -1 });
  res.status(200).json(reviews);
};

//get a single one
const getsReview = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the review" });
  }
  const reviews = await Review.findById(id);
  if (!reviews) {
    return res.status(404).json({ error: "error in the review" });
  }
  res.status(200).json(reviews);
};

//create
const createReview = async (req, res) => {
  const { name, reviews, productsId } = req.body;
  const productId = req.body.productsId;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        status: 404,
        message: 'product not found',
        data: null
      });
    }
    const review = await Review.create({ name, reviews, productsId });
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//delete
const deleteReview = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the review" });
  }
  const reviews = await Review.findOneAndDelete({ _id: id });
  if (!reviews) {
    return res.status(404).json({ error: "error in the review" });
  }
  res.status(200).json(reviews);
};

//update
const updateReview = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "error in the review" });
    }
    const reviews = await Review.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    if (!reviews) {
      return res.status(404).json({ error: "error in the review" });
    }
    res.status(200).json(reviews);
  }catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getReview,
  getsReview,
  createReview,
  deleteReview,
  updateReview,
};