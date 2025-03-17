import React from 'react'
import AuthForm from './AuthForm'
import logo from "../assets/logo.png"

const Signup = () => {
  return (
    <>
        <div id="signupWrapper" className='bg-yellow-300 h-screen flex items-center justify-center'>
            <div id="signupContainer" className='bg-white sm:h-[85%] md:h-[90%] lg:h-[85%] max-[400px]:w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] border-2 border-[#3B2B3F] rounded-3xl p-4 flex flex-col'>
                <div id="logo" className='basis-[20%] flex justify-center items-center'>
                    <img src={logo} alt="OsteoAILogo" className='h-24'/>
                </div>
                <div id="form" className='basis-[80%] p-2 max-[400px]:p-0'>
                    <AuthForm formid="signup"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup