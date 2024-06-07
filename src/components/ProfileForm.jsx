import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useContext,  useState } from 'react';
import { UserContext } from '../pages/Dashboard';

const ProfileForm = () => {

    const {user}=useContext(UserContext);
    const [image, setImage]=useState();
    const [imagePreview, setImagePreview] = useState(`${user.avatar}`);   

    const base64=(e)=>{
        const  reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);  
        reader.onload=()=>{
          setImage(reader.result);
        }
    };
    
    
  return (
    <>
        <Formik
        initialValues={{
            firstName: '',
            lastName:'',
            role:'',
            email:'',
        }}

        // validate={(values)=>{
        //     const errors={};
        //     if(!values.firstName) errors.firstName='Required';
        //     if(!values.lastName) errors.lastName='Required';
        //     if(!values.role) errors.role='Required';
    
        //     return errors
        // }}

        onSubmit={  (values)=>{        
            
            values.avatar=image
            const data=JSON.stringify(values)
            console.log(data)
            console.log(user)
           
        }}
        >
            <Form className='h-[90%]'>
                <div id="formContainer" className='h-full p-4 flex max-[950px]:flex-col'>
                    <div id="dpWrapper" className='h-full basis-2/5 p-2 flex flex-col items-center'>
                        <div id="dpCircle" className='m-4 p-2 h-72 w-72 border-2 border-green-500 rounded-full flex items-center justify-center max-[400px]:w-48 max-[400px]:h-48'>
                            <label htmlFor="avatar" className='bg-transparent max-[400px]:w-44  max-[400px]:h-44 h-64 w-64 border-2 rounded-full  flex items-center justify-center hover:border-[#3B2B3F] hover:pb-5 hover:shadow-lg hover:shadow-[#3B2B3F] cursor-pointer'
                            style={{
                                backgroundImage:`url(${imagePreview})`,
                                backgroundSize:'cover',
                                backgroundRepeat:'no-repeat', 
                                backgroundPosition:'center'
                            }}
                            >
                                <span className={(imagePreview===null) ? 'h-full w-full flex items-center justify-center text-lg font-semibold text-[#3B2B3F]':'h-full w-full flex items-center justify-center text-transparent hover:text-lg hover:text-black hover:font-semibold'}>Upload Profile Image</span>
                            </label>
                            <Field type="file" id="avatar" name="avatar" accept='images/*' className='hidden'
                            disabled
                            onChange={(e)=>{
                                const selectedFile=e.target.files[0];
                                if(selectedFile){
                                    const url=URL.createObjectURL(selectedFile);
                                    setImagePreview(url);
                                }
                                base64()
                            }}
                            />
                        </div>
                        <ErrorMessage name="avatar" component="div" className="text-red-500 text-xl font-semibold" />
                    </div>
                    <div id="formContainer" className='max-[400px]:m-0 max-[400px]:w-[240px] m-4 basis-3/5 p-5'>
                        <h2 className='font-bold text-2xl text-gray-800'>Profile Info</h2>
                        <div id='inputField' className='max-[400px]:h-14 h-24 w-full p-2 flex items-center justify-center  max-[570px]:gap-2'>
                            <label htmlFor="firstName" className='basis-[30%] text-[#3B2B3F] font-semibold '>First Name</label>
                            <ErrorMessage name="firstName" component="div" className="text-red-500" />
                            <Field type="text" name="firstName" id="firstName" className='basis-[70%] p-2 border border-gray-400 hover:border-[#3B2B3F] focus:shadow-sm focus:shadow-[#3B2B3F] focus:border-[#3B2B3F] focus:outline-none rounded-lg ' value={user.firstName} disabled/>
                        </div>

                        <div id='inputField' className=' max-[400px]:h-14 h-24 w-full p-2 flex items-center justify-center max-[570px]:gap-2'>
                            <label htmlFor="lastName" className='basis-[30%] text-[#3B2B3F] font-semibold '>Last Name</label>
                            <ErrorMessage name="lastName" component="div" className="text-red-500" />
                            <Field type="text" name="lastName" id="lastName" className='p-2 border border-gray-400 hover:border-[#3B2B3F] focus:shadow-sm focus:shadow-[#3B2B3F] focus:border-[#3B2B3F] focus:outline-none rounded-lg basis-[70%]' value={user.lastName} disabled/>
                        </div>

                        <div id='inputField' className='max-[400px]:h-14 h-24 w-full p-2 flex items-center justify-center max-[570px]:gap-2'>
                            <label htmlFor="role" className='basis-[30%] text-[#3B2B3F] font-semibold '>Role</label>
                            <ErrorMessage name="role" component="div" className="text-red-500" />
                            <Field type="text" name="role" id="role" className='p-2 border border-gray-400 hover:border-[#3B2B3F] focus:shadow-sm focus:shadow-[#3B2B3F] focus:border-[#3B2B3F] focus:outline-none rounded-lg basis-[70%]' value={user.role} disabled/>
                        </div>

                        <div id='inputField' className='max-[400px]:h-14 h-24 w-full p-2 flex items-center justify-center max-[570px]:gap-2'>
                            <label htmlFor="role" className='basis-[30%] text-[#3B2B3F] font-semibold '>Email</label>
                            <ErrorMessage name="email" component="div" className="text-red-500" />
                            <Field type="email" name="email" id="email" className='p-2 border border-gray-400 hover:border-[#3B2B3F] focus:shadow-sm focus:shadow-[#3B2B3F] focus:border-[#3B2B3F] focus:outline-none rounded-lg basis-[70%]' value={user.email} disabled />
                        </div>
                        
                        {/* <button type="submit" className='mt-5 p-2 h-12 w-36 bg-[#FFF] border-2 border-[#3B2B3F] text-green-500 font-semibold rounded-xl hover:shadow-md hover:shadow-[#3B2B3F] hover:border-purply hover:text-green-300 hover:bg-[#3B2B3F]'>Submit</button> */}
                    </div>
                </div>
            </Form>
        </Formik>
    </>
  )
}

export default ProfileForm