
const express=require("express")

const upload=require("../multer")
const router=express.Router()
const{   getProduct,
    getsProduct,
    getProductsByFlavor,
    createProduct,
    deleteProduct,
    updateProduct
 
}=require('../controllers/productsController')
router.get("/", getProduct);

  router.get("/:id", getsProduct);

  router.get("/product", getProductsByFlavor);

  router.post("/",upload.single("images"), createProduct)


  router.delete("/:id",deleteProduct)


  router.put("/:id", updateProduct)
  


   module.exports=router
   