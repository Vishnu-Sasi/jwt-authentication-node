const fileUploads = [];



const fileUpload=(req,res)=>{
res.json({
    message:"file uploaded",
    status:"success"
})
const getUploads=(req,res)=>{

    res.json({
        data:fileUploads
    })
}

}

module.exports={
    fileUpload
}