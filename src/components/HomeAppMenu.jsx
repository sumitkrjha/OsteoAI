import React from 'react'

const HomeAppMenu = ({activeApp, setActiveApp}) => {

 
  const handleClick = (AppId) =>{
    setActiveApp(AppId)
  }
  return (
    <>
        <div id="homeAppMenu" className='h-48 p-4 pb-0 rounded-xl'>
            <h2 className='font-bold text-3xl text-gray-800 mb-2'>Application</h2>
            <p className=' text-base text-gray-600 mb-2 max-[530px]:text-'>Choose the required application from below provided options.</p>
            <div id="appOptionList" className='h-24 p-4 pb-0 flex items-center justify-center'>
              <section className='bg-white w-[440px] py-2 px-7 flex justify-between border-2 border-gray-600 rounded-3xl gap-5 hover:shadow-xl'>
                <button className={`${activeApp=='tumor' ? 'h-10 w-40 p-2 pl-5 rounded-3xl bg-green-400 text-black text-base font-normal flex justify-center shadow-xl' : 'h-10 w-40 p-2 rounded-3xl text-[#3B2B3F] text-base font-medium flex justify-center hover:bg-green-400 hover:text-black hover:font-normal hover:shadow-xl hover:pl-5'}`}
                onClick={()=>handleClick('tumor')}>Bone Tumor</button>
                
                <button className={`${activeApp=='fracture' ? 'h-10 w-40 p-2 pl-5 rounded-3xl bg-green-400 text-black text-base font-normal flex justify-center shadow-xl' : 'h-10 w-40 p-2 rounded-3xl text-[#3B2B3F] text-base font-medium flex justify-center hover:bg-green-400 hover:text-black hover:font-normal hover:shadow-xl hover:pl-5'}`}
                onClick={()=>handleClick('fracture')}>Bone Fracture</button>
              </section>
            </div>
          </div>
    </>
  )
}

export default HomeAppMenu