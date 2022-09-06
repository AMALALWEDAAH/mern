const jwt = require("jsonwebtoken");

const key = process.env.SECRET_KEY

module.exports.authenticate = function(req, res, next){
    const authHeader = req.headers("authorization")
    if(!authHeader){
        return res.status(403).json({error: "No token provided"})
    }
    const token = authHeader.substring(7)
    jwt.verify(token, key, (err, decodedToken) => {
        if(err){
            res.status(401).json({error: "Bad token"})
        } else{
            req.userId = decodedToken.userId
            next();
        }
    })
}


