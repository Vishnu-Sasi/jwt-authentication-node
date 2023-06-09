const { v4: uuidv4 } = require('uuid');

let USERS= [

]

const createUser=(userData)=>{
    let existing= USERS.find(ele=>ele.username==userData.username);
    if(existing){
     return false;
    }
 
    // Generate a Id for the user 
   userData.id = uuidv4()
    USERS.push(userData)
 
   return  true
 
 }

const getAllUsers=()=>{
    return USERS;
}

const getUserByUserName=(username)=>{

   return USERS.find(ele=>ele.username==username)

}

const getUserbyId=(id)=>{
    return USERS.find(ele=>ele.id==id);


}

const updateUserbyIdDb=(id,data)=>{
    let filteredAt= USERS.filter(ele=>ele.id!=id);
    data.id=id
    filteredAt.push(data);
    USERS=[...filteredAt]
   return true


}

module.exports={
    createUser,
    getAllUsers,
    getUserByUserName,
    getUserbyId,
    updateUserbyIdDb
}