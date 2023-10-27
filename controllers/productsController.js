const Product = require("../models/products");
const mongoose = require("mongoose");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname); // Generate a unique filename for each file
  },
});
const upload = multer({ storage: storage });

//get all
const getProduct = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });
  res.status(200).json(products);
};

//get a single one
const getsProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the workout" });
  }
  const products = await Product.findById(id);
  if (!products) {
    return res.status(404).json({ error: "error in the workout" });
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
    Flavours,
    best_seller,
    Price,
    Images,
  } = req.body;
  try {
    const products = await Product.create({
      productName,
      description,
      category: categoriesId,
      Flavours,
      best_seller,
      Price,
      Images,
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
  // Add multer upload middleware to handle file uploads
  upload.single("Images")(req, res, (err) => {
    if (err) {
      return res.status(400).json({
        status: 400,
        message: "Error uploading the file",
        data: null,
      });
    }
  });
};
//delete
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the workout" });
  }
  const products = await Product.findOneAndDelete({ _id: id });
  if (!products) {
    return res.status(404).json({ error: "error in the workout" });
  }
  res.status(200).json(products);
};

//update
const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the workout" });
  }
  const products = await Product.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!products) {
    return res.status(404).json({ error: "error in the workout" });
  }
  res.status(200).json(products);
};
module.exports = {
  getProduct,
  getsProduct,
  getProductsByFlavor,
  createProduct,
  deleteProduct,
  updateProduct,
};