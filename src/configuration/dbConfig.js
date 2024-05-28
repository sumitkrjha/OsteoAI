const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000
});

mongoose.connection.on("connected", ()=>{
    console.log("Connected to MongoDB")
});

mongoose.connection.off("error", (error)=>{
    console.log("Error connecting DB : ", error)
});

module.exports=mongoose;