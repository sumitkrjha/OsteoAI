const mongoose = require("../configuration/dbConfig");

const userSchema = new mongoose.Schema({
    email: String,
    patientName: String,
    patientNumber: String,
    resultImage: String,
    resultValue: String
});

module.exports=mongoose.model("TumorData", userSchema);