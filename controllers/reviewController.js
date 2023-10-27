const Review = require("../models/reviews");
const mongoose = require("mongoose");
//get all
const getReview = async (req, res) => {
  const reviews = await Review.find({}).sort({ createdAt: -1 });
  res.status(200).json(reviews);
};

//get a single one
const getsReview = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the workout" });
  }
  const reviews = await Review.findById(id);
  if (!reviews) {
    return res.status(404).json({ error: "error in the workout" });
  }
  res.status(200).json(reviews);
};

//create
const createReview = async (req, res) => {
  const { Name, Product_Id, Reviews } = req.body;
  try {
    const reviews = await Review.create({ Name, Product_Id, Reviews });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//delete
const deleteReview = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the workout" });
  }
  const reviews = await Review.findOneAndDelete({ _id: id });
  if (!reviews) {
    return res.status(404).json({ error: "error in the workout" });
  }
  res.status(200).json(reviews);
};

//update
const updateReview = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the workout" });
  }
  const reviews = await Review.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!reviews) {
    return res.status(404).json({ error: "error in the workout" });
  }
  res.status(200).json(reviews);
};
module.exports = {
  getReview,
  getsReview,
  createReview,
  deleteReview,
  updateReview,
};