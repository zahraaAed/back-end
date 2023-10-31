const Product = require("../models/products");
const mongoose = require("mongoose");
const Category = require("../models/categories");
const path = require("path");

//get all
const getProduct = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });
  res.status(200).json(products);
};

//get a single one
const getsProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the product" });
  }
  const products = await Product.findById(id);
  if (!products) {
    return res.status(404).json({ error: "error in the product" });
  }
  res.status(200).json(products);
};

//for flavours
const getProductsByFlavor = async (req, res) => {
  try {
    const flavor = req.query.flavor;
    const products = await Product.filter((obj) => obj.flavours === flavor);

    res.status(200).json(products);
  } catch {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//create
const createProduct = async (req, res) => {
  const {
    productName,
    description,
    categoriesId,
    flavours,
    bestSeller,
    price
  } = req.body;
  const image = req.body.images;
  if (image) {
    var images = path.join("/images", req.file.filename)
  }
  try {
    const category = await Category.findById(categoriesId);
    if (!category) {
      return res.status(404).json({
        status: 404,
        message: "Category not found",
        data: null,
      });
    }
    const products = await Product.create({
      productName,
      description,
      categoriesId,
      flavours,
      bestSeller,
      price,
      images,
    });
    res.status(200).json({
      status: 200,
      message: "successfully create the data",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: 404,
      message: "error in the data",
      data: null,
    });
  }
};

//delete
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the product id" });
  }
  const products = await Product.findOneAndDelete({ _id: id });
  if (!products) {
    return res.status(404).json({ error: "error in the product id" });
  }
  res.status(200).json(products);
};

//update
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const categoryId = req.body.categoriesId;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "error in the product" });
    }
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({
        status: 404,
        message: "Product category not found",
        data: null,
      });
    }
    const products = await Product.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    if (!products) {
      return res.status(404).json({ error: "error in the product" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "error in the data",
      data: null,
    });
  }
};
module.exports = {
  getProduct,
  getsProduct,
  getProductsByFlavor,
  createProduct,
  deleteProduct,
  updateProduct
};