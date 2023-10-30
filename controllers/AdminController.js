const Admin = require("../models/admin");
const mongoose = require("mongoose");
//get all Admins
const getAdmin = async (req, res) => {
  const Admins = await Admin.find({}).sort({ createdAt: -1 });
  res.status(200).json(Admins);
};

//get a single Admin
const getsAdmin = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the Admin" });
  }
  const Admins = await Admin.findById(id);
  if (!Admins) {
    return res.status(404).json({ error: "error in the Admin" });
  }
  res.status(200).json(Admins);
};

//create
const createAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const Admins = await Admin.create({ email, password });
    res.status(200).json(Admins);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//delete
const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the Admin" });
  }
  const Admins = await Admin.findOneAndDelete({ _id: id });
  if (!Admins) {
    return res.status(404).json({ error: "error in the Admin" });
  }
  res.status(200).json(Admins);
};

//update
const updateAdmin = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "error in the Admin" });
  }
  const Admins = await Admin.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body
    }
  );
  if (!Admins) {
    return res.status(404).json({ error: "error in the Admin" });
  }
  res.status(200).json(Admins);
};
module.exports = {
  getAdmin,
  getsAdmin,
  createAdmin,
  deleteAdmin,
  updateAdmin,
};