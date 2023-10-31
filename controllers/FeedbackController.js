// const Feedback = require("../models/feedback");
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
