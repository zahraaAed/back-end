const express=require("express")
const router=express.Router()
const{createFeedback,
     getFeedback,
    getsFeedback,
    deleteFeedback,
    updateFeedback
  
}=require('../controllers/FeedbackController')
router.get("/", getFeedback);

  router.get("/:id", getsFeedback);


  router.post("/",createFeedback)


  router.delete("/:id",deleteFeedback)


  router.patch("/:id", updateFeedback)


   module.exports=router