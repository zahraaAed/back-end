const express=require("express")
const router=express.Router()
const{createAdmin,
     getAdmin,
    getsAdmin,
    deleteAdmin,
    updateAdmin
  
}=require('../controllers/AdminController')
  router.get("/", getAdmin);

  router.get("/:id", getsAdmin);


  router.post("/",createAdmin)


  router.delete("/:id",deleteAdmin)


  router.patch("/:id", updateAdmin)


   module.exports=router
  