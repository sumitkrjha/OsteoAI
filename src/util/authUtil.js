const jwt = require("jsonwebtoken")
const secretKey = require("../configuration/jwtConfig");

function generateToken(user){
    const payload={
        id:user._id,
        email:user.email,
        role:user.role
    };

    return jwt.sign(payload, secretKey, {expiresIn: "10h"})
};

function generateRefreshToken(user){
    const payload={
        id:user._id,
        email:user.email,
        role:user.role
    };

    return jwt.sign(payload, secretKey, {expiresIn: "7h"})
};

function verifyToken(token)
{
    return jwt.verifyToken(token, secretKey);
}


module.exports={generateToken,generateRefreshToken, verifyToken}