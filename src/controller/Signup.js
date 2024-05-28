const User = require("../models/User");
const bcrypt = require("bcrypt");

async function signUpUser(req, res){
    try {
        const {firstName, lastName, role, email, password} = req.body;
        const hashedPassword=await bcrypt.hash(password,10);

        const newUser=new User({
            firstName,
            lastName,
            role,
            email,
            password:hashedPassword
        })
        const savedUser=await newUser.save();
        res.status(201).json({message: "user created successfully", user:savedUser});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


module.exports= {signUpUser};

