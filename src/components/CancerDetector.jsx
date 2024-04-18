import React from 'react'
import ImageUpload from "../components/ImageUpload"

const CancerDetector = () => {
  return (
    <>
        <div id="navContainer" className='py-5 px-10 h-screen w-full'>
            <div id="formWrapper" className='h-full flex items-center justify-center p-5'>
                <div id="form" className='h-[80%] w-[30%] border-2 p-5 shadow-lg rounded-xl flex items-center justify-center'>
                    {/* <ImageUpload/> */}
                    <h2 className='font-bold text-black text-3xl'>Image upload</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default CancerDetector