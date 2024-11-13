//create express route(mini express app)
const exp = require("express");
const userApp = exp.Router();

//import express-async-handler
const expressAsyncHandler = require("express-async-handler")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const verifyToken = require("../middlewares/verifyToken")



//create User API

//Route for private route
userApp.get("/private", verifyToken, expressAsyncHandler (async(req, res) => {

    console.log(req.headers)
    res.send({message: "This is private route"});
})
);

//Routes for get request
userApp.get(
    "/getusers",
    expressAsyncHandler(async (req, res) => {

        //get usercollectionObj
        let usercollectionObj = req.app.get("usercollectionObj")
        
        //get all users
        let usersArray= await usercollectionObj.find().toArray()
        res.send({message:"All users",payload:usersArray});
         
    }) 
);


//Route for get user by id
userApp.get("/getuser/:id", expressAsyncHandler(async (req, res) => {
    
    //get usercollectionObj
    let usercollectionObj=req.app.get("usercollectionObj")
 
    //get userId from url param
    let userId = +req.params.id;
   
    //get user by id
    let userObj = await usercollectionObj.findOne({Userid:{$eq:userId}});
    res.send({message:"User",payload:userObj});
})
);


//Route for user login
userApp.post("/login", expressAsyncHandler(async(req, res) => {

    //get usercollectionObj
    let usercollectionObj=req.app.get("usercollectionObj")

    //get userObj from req
    let userCredentialsObj = req.body;
    
    //Verify username
    let user = await usercollectionObj.findOne({username: userCredentialsObj.username})
    //if username not found
    if(user === null){
        res.send({message: "Invalid Username"})
    }
    //if username matched
    else{
        //compare paswords
        let result = await bcryptjs.compare(userCredentialsObj.password, user.password)
        //if passwords are not matched
        if(result === false){
            res.send({message: "Invalid password"})
        }
        //if passwords are matched
        else{
            //create jwt token
            let token = jwt.sign({username: user.username}, "abcdef", {expiresIn: 100})
            //send response
            res.send({token: token, user: user})
        }
    }

}))





//Routes for Creating a user
userApp.post("/create-user", expressAsyncHandler(async (req, res) => {

    //get usercollectionObj
    let usercollectionObj=req.app.get("usercollectionObj")

    //get userObj from req
    let userObj = req.body;

    //verify duplicate user
    let result = await usercollectionObj.findOne({
        username: userObj.userfullname,
    })
    //if username existed, send response as duplicate user
    if(result !== null){
        res.send({
            message: "User has already existed...Choose another username",
        });
    }
    else{
        //if user not existed, hash the password
        let hashedPassword = await bcryptjs.hash(userObj.password, 6)
        //replace plain password with hashed password
        userObj.password = hashedPassword;
        //insert user obj
        await usercollectionObj.insertOne(userObj)
        // send res
        res.send({message: "User created"})
    }
})
);









//Routes for Updating a user
userApp.put("/update-user/:id", expressAsyncHandler(async(req, res) => {

    //get usercollectionObj
    let usercollectionObj=req.app.get("usercollectionObj")
    //get userId from url
    let userId = (+req.params.id)

    console.log(userId)
   // //get body from req
    let modifiedUser = req.body;

    console.log("Modified User: ",modifiedUser)

    //update user
    let result = await usercollectionObj.updateOne(
       {Userid:{$eq:userId}},
      // {_id: 0},
       {$set: {...modifiedUser}}  

    );
    console.log(result)
    res.send({message:"User modified"});
}));









//Routes for Deleting a user
userApp.delete('/delete-user/:id', expressAsyncHandler(async (req,res)=>{
    
    //get usercollectionObj
    let usercollectionObj=req.app.get("usercollectionObj")

    // get userId from url
    let userId = (+req.params.id)

    await usercollectionObj.deleteOne({Userid:{$eq:userId}});
    res.send({message:"User deleted"});

}));




//export
module.exports=userApp;