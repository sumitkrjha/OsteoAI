import React from 'react'
import "../App.css"
import logo from "../assets/logo.png"
const Dataset = () => {
  return (
    <>
        <div id="contentWrapper" className='bg-white h-full p-6 border-2 border-gray-300 rounded-2xl hover:shadow-lg '>
            <h2 className='font-bold text-3xl text-gray-800 mb-2'>Example Images</h2>
            <p className=' text-base text-gray-600 mb-2'>Understanding Our AI: Example X-Ray Images and Diagnoses</p>
            <h1 className='text-lg text-red-600 mb-2'>*<span className=' text-base text-red-600 mb-5'> The below provided images are for demonstration purposes only and should not be used for actual medical diagnosis or treatment</span></h1>
            <div id="itemContainer" className='h-[82%] p-2 overflow-y-scroll'>
                <div id="imageWrapper" className=' h-96 p-2 border-2 border-[#3B2B3F] rounded-lg'>
                    <div id="imageTitle" className='h-10 bg-gray-300 font-bold text-2xl text-green-800 mb-2'>Bone Tumor</div>
                    <div id="imageAndResult" className='h-56 bg-blue-200 flex'>
                        <img src={logo} alt="" className=' basis-1/2 '/>
                        <p className=' basis-1/2'>Expected Result: <br /><h1>Fracture Found</h1></p>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Dataset