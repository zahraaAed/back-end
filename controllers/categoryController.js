const Category = require("../models/categories");
const mongoose = require("mongoose");
//get all
const getCategory = async (req, res) => {
  const categories = await Category.find({}).sort({ createdAt: -1 });
  res.status(200).json(categories);
};

//get a single one
const getsCategory = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: " no such category" });
  }
  const categories = await Category.findById(id);
  if (!categories) {
    return res.status(404).json({ error: " no such category" });
  }
  res.status(200).json(categories);
};

//create
const createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body)
    if (req.file) {
      newCategory.images = req.file.path;
      console.log(req.file.path)
    }
    const categorie = await newCategory.save({});
    res.status(200).json(categorie);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//delete
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: " no such category" });
  }
  const categories = await Category.findOneAndDelete({ _id: id });
  if (!categories) {
    return res.status(404).json({ error: " no such category" });
  }
  res.status(200).json(categories);
};

//update
const updateCategory = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: " no such category" });
  }
  const categories = await Category.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body
    }
  );
  if (!categories) {
    return res.status(404).json({ error: " no such category" });
  }
  res.status(200).json(categories);
};
module.exports = {
  getCategory,
  getsCategory,
  createCategory,
  deleteCategory,
  updateCategory,
};