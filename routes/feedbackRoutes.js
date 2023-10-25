const express=require("express")
const router=express.Router()
const{createFeedback,
     getFeedback,
    getsFeedback,
    deleteFeedback,
    updateFeedback
  
}=require('../controllers/FeedbackController')
router.get("/feedback", getFeedback);

  router.get("/feedback/:id", getsFeedback);


  router.post("/feedback-post",createFeedback)


  router.delete("/feedback-delete/:id",deleteFeedback)


  router.patch("/feedback-update/:id", updateFeedback)


   module.exports=router