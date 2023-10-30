
const Category=require("../models/categories")
const mongoose=require('mongoose')
//get all 
const getCategory=async (req, res) =>{
      const categories=await Category.find({}).sort({createdAt: -1})
    res.status(200).json({
        status: 200,
        message: "succeffully get the data",
        data:categories})
    }
   
//get a single one
const getsCategory=async (req, res) =>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({status:404,
          message :'error in the data',
        data:null})
    }
    const categories=await Category.findById(id)
if(!categories){
    return res.status(404).json({status:404,
      message :'error in the data',
    data:null})
}
res.status(200).json({
  status: 200,
  message: "succeffully get the single data",
  data:categories})
}


//create
const createCategory=async (req, res) =>{
    const{categoryName}=req.body
    try {
      const categories=await Category.create({categoryName})
      res.status(200).json({
        status: 200,
        message: "succeffully create the data",
        data:categories})
    }
    catch (error){
      res.status(404).json({status:404,
        message :'error in the data',
      data:null} )

    }
  }
  //delete
  const deleteCategory=async(req,res)=>{
  const{id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({status:404,
        message :'error in the data',
      data:null})
  }
  const categories=await Category.findOneAndDelete({_id:id})
if(!categories){
  return res.status(404).json({status:404,
    message :'error in the data',
  data:null})
}
res.status(200).json({
  status: 200,
  message: "succeffully delete the data",
  data:categories})
}

//update
const updateCategory=async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({status:404,
          message :'error in the data',
        data:null})
    }
    const categories=await Category.findByIdAndUpdate({_id:id},{
        ...req.body
    })
  if(!categories){
    return res.status(404).json({status:404,
      message :'error in the data',
    data:null})  
  }
  res.status(200).json({   status: 200,
    message: "succeffully update the data",
    data:categories})
  }
module.exports={
   getCategory,
   getsCategory,
   createCategory,
   deleteCategory,
   updateCategory
}
