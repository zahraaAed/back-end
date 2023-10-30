const Product = require('../models/products')
const Review=require("../models/reviews")
const mongoose=require('mongoose')

//get all 
const getReview=async (req, res) =>{

      const reviews=await Review.find({}).sort({createdAt: -1})
      res.status(200).json({
        status:200,
        message :'successfully get all the data',
      data:reviews
      })
    }
   
//get a single one
const getsReview=async (req, res) =>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
          status:404,
          message :'error in the data',
        data:null
        })
    }
    const reviews=await Review.findById(id)
if(!reviews){
    return res.status(404).json({
      status:404,
      message :'error in the data',
    data:null
    })
}
res.status(200).json({
  status:200,
  message :'successfully get single data',
data:reviews
})
}


//create
const createReview=async (req, res) =>{
  const { name, reviews, productId } = req.body;

  if (!name || !reviews || !productId) {
    return res.status(400).json({
      status: 400,
      message: 'Missing required fields',
      data: null
    });
  }

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        status: 404,
        message: 'Product not found',
        data: null
      });
    }

    const review = await Review.create({ name, reviews, productId });

    res.status(200).json({
      status: 200,
      message: 'Successfully created the review',
      data: review
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Error in creating the review',
      error: error.message,
      data: null
    });
  }
};
  //delete
  const deleteReview=async(req,res)=>{
  const{id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({
        status:404,
        message :'error in the data',
      data:null
      })
  }
  const reviews=await Review.findByIdAndDelete(id)
if(!reviews){
  return res.status(404).json({
    status:404,
    message :'error in the data',
  data:null
  })
}
res.status(200).json({
  status:200,
  message :'successfully delete the data',
data:reviews
})
}
//update
const updateReview=async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
          status:404,
          message :'error in the data',
        data:null
        })
    }
    const reviews=await Review.findByIdAndUpdate({_id:id},{
        ...req.body
    })
  if(!reviews){
    return res.status(404).json({
      status:404,
      message :'error in the data',
    data:null
    })
  }
  res.status(200).json({
    status:200,
    message :'successfully update the data',
  data:reviews})
  }
module.exports={
   getReview,
   getsReview,
   createReview,
   deleteReview,
   updateReview
}