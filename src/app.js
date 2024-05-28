const express = require("express");
const signupRouter=require("./routes/Signup");
const loginRouter=require("./routes/Login");
const authenticatedRouter=require("./routes/Authenticated");
const updateRouter=require("./routes/Update");
const tumorRouter=require("./routes/Tumor");
const fractureRouter=require("./routes/Fracture");
const returnTumorRouter = require("./routes/ReturnTumorData");
const returnFractureRouter = require("./routes/ReturnFractureData");
const bodyParser=require("body-parser");
const cors=require("cors");
const {createTestUser} = require("./scripts/setup")

const app=express();
const PORT= process.env.PORT || 5100;

app.use(bodyParser.json());
app.use(cors());

createTestUser();
app.get("/", (req, res)=>{
    res.send("Osteo AI API is running")
})
app.use("/user", signupRouter);
app.use("/auth", loginRouter);
app.use("/api", authenticatedRouter);
app.use("/update", updateRouter);
app.use("/data", tumorRouter);
app.use("/upload", fractureRouter);
app.use("/find", returnTumorRouter);
app.use("/get", returnFractureRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running http://localhost:${PORT}`)
});
