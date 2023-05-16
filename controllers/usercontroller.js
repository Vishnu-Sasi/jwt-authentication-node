const {  getAllUsers,getUserbyId,updateUserbyIdDb } = require("../db/db");

const getUserData=(req,res)=>{
const users = getAllUsers();
res.json({
    message:"Success",
    data:users
})
}

const getUserbyIdController=(req,res)=>{
    const id=req.params.id;
    const data=getUserbyId(id)

    res.json({
        message:"succcess",
        data
    })

}
const updateUserById=(req,res)=>{

    const data=updateUserbyIdDb(req.params.id,req.body);

    res.json({
        message:"Success",
        data
    })

}




module.exports={
    getUserData,
    updateUserById,
    getUserbyIdController
   
}