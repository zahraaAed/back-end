const express = require("express");

const {
    createCategory,
    getCategories,
    getCategory,
    deleteCategory,
    updateCategory,
} = require('../controllers/categoryController');

const Category = require("../models/categoryModel");

const router = express.Router();
//get all categories

router.get("/",getCategories)

//get a single category

router.get("/:id",getCategory)

//post a new category

router.post("/", createCategory)

//delete a category

router.delete("/:id", deleteCategory)

//update a category

router.patch("/:id",updateCategory)

module.exports = router;
