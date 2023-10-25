
const express=require("express")
const router=express.Router()
const{   getReview,
    getsReview,
    createReview,
    deleteReview,
    updateReview
 
}=require('../controllers/reviewController')
router.get("/", getReview);

  router.get("/:id", getsReview);


  router.post("/",createReview)


  router.delete("/:id",deleteReview)


  router.patch("/:id", updateReview)


   module.exports=router