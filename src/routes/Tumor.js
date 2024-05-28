const express = require("express");
const {saveTumorData} = require("../controller/Tumor")

const router=express.Router();

router.post("/tumor", saveTumorData);

module.exports=router;

