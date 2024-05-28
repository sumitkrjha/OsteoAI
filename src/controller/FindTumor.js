const TumorData = require("../models/TumorData")

async function returnTumorData(req, res){
    try {
        const {email} = req.body
        await TumorData.find({email: email})
        .then((tumorData)=>{
            res.json({data:tumorData});
        })
        .catch((err)=>{
            console.error(err);
            res.status(500).json({message: 'Error Searching for tumorData'})
        });
    } catch (error) {
        res.status(404).json({message:'Something wrong'})
    }
}

module.exports={returnTumorData}