const Category = require("../models/categoryModel");

const mongoose = require("mongoose");

// get all categories
  const getCategories = async (req, res) => {
    const categories = await Category.find({}).sort({createdAt:-1})
    res.status(200).json(categories)
  }


// get a single category
  const getCategory = async (req, res) => {
    const  { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: "no such category"})
    }

    const category = await Category.findById(id)

    if(!category){
      return res.status(404).json({error: 'Category not found'})
    }

    res.status(200).json({category})
  }



//create a new category
const createCategory = async (req,res) => {

const { Name } = req.body;
//add doc to db
  try {
    const category = await Category.create({Name});
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//delete a category
 const deleteCategory = async (req,res) => {
  const  { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "no such category"})
  }

  const category = await Category.findOneAndDelete({_id: id});
  
  if(!category) {
    return res.status(404).json({error: "no such category"})
  }

  res.status(200).json(category)
}
    



//update a category

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const updatedCategoryData = req.body;

  try {
    const category = await Category.findByIdAndUpdate(id, updatedCategoryData, {
      new: true, 
      runValidators: true,
    });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category); 
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
module.exports = {
  getCategories,
  getCategory,
    createCategory,
    deleteCategory,
    updateCategory,
}



