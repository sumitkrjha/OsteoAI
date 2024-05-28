const express = require("express");
const {saveFractureData} = require("../controller/Fracture")

const router=express.Router();

router.post("/fracture", saveFractureData);

module.exports=router;

