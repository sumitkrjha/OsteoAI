import { ErrorMessage, Field, Form, Formik } from 'formik'
import user from "../assets/user.jpg"
import { useState } from 'react';

const ProfileForm = () => {
    const [imagePreview, setImagePreview] = useState(user);    
  return (
    <>
        <Formik
        initialValues={{
            firstName:'Sumit Kumar',
            lastName:'Jha',
            role:'Radiologist',
        }}

        validate={(values)=>{
            const errors={};
            if(!values.firstName) errors.firstName='Required';
            if(!values.lastName) errors.lastName='Required';
            if(!values.role) errors.role='Required';
    
            return errors
        }}

        onSubmit={(values)=>{
            alert(JSON.stringify(values,null,2))
        }}
        >
            <Form className='h-[90%]'>
                <div id="formContainer" className='h-full p-4 flex'>
                    <div id="dpWrapper" className='h-full basis-2/5 p-2 flex justify-center'>
                        <div id="dpCircle" className='m-4 p-2 h-72 w-72 border-2 border-green-500 rounded-full flex items-center justify-center'>
                            <label htmlFor="XrayImage" className='bg-transparent h-64 w-64 border-2 rounded-full  flex items-center justify-center hover:border-[#3B2B3F] hover:pb-5 hover:shadow-lg hover:shadow-[#3B2B3F] cursor-pointer'
                            style={{
                                backgroundImage:`url(${imagePreview})`,
                                backgroundSize:'cover',
                                backgroundRepeat:'no-repeat', 
                                backgroundPosition:'center'
                            }}
                            >
                                <span className={(imagePreview===null) ? 'h-full w-full flex items-center justify-center text-lg font-semibold text-[#3B2B3F]':'h-full w-full flex items-center justify-center text-transparent hover:text-lg hover:text-black hover:font-semibold'}>Upload Profile Image</span>
                            </label>
                            <Field type="file" id="XrayImage" name="XrayImage" accept='images/*' className='hidden'
                            onChange={(e)=>{
                                const selectedFile=e.target.files[0];
                                if(selectedFile){
                                    const url=URL.createObjectURL(selectedFile);
                                    setImagePreview(url);
                                }
                            }}
                            />
                        </div>
                    </div>
                    <div id="formContainer" className='m-4 basis-3/5 p-5 '>
                        <h2 className='font-bold text-2xl text-gray-800'>Edit Profile Info</h2>
                        <div id='inputField' className=' h-24 w-full p-2 flex items-center justify-center'>
                            <label htmlFor="firstName" className='basis-[30%] text-[#3B2B3F] font-semibold '>First Name</label>
                            <ErrorMessage name="firstName" component="div" className="text-red-500" />
                            <Field type="text" name="firstName" id="firstName" className='basis-[70%] p-2 border border-gray-400 hover:border-[#3B2B3F] focus:shadow-sm focus:shadow-[#3B2B3F] focus:border-[#3B2B3F] focus:outline-none rounded-lg '  />
                        </div>

                        <div id='inputField' className='h-24 w-full p-2 flex items-center justify-center'>
                            <label htmlFor="lastName" className='basis-[30%] text-[#3B2B3F] font-semibold '>Last Name</label>
                            <ErrorMessage name="lastName" component="div" className="text-red-500" />
                            <Field type="text" name="lastName" id="lastName" className='p-2 border border-gray-400 hover:border-[#3B2B3F] focus:shadow-sm focus:shadow-[#3B2B3F] focus:border-[#3B2B3F] focus:outline-none rounded-lg basis-[70%]' />
                        </div>

                        <div id='inputField' className='h-24 w-full p-2 flex items-center justify-center'>
                            <label htmlFor="role" className='basis-[30%] text-[#3B2B3F] font-semibold '>Role</label>
                            <ErrorMessage name="role" component="div" className="text-red-500" />
                            <Field type="text" name="role" id="role" className='p-2 border border-gray-400 hover:border-[#3B2B3F] focus:shadow-sm focus:shadow-[#3B2B3F] focus:border-[#3B2B3F] focus:outline-none rounded-lg basis-[70%]' />
                        </div>
                        
                        <button type="submit" className='mt-5 p-2 h-12 w-36 bg-[#FFF] border-2 border-[#3B2B3F] text-green-500 font-semibold rounded-xl hover:shadow-md hover:shadow-[#3B2B3F] hover:border-purply hover:text-green-300 hover:bg-[#3B2B3F]'>Submit</button>
                    </div>
                </div>
            </Form>
        </Formik>
    </>
  )
}

export default ProfileForm