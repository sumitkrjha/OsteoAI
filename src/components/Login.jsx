import React from 'react'
import logo from "../assets/logo.png"
import AuthForm from './AuthForm'

const Login = () => {
  return (
    <>
        <div id="loginWrapper" className='bg-yellow-300 h-screen flex items-center justify-center'>
            <div id="loginContainer" className='bg-white sm:h-[80%] md:h-[85%] lg:h-[75%] sm:w-[70%] md:w-[50%] lg:w-[35%] xl:w-[25%] border-2 border-[#3B2B3F] rounded-3xl p-4 flex flex-col'>
                <div id="logo" className='basis-[20%] flex justify-center items-center'>
                    <img src={logo} alt="OsteoAILogo" className='h-24'/>
                </div>
                <div id="form" className='basis-[80%] p-2'>
                    <AuthForm formid="login"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login