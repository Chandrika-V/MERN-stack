const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {

    //get token from header property of request object
    let token = req.headers.authorization
    try{
        //verify token
        jwt.verify(token, 'abcdef')
        //forward re to next middleware
        next()
    }
    catch(err){
        //pass error to error handling middleware
        next(err)
    }
}

//export
module.exports = verifyToken;