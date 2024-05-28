const express=require("express");
const {updateUser}=require("../controller/Update")

const router=express.Router();

router.post("/updateUser", updateUser);

module.exports=router;