const express = require("express");
const {signUpUser} = require("../controller/Signup")

const router=express.Router();

router.post("/signup", signUpUser);

module.exports=router;

