const express =require('express');
const router = express.Router();
const {fileUpload} =require('../controllers/fileUploadController')
const path = require("path");
const multipart = require('connect-multiparty');
const  multipartMiddleware = multipart({ uploadDir:`${path.join(__dirname,"../uploads")}` });



router.post("/",multipartMiddleware, fileUpload)



module.exports = router;