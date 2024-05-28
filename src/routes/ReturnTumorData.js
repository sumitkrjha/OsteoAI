const express = require("express");
const {returnTumorData} = require("../controller/FindTumor")

const router=express.Router();

router.post("/returnTumor", returnTumorData);

module.exports=router;