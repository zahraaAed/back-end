const Feedback = require("../models/feedback");
const mongoose = require("mongoose");
//get all workouts
const getFeedback = async (req, res) => {
  const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
  res.status(200).json(feedbacks);
};

//get a single workout
const getsFeedback = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the workout" });
  }
  const feedbacks = await Feedback.findById(id);
  if (!feedbacks) {
    return res.status(404).json({ error: "error in the workout" });
  }
  res.status(200).json(feedbacks);
};

//create
const createFeedback = async (req, res) => {
  const { message } = req.body;
  try {
    const feedbacks = await Feedback.create({ message });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//delete
const deleteFeedback = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the workout" });
  }
  const feedbacks = await Feedback.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "error in the workout" });
  }
  res.status(200).json(workout);
};

//update
const updateFeedback = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the workout" });
  }
  const feedbacks = await Feedback.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!feedbacks) {
    return res.status(404).json({ error: "error in the workout" });
  }
  res.status(200).json(feedbacks);
};
module.exports = {
  getFeedback,
  getsFeedback,
  createFeedback,
  deleteFeedback,
  updateFeedback,
};