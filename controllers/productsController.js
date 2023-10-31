const Product = require("../models/products");
const mongoose = require("mongoose");
// const multer = require("multer");
const Category = require('../models/categories');

const Product = require("../models/products")
const mongoose = require('mongoose')

const Category = require('../models/categories')



//get all 
const getProduct = async (req, res) => {

  const products = await Product.find({}).sort({ createdAt: -1 })
  res.status(200).json({
    status: 200,
    message: 'successfully get the data',
    data: products
  })
}
const Feedback = require("../models/feedback");
// const mongoose = require("mongoose");
// // //get all feedbacks
// // const getFeedback = async (req, res) => {
// //   const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
// //   res.status(200).json(feedbacks);
// // };

//       const feedbacks=await Feedback.find({}).sort({createdAt: -1}){
//       res.status(200).json({
//         status:200,
//         message :'successfully get the data',
//       data:feedbacks})
//     }
   
// //get a single workout
// const getsFeedback=async (req, res) =>{
//     const{id}=req.params
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({
//           status:404,
//       message :'error in the data',
//     data:null
//         })
//     }
//     const feedbacks=await Feedback.findById(id)
// if(!feedbacks){
//     return res.status(404).json({
//       status:404,
//       message :'error in the data',
//     data:null
//     })
// }
// res.status(200).json({
//   status:200,
//         message :'successfully get the single data',
//       data:feedbacks
// })
// }

// // //create
// // const createFeedback = async (req, res) => {
// //   const { message } = req.body;
// //   try {
// //     const feedbacks = await Feedback.create({ message });
// //     res.status(200).json(feedback);
// //   } catch (error) {
// //     res.status(400).json({ error: error.message });
// //   }
// // };
// // //delete
// // const deleteFeedback = async (req, res) => {
// //   const { id } = req.params;
// //   if (!mongoose.Types.ObjectId.isValid(id)) {
// //     return res.status(404).json({ error: " no such feedback" });
// //   }
// //   const feedbacks = await Feedback.findOneAndDelete({ _id: id });
// //   if (!feedback) {
// //     return res.status(404).json({ error: " no such feedback" });
// //   }
// //   res.status(200).json(feedback);
// // };

// //create
// const createFeedback=async (req, res) =>{
//     const{message}=req.body
//     try {
//         const feedbacks=await Feedback.create({message})
//       res.status(200).json({
//         status:200,
//         message :'successfully create the data',
//       data:feedbacks
//       })
//     }
//     catch (error){
//       res.status(400).json({
//         status:404,
//       message :'error in the data',
//     data:null
//       } )

//     }
//   }
//   //delete
//   const deleteFeedback=async(req,res)=>{
//   const{id}=req.params
//   if(!mongoose.Types.ObjectId.isValid(id)){
//       return res.status(404).json({
//         status:404,
//       message :'error in the data',
//     data:null
//       })
//   }
//   const feedbacks=await Feedback.findOneAndDelete({_id:id})
// if(!workout){
//   return res.status(404).json({
//     status:404,
//       message :'error in the data',
//     data:null
//   })
// }
// res.status(200).json({
//   status:200,
//         message :'successfully delete the data',
//       data:feedbacks
// })
// }

// //update
// const updateFeedback=async(req,res)=>{
//     const{id}=req.params
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({
//           status:404,
//       message :'error in the data',
//     data:null
//         })
//     }
//     const feedbacks=await Feedback.findByIdAndUpdate({_id:id},{
//         ...req.body
//     })
//   if(!feedbacks){
//     return res.status(404).json({
//       status:404,
//       message :'error in the data',
//     data:null
//     })
//   }
//   res.status(200).json({
//     status:200,
//         message :'successfully update the data',
//       data:feedbacks
//   })
//   }
// module.exports={
//     getFeedback,
//     getsFeedback,
//     createFeedback,
//     deleteFeedback,
//     updateFeedback
// }

//get a single one
const getsProduct = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'error in the workout' })
  }
  const products = await Product.findById(id)
  if (!products) {
    return res.status(404).json({
      status: 404,
      message: 'error in the data',
      data: null
    })
  }
  res.status(200).json({
    status: 200,
    message: 'successfully get the single data',
    data: products
  })
}



//for flavours
const getProductsByFlavor = async (req, res) => {
  try {
    const flavor = req.query.flavor;
    const products = await Product.filter((obj) => obj.flavours === flavor);

    res.status(200).json({
      status: 200,
      message: 'successfully get the flavours',
      data: products
    });
  } catch {
    console.log(error.message);
    res.status(404).json({
      status: 404,
      message: 'error in the data',
      data: null
    })
  }
}




//create

// const createProduct = async (req, res) => {
//   // // Use Multer upload middleware to handle file uploads
//   // upload.single('Images')(req, res, async (err) => {
//   //   if (err) {
//   //     return res.status(400).json({
//   //       status: 400,
//   //       message: 'Error uploading the file',
//   //       data: null,
//   //     });
//   //   }

//     const { categoryId } = req.body;
//     const newProduct = new Product(req.body);

//     try {
//       const category = await Category.findById(categoryId);

//       if (!category) {
//         return res.status(404).json({
//           status: 404,
//           message: 'Category not found',
//           data: null
//         });
//       }
//       newProduct.categoryId = categoryId;

//       const product = await newProduct.save();

//       res.status(200).json({
//         status: 200,
//         message: 'Successfully created the product',
//         data: product
//       });
//     } catch (error) {
//       res.status(400).json({
//         status: 400,
//         message: 'Error in creating the product',
//         error: error.message,
//         data: null
//       });
//     }
// //   });
//   }


 const createProduct = async (req, res) => {
    const { categoryId } = req.body;

    try {
      const newProduct = new Product(req.body);
      newProduct.images = req.file.path;

      const findCategory =await Category.findById(categoryId)
    if(!findCategory){
      return res.status(404).json("Category not found")
    }
  
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


//delete
const deleteProduct = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      status: 404,
      message: 'error in the data',
      data: null
    })
  }
  const products = await Product.findOneAndDelete({ _id: id })
  if (!products) {
    return res.status(404).json({
      status: 404,
      message: 'error in the data',
      data: null
    })
  }
  res.status(200).json({
    status: 200,
    message: 'successfully delete the data',
    data: products
  })
}

//update
const updateProduct = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      status: 404,
      message: 'error in the data',
      data: null
    })
  }
  const products = await Product.findByIdAndUpdate(id)
  if (!products) {
    return res.status(404).json({
      status: 404,
      message: 'error in the data',
      data: null
    })
  }
  res.status(200).json({
    status: 200,
    message: 'successfully update the data',
    data: products
  })
}
module.exports = {
  getProduct,
  getsProduct,
  getProductsByFlavor,
  createProduct,
  deleteProduct,
  updateProduct
}
