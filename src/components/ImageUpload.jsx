import React, { useEffect, useState } from 'react'

const ImageUpload = () => {
  const [Image, setImage] = useState("");
  const [Predict, setPredict]=useState("Waiting for prediction");
  const [PreviewImage, setPreviewImage] = useState(null);

  
  const handleChange =(e)=>{
    const file=e.target.files[0];
    setImage(file);

    const previewUrl=URL.createObjectURL(file);
    setPreviewImage(previewUrl);
    
    setPredict("Waiting for prediction");
  };

  
  const handleSubmit =()=>{
    base64();
  };
  
  const base64=async ()=>{
    const  reader=new FileReader();
    reader.readAsDataURL(Image);  
    reader.onload=()=>{
      const base64String =  reader.result;
      console.log(base64String);
      predict(base64String)
    };

  };

  const predict =async(base64)=>{
 
    await fetch('http://localhost:5000/predict',{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
     
      body: JSON.stringify(base64)
    }).then(resp=>{
      if(resp.ok)
        resp.json().then(data=>{
          console.log(data)
          displayResult(data);
        })
    })
    .catch(err=>{
      console.log("Error:"+ err.message);
    })
 
  }
  const displayResult = (data)=>{
    const ans=data.result;
    console.log(ans);
    {ans?setPredict("true"):setPredict("false")}
  }
  
  return (
    <>
      <label htmlFor='image'>Select Image</label>
      <input type="file" name="image" accept='image/*' onChange={handleChange}/>
      <button onClick={handleSubmit} className='border-2 border-black p-2 m-3'>Submit</button>
      <img src={PreviewImage} alt="" />  
      <br /><h3>Prediction: {Predict}</h3>    
      <img src="" alt="" />  
    </>
  )
}

export default ImageUpload