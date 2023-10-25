
const express=require("express")
const router=express.Router()
const{   getProduct,
    getsProduct,
    createProduct,
    deleteProduct,
    updateProduct
 
}=require('../controllers/productsController')
router.get("/", getProduct);

  router.get("/:id", getsProduct);


  router.post("/",createProduct)


  router.delete("/:id",deleteProduct)


  router.patch("/:id", updateProduct)


   module.exports=router