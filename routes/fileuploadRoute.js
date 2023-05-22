const express =require('express');
const router = express.Router();
const {fileUpload,getUploads} =require('../controllers/fileUploadController')
const path = require("path");
const multipart = require('connect-multiparty');
const  multipartMiddleware = multipart({ uploadDir:`${path.join(__dirname,"../uploads")}` });



router.post("/",multipartMiddleware, fileUpload)
router.get("/get",getUploads)




module.exports = router;