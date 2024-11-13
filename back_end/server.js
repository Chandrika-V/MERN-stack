//create express application
const exp = require("express");
const app = exp();

var cors = require("cors");

//import mongoClient
const mclient = require("mongodb").MongoClient;

//get db URL
const dburl = "mongodb://127.0.0.1:27017/appdata";

//connect to Database
mclient.connect(dburl)
.then(client => {
    //get Database obj
    let dbObj = client.db("appdata")
    //get collection object
    let usercollectionObj = dbObj.collection("usercollection")
    //share to userAPI
    app.set("usercollectionObj", usercollectionObj)
    
    console.log("Database connection success")
})
.catch(err => console.log("err in DB connection ", err))

//add body parser
app.use(exp.json());

app.use(cors());

//Import user and product APIs
const userApp = require("./APIs/userApi")
const productApp = require("./APIs/productApi")



//execute specific APIs based on requests
app.use("/user", userApp)
app.use("/product", productApp)



//dealing with invalid paths
app.use("**", (req, res, next) => {
    res.send({message: "Invalid path"})
})



//error handler
app.use((err, req, res, next) => {
    res.send({message: err.message})
})


//assign a port number
const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`)) 