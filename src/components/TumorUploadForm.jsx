import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'

const TumorUploadForm = () => {
  const [image, setImage] = useState("")
  const [imagePreview, setImagePreview] = useState(null);    
  
  const base64=()=>{
    const  reader=new FileReader();
    reader.readAsDataURL(image);  
    reader.onload=()=>{
      const base64String =  reader.result;
      alert(base64String);
      predict(base64String);
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
            
          })
      })
      .catch(err=>{
        console.log("Error:"+ err.message);
      })
   
    }

  };
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
          alert(JSON.stringify(values,null,2))
          base64();
        }}
      >
        <Form className='h-[72%]'>
          <div id="formContainer" className='h-full flex p-2'>
                <div id="uploadBox" className='basis-2/5 p-2 flex items-center justify-center'>
                  <label htmlFor="XrayImage" className='bg-transparent h-[90%] w-[90%] border-2 rounded-xl border-black flex items-center justify-center hover:border-[#3B2B3F] hover:pb-5 hover:shadow-lg hover:shadow-[#3B2B3F] cursor-pointer'
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
                  }}
                  />
              <div id="form" className=' basis-3/5 px-4 py-10 flex flex-col items-center justify-center gap-3'>
                <div id='inputField' className=' h-24 w-full p-2 flex items-center justify-center'>
                  <label htmlFor="patientNo" className='basis-[30%] text-[#3B2B3F] font-semibold '>Patient No.</label>
                  <ErrorMessage name="patientNo" component="div" className="text-red-500" />
                  <Field type="number" name="patientNo" id="patientNo" className='basis-[70%] p-2 border border-gray-400 hover:border-[#3B2B3F] focus:shadow-sm focus:shadow-[#3B2B3F] focus:border-[#3B2B3F] focus:outline-none rounded-lg '  />
                </div>
                <div id='inputField' className='h-24 w-full p-2 flex items-center justify-center'>
                  <label htmlFor="patientName" className='basis-[30%] text-[#3B2B3F] font-semibold '>Patient Name</label>
                  <ErrorMessage name="patientName" component="div" className="text-red-500" />
                  <Field type="text" name="patientName" id="patientName" className='p-2 border border-gray-400 hover:border-[#3B2B3F] focus:shadow-sm focus:shadow-[#3B2B3F] focus:border-[#3B2B3F] focus:outline-none rounded-lg basis-[70%]' />
                </div>
                <button type="submit" className='p-2 h-12 w-36 bg-[#FFF] border-2 border-[#3B2B3F] text-green-500 font-semibold rounded-xl hover:shadow-md hover:shadow-[#3B2B3F] hover:border-purply hover:text-green-300 hover:bg-[#3B2B3F]  '>Submit</button>
              </div>

              {/* To showcase the result.jpg */}
              {/* <div id="result" className='basis-3/5 p-4 flex items-center justify-center hidden'>
                  <div id="resultCard" className='h-[98%] w-[75%] bg-[#FFF] flex flex-col items-center justify-center gap-3 border-2 border-black rounded-xl shadow-md shadow-[#3B2B3F]'>
                      <span className=' text-lg font-bold font-serif text-red-500'>Cancer Found</span>
                      <img src={imagePreview} alt='resultImage' className='h-[80%]' />
                  </div>
              </div> */}
          </div>
        </Form>
      </Formik>        
    </>
  )
}

export default TumorUploadForm