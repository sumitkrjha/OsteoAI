const express = require("express");
const {returnFractureData} = require("../controller/FindFracture")

const router=express.Router();

router.post("/returnFracture", returnFractureData);

module.exports=router;