const Admin=require("../models/admin")
const mongoose=require('mongoose')
//get all admin
const getAdmin=async (req, res) =>{

      const admin=await Admin.find({}).sort({createdAt: -1})
      res.status(200).json({
        status: 200,
        message: "succeffully get the data",
        data: admin
      })
      }
      
    
   
//get a single Admin
const getsAdmin=async (req, res) =>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
          status: 404,
          message:"error in get the  data",
          data:null})
    }
    const admin=await Admin.findById(id)
if(!admin){
    return res.status(404).json({
status:400,
      message :'error in the Admin',
      data:null
    })
}
res.status(200).json({
  status: 200,
  message: "succeffully get the single data",
  data: admin
})

}


//create
const createAdmin=async (req, res) =>{
    const{email,password}=req.body
    try {
      const admin=await Admin.create({email,password})
      res.status(200).json({
        status: 200,
  message: "succeffully creating the data",
  data: admin
})
      
    }
    catch (error){
      res.status(404).json({
        status:404,
        message:"error in the data",
        data:null
      })
  

    }
}
  //delete
  const deleteAdmin=async(req,res)=>{
  const{id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({
        status:404,
        message:"error in the data",
        data:null})
  }
  
  const admin=await Admin.findOneAndDelete({_id:id})
if(!admin){
  return res.status(404).json({
    status:404,
    message:'error in the deleting',
  data:null
})
}
res.status(200).json({
  status:200,
message:"successfully deleting the data",
  data:admin })
  
}
//update
const updateAdmin=async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
          status:404,
          message :'error in the data',
        data:null})
    }
    const admin=await Admin.findByIdAndUpdate({_id:id},{
        ...req.body
    })
  if(!admin){
    return res.status(404).json({
      status:404,
      message :'error in the data',
    data:null})
  }
  res.status(200).json({
    status:200,
    message:"successfully updating the data",
      data:admin
  })
  }
module.exports={
    getAdmin,
    getsAdmin,
    createAdmin,
    deleteAdmin,
    updateAdmin
}
