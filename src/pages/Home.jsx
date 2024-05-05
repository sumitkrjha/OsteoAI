import React, { useState } from 'react'
import HomeAppMenu from '../components/HomeAppMenu'
import TumorUploadForm from '../components/TumorUploadForm'
import FractureUploadForm from '../components/FractureUploadForm'

const Home = () => {
  
  const [activeApp, setActiveApp] = useState('tumor')
  return (
    <>
        <div id="contentWrapper" className='bg-white h-full p-2 border-2 border-gray-300 rounded-2xl hover:shadow-lg '>
            <HomeAppMenu activeApp={activeApp} setActiveApp={setActiveApp}/>
            {activeApp=='tumor'?<TumorUploadForm/>:<FractureUploadForm/>}
        </div>
    </>
  )
}

export default Home