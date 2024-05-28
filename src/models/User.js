const mongoose = require("../configuration/dbConfig");

const url="https://cdn.icon-icons.com/icons2/2379/PNG/512/coronavirus_medical_doctor_professions_jobs_medical_care_icon_143925.png";

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    role: String,
    email: {type:String, unique: true},
    password: String,
    avatar: { type: String, default:url},
});

module.exports=mongoose.model("User", userSchema);