const FractureData = require("../models/FractureData")

async function returnFractureData(req, res){
    try {
        const {email} = req.body
        await FractureData.find({email: email})
        .then((fractureData)=>{
            res.json({data:fractureData});
        })
        .catch((err)=>{
            console.error(err);
            res.status(500).json({message: 'Error Searching for fractureData'})
        });
    } catch (error) {
        res.status(404).json({message:'Something wrong'})
    }
}

module.exports={returnFractureData}