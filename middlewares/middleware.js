const bcrypt = require('bcrypt');
const {getUserByUserName}= require("../db/db")
const  jwt = require('jsonwebtoken');

const errorMiddleWare=(err,req,res,next)=>{
res.json({
    "message":"FAILED",
    "error":err.toString()
})
}

const encryptPassword=(req,res,next)=>{
    const saltRounds = 10;
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        //console.log(hash)
        req.body.password = hash;
        next();
        // Store hash in your password DB.
    });

}
const checkPassword=(req,res,next)=>{
    const user = getUserByUserName(req.body.username)
   if(user){
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        // result == true
        if(!result){
            next(new Error("Password doesn't match"))
        }else{
            console.log(result)
            next()
        }
    });

   }else{
    next(new Error("User not found"))
   }
}

const checkAuthorization =(req,res,next)=>{
    const authorizationToken = req.headers.authorization;
    if(authorizationToken){

        try {
            jwt.verify(authorizationToken, process.env.JWTKEY);
   
               next();
             } catch(err) {
             
               res.status(401).json({
                   status:"Failed",
                   message:"Token Malformed..."
               })
               
             }

    }else{
        res.status(401).json({
            status:"FAILED",
            message:"Authorization required"
        })
    }
    next();

}

module.exports={
    errorMiddleWare,
    encryptPassword,
    checkPassword,
    checkAuthorization
}