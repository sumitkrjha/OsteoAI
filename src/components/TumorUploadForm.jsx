import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useState } from 'react'
import "../App.css"
import {UserContext} from "../pages/Dashboard"

const TumorUploadForm = () => {

  const [image, setImage] = useState("")
  const [imagePreview, setImagePreview] = useState(null) 
  const [result, setResult] = useState("none")
  const [resultImage, setResultImage] = useState(null)
  const [isLoader, setIsLoader] = useState(false)
  
  const {user}=useContext(UserContext);

  const payload={
    email:'',
    patientName:'',
    patientNumber:'',
    resultImage:'',
    resultValue:'',
  };

  const base64=()=>{
    const  reader=new FileReader();
    reader.readAsDataURL(image);  
    reader.onload=()=>{
      const base64String =  reader.result;
      predict(base64String);
    };

    const predict =async(base64)=>{
      setIsLoader(true);
      await fetch('https://osteoai-backend.onrender.com/predicttumor',{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
       
        body: JSON.stringify(base64)
      }).then(resp=>{
        if(resp.ok)
          resp.json().then(data=>{
            
            handleResults(data);
          })
      })
      .catch(err=>{
        console.log("Error:"+ err.message);
      })

    }

  };

  const uploadTumorData = async(payload)=>{
    const data=JSON.stringify(payload)
    try {
        const response=await fetch('https://osteoai-backend.onrender.com/data/tumor',{
        method:'POST',
        headers:{
          "Content-Type": "application/json"
        },
        body: data
      });
        const result=await response.json()
        console.log(result)
    } catch (error) {
       console.log('Tumor Data upload error')
    }
  }

  const handleResults = (data)=>{
    setIsLoader(false);
    setResult(data.result[0]);
    setResultImage(data.result[1]);
    
    payload.email=user.email;
    payload.resultImage=data.result[1];
    payload.resultValue=data.result[0];

    uploadTumorData(payload)
  }
  return (
    <>
      <Formik 
        initialValues={{
          XrayImage:image,
          patientNo:'',
          patientName:'',
        }}

        validate={(values)=>{
          const errors={};

          if(!values.patientNo){
            errors.patientNo='Required';
          }
          if(!values.patientName){
            errors.patientName='Required';
          }

          return errors;
        }}
        
        onSubmit={(values)=>{
          base64();
          payload.patientName=values.patientName;
          payload.patientNumber=values.patientNo;
        }}
      >
        <Form className='h-[72%] max-[660px]:h-[85%] max-[530px]:h-[95%]'>
          <div id="formContainer" className='h-full flex max-[660px]:flex-col p-2'>
                <div id="uploadBox" className='basis-2/5 p-2 flex items-center justify-center'>
                  <label htmlFor="XrayImage" className='bg-transparent h-[90%] max-[660px]:h-[95%] w-[90%] max-[660px]:w-[75%]  border-2 rounded-xl border-black flex items-center justify-center hover:border-[#3B2B3F] hover:pb-5 hover:shadow-lg hover:shadow-[#3B2B3F] cursor-pointer'
                  style={{
                    backgroundImage:`url(${imagePreview})`,
                    backgroundSize:'contain',
                    backgroundRepeat:'no-repeat', 
                    backgroundPosition:'center'
                  }}
                  >
                      <span className={(imagePreview===null) ? 'h-full w-full flex items-center justify-center text-lg font-semibold text-[#3B2B3F]':'h-full w-full flex items-center justify-center text-transparent hover:text-lg hover:text-red-500 hover:font-semibold'}>Upload X-Ray Image</span>
                  </label>
                </div>
                  <Field type="file" id="XrayImage" name="XrayImage" accept='images/*' className='hidden'
                  onChange={(e)=>{
                    const selectedFile=e.target.files[0];
                    setImage(selectedFile);

                    if(selectedFile){
                        const url=URL.createObjectURL(selectedFile);
                        setImagePreview(url);
                    }

                    setResult("none");
                  }}
                  />
              
              { result=="none" ? <>
              <div id="form" className=' basis-3/5 px-4 py-10 max-[660px]:py-0 flex flex-col items-center justify-center max-[660px]:justify-start gap-3'>
              {isLoader ? <div id="loader"></div> : <>
                <div id='inputField' className=' h-24 max-[660px]:h-10
                 w-full p-2 max-[660px]:p-0 flex items-center justify-center'>
                  <label htmlFor="patientNo" className='basis-[30%] text-[#3B2B3F] font-semibold '>Patient No.</label>
                  <ErrorMessage name="patientNo" component="div" className="text-red-500" />
                  <Field type="number" name="patientNo" id="patientNo" className='basis-[70%] p-2 border border-gray-400 hover:border-[#3B2B3F] focus:shadow-sm focus:shadow-[#3B2B3F] focus:border-[#3B2B3F] focus:outline-none rounded-lg '  />
                </div>
                <div id='inputField' className='h-24 max-[660px]:h-10
                 w-full p-2 max-[660px]:p-0 flex items-center justify-center'>
                  <label htmlFor="patientName" className='basis-[30%] text-[#3B2B3F] font-semibold '>Patient Name</label>
                  <ErrorMessage name="patientName" component="div" className="text-red-500" />
                  <Field type="text" name="patientName" id="patientName" className='p-2 border border-gray-400 hover:border-[#3B2B3F] focus:shadow-sm focus:shadow-[#3B2B3F] focus:border-[#3B2B3F] focus:outline-none rounded-lg basis-[70%]' />
                </div>
                <button type="submit" className='p-2 h-12 w-36 bg-[#FFF] border-2 border-[#3B2B3F] text-green-500 font-semibold rounded-xl hover:shadow-md hover:shadow-[#3B2B3F] hover:border-purply hover:text-green-300 hover:bg-[#3B2B3F]  '>Submit</button>
                </>
                }
              </div>
              </>
              :
              <>
              {/* To showcase the result.jpg */}
              <div id="result" className='basis-3/5 p-4  max-[530px]:py-0 flex  max-[530px]:items-start items-center justify-center '>
                  <div id="resultCard" className='h-[98%] w-[75%] max-[530px]:h-[53%] max-[530px]:w-[85%] bg-[#FFF] flex flex-col  max-[530px]:flex-row items-center justify-center gap-3 border-2 border-black rounded-xl shadow-md shadow-[#3B2B3F]'>
                      {result==true ? <span className=' text-lg font-bold font-serif text-red-500'>Cancer Found</span>:
                      <span className=' text-lg  max-[530px]:text-sm font-bold font-serif text-green-500'>Cancer Not Found</span>}
                      <img src={resultImage} alt='resultImage' className='h-[80%]  max-[530px]:h-[95%]' />
                  </div>
              </div> 
              </>
              }
          </div>
        </Form>
      </Formik>        
    </>
  )
}

export default TumorUploadForm