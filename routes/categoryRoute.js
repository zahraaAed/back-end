
const express=require("express")
const router=express.Router()
const{getCategory,
    getsCategory,
    createCategory,
    deleteCategory,
    updateCategory
}=require('../controllers/AdminController')
router.get("/", getCategory);

  router.get("/:id", getsCategory);


  router.post("/",createCategory)


  router.delete("/:id",deleteCategory)


  router.patch("/:id", updateCategory)


   module.exports=router