const User = require("../models/User")

async function updateUser(req, res){
    try {
        const {email, firstName, lastName, role, avatar}=req.body;
        const findUser= await User.findOne({email});

        if(!findUser){
            return res.status(404).json({message: "User Not Found"});
        }

        findUser.firstName=firstName;
        findUser.lastName=lastName;
        findUser.role=role;
        findUser.avatar=avatar;
        
        await findUser.save();
        res.json({message: "User updated successfully", updatedUser:findUser})
    } catch (error) {
        res.status(500).json({message:"Error updating user"})
    }
} 


module.exports={updateUser}