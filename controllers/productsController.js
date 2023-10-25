
const Product=require("../models/products")
const mongoose=require('mongoose')
//get all 
const getProduct=async (req, res) =>{

      const products=await Product.find({}).sort({createdAt: -1})
      res.status(200).json(workouts)
    }
   
//get a single one
const getsProduct=async (req, res) =>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error :'error in the workout'})
    }
    const products=await Product.findById(id)
if(!products){
    return res.status(404).json({error :'error in the workout'})
}
res.status(200).json(products)
}

//for flavours
const getProductsByFlavor = async(req, res) => {
  try {
    const flavor = req.query.flavor
    const products = await Product.filter(obj => obj.flavours === flavor);

    res.status(200).json(products);
  } catch {
      console.log(error.message);
      res.status(500).json({message: error.message})
    }
}

//create
const createProduct=async (req, res) =>{
    const{productName,description,Categories_Id,Flavours, best_seller,Price,Images}=req.body
    try {
      const products=await Product.create({productName,description,Categories_Id,Flavours, best_seller,Price,Images})
      res.status(200).json(products)
    }
    catch (error){
      res.status(400).json({error:error.message} )

    }
  }
  //delete
  const deleteProduct=async(req,res)=>{
  const{id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error :'error in the workout'})
  }
  const products=await Product.findOneAndDelete({_id:id})
if(!products){
  return res.status(404).json({error :'error in the workout'})
}
res.status(200).json(products)
}

//update
const updateProduct=async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error :'error in the workout'})
    }
    const products=await Product.findByIdAndUpdate({_id:id},{
        ...req.body
    })
  if(!products){
    return res.status(404).json({error :'error in the workout'})
  }
  res.status(200).json(products)
  }
module.exports={
   getProduct,
   getsProduct,
   getProductsByFlavor,
   createProduct,
   deleteProduct,
   updateProduct
}
