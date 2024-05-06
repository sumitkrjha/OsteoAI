import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom';

const AuthForm = ({formid}) => {
  return (
    <>
        {
            formid=='login' ? (
                <>
                    <Formik
                        initialValues={{
                            email:'',
                            password:'',
                        }}

                        validate={(values)=>{
                            const errors={};

                            if(!values.username) errors.username='Required';
                            if(!values.password) errors.password='Required';

                            return errors;
                        }}

                        onSubmit={(values)=>{
                            alert(JSON.stringify(values, null, 2))
                        }}
                    >
                        <Form className='flex flex-col items-center justify-center gap-16 mt-4'>
                            <div id="inputSection" className='h-12 w-[90%] flex flex-col gap-2 justify-start'>
                                <label htmlFor="email" className='text-base text-[#3B2B3F] font-semibold ml-1'>Username</label>
                                <Field type="email" id="email" name="email" placeholder="Email" className="h-12 w-full p-4 rounded-lg border-b-2 border-b-black  outline-none focus:border-b-[#3B2B3F]"/>
                                <ErrorMessage name="username" component="div" className='text-red-500'/>
                            </div>
                            <div id="inputSection" className='h-12 w-[90%] flex flex-col gap-2 justify-start'>
                                <label htmlFor="password" className='text-base text-[#3B2B3F] font-semibold ml-1'>Password</label>
                                <Field type="password" id="password" name="password" placeholder="Password" className="h-12 w-full p-4 rounded-lg border-b-2 border-b-black outline-none focus:border-b-[#3B2B3F]"/>
                                <ErrorMessage name="password" component="div" className='text-red-500'/>
                            </div>
                            <div id="submitBtn" className='mt-5'>
                                <button type="submit" className='p-2 h-12 w-36 bg-[#FFF] border-2 border-[#3B2B3F] text-green-500 font-semibold rounded-xl hover:shadow-md hover:shadow-[#3B2B3F] hover:border-purply hover:text-green-300 hover:bg-[#3B2B3F]'>Login</button>
                            </div>
                            <p className='mt-[-30px] text-base text-[#3B2B3F]'>Do not have an account? <strong className=' cursor-pointer'><Link to="/signup">Register</Link></strong></p>
                        </Form>
                    </Formik>
                </>
            )
            :
            (
            <>
                <Formik
                        initialValues={{
                            firstname:'',
                            lastname:'',
                            role:'',
                            email:'',
                            password:'',
                        }}

                        validate={(values)=>{
                            const errors={};

                            if(!values.firstname) errors.firstname='Required';
                            if(!values.lastname) errors.lastname='Required';
                            if(!values.role) errors.role='Required';
                            if(!values.email) errors.email='Required';
                            if(!values.password) errors.password='Required';

                            return errors;
                        }}

                        onSubmit={(values)=>{
                            alert(JSON.stringify(values, null, 2))
                        }}
                    >
                        <Form className='flex flex-col justify-start items-center gap-16 mt-4'>
                            <div id="personalInfoSection" className='h-12 w-full flex flex-col gap-3 justify-start mb-16'>
                                <div id="firstname" className='w-full flex items-center justify-start gap-2'>
                                    <label htmlFor="firstname" className='text-base text-[#3B2B3F] font-semibold ml-1 basis-[25%] flex flex-col'>First Name
                                    <ErrorMessage name="firstname" component="span" className='text-red-500 font-mono'/>
                                    </label>
                                    
                                    <Field type="text" id="firstname" name="firstname" placeholder="First Name" className="h-12 basis-[75%] p-4 rounded-lg border-b-2 border-b-black  outline-none focus:border-b-[#3B2B3F]"/>
                                </div>

                                <div id="lastname" className='flex items-center justify-center gap-2'>
                                    <label htmlFor="lastname" className='text-base text-[#3B2B3F] font-semibold ml-1 basis-[25%] flex flex-col'>Last Name
                                    <ErrorMessage name="lastname" component="div" className='text-red-500'/>
                                    </label>
                                    <Field type="text" id="lastname" name="lastname" placeholder="Last Name" className="h-12 basis-[75%] p-4 rounded-lg border-b-2 border-b-black  outline-none focus:border-b-[#3B2B3F]"/>
                                </div>

                                <div id="role" className='flex items-center justify-center gap-2'>
                                    <label htmlFor="role" className='text-base text-[#3B2B3F] font-semibold ml-1 basis-[25%] text-center flex flex-col'>Role
                                    <ErrorMessage name="role" component="div" className='text-red-500'/>
                                    </label>
                                    <Field type="text" id="role" name="role" placeholder="Role" className="h-12 basis-[75%] p-4 rounded-lg border-b-2 border-b-black  outline-none focus:border-b-[#3B2B3F]"/>
                                </div>

                            </div>
                            <div id="credentialInputSection" className='h-12 w-full flex flex-col gap-3 justify-start'>
                                <div id="username" className='flex items-center justify-center gap-2'>
                                    <label htmlFor="email" className='text-base text-[#3B2B3F] font-semibold ml-1 basis-[25%] flex flex-col'>Username
                                    <ErrorMessage name="email" component="div" className='text-red-500'/>
                                    </label>
                                    <Field type="email" id="email" name="email" placeholder="Email" className="h-12 basis-[75%] p-4 rounded-lg border-b-2 border-b-black  outline-none focus:border-b-[#3B2B3F]"/>
                                </div>

                                <div id="password" className='flex items-center justify-center gap-2'>
                                <label htmlFor="password" className='text-base text-[#3B2B3F] font-semibold ml-1 basis-[25%] flex flex-col'>Password
                                <ErrorMessage name="password" component="div" className='text-red-500'/>
                                </label>
                                <Field type="password" id="password" name="password" placeholder="Password" className="h-12 basis-[75%] p-4 rounded-lg border-b-2 border-b-black outline-none focus:border-b-[#3B2B3F]"/>
                                </div>
                            </div>
                            <div id="submitBtn" className='mt-5'>
                                <button type="submit" className='p-2 h-12 w-36 bg-[#FFF] border-2 border-[#3B2B3F] text-green-500 font-semibold rounded-xl hover:shadow-md hover:shadow-[#3B2B3F] hover:border-purply hover:text-green-300 hover:bg-[#3B2B3F]'>Register</button>
                            </div>
                            <p className='mt-[-30px] text-base text-[#3B2B3F]'>Already have an account? <strong className=' cursor-pointer'><Link to="/login">Login</Link></strong></p>
                        </Form>
                    </Formik>
            </>)
        } 
    </>
  )
}

export default AuthForm