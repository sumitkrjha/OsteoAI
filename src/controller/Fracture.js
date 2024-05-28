const FractureData = require("../models/FractureData");


async function saveFractureData(req, res){
    try {
        const { email, patientName, patientNumber, resultImage,   resultValue } = req.body;

        const newData=new FractureData({
            email,
            patientName,            
            patientNumber,
            resultImage,
            resultValue
        })
        const savedData=await newData.save();
        res.status(201).json({message: "data saved successfully", data:savedData});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


module.exports= {saveFractureData};

