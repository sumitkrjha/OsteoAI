const user=require("../models/User");
const bcrypt = require("bcrypt");

async function createTestUser(){
    try {
        const testUser=await user.findOne({email:'test@test.com'})
        if(testUser)
        {
            console.log("Test user Already Exists")
        }
        else{
            const newTest=new user({
                firstName:"Test",
                lastName:"Test",
                role:"Tester",
                email:"test@test.com",
                password: await bcrypt.hash("test@123", 10),
                avatar: "https://cdn-icons-png.flaticon.com/512/4157/4157277.png"
            })
            await newTest.save();
            console.log("Test Account Created Successfully")
        }
    } catch (error) {
        console.error(error.message)
    }
}

module.exports={createTestUser}