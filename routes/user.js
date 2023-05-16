const express=require("express");
const router=express.Router();
const {getUserData,getUserbyIdController,updateUserById}=require("../controllers/usercontroller");
const {checkAuthorization,encryptPassword}=require("../middlewares/middleware");


router.use(checkAuthorization);
router.get("/",getUserData);
router.get("/:id",getUserbyIdController);
router.put("/:id",updateUserById)



module.exports=router;