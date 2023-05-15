const e = require("express");

const USERS= [

]

const createUser=(userData)=>{
    let existing= USERS.find(ele=>ele.username==userData.username);
    if(existing){
     return false;
    }
 
    // Generate a Id for the user 
   
    USERS.push(userData)
 
   return  true
 
 }

const getAllUsers=()=>{
    return USERS;
}

const getUserByUserName=(username)=>{

   return USERS.find(ele=>ele.username==username)

}

module.exports={
    createUser,
    getAllUsers,
    getUserByUserName
}