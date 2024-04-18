import React from 'react'
import DashboardSidebar from './DashboardSidebar'

const DashboardScreen = () => {
  return (
    <>
        <div id="navContainer" className='py-5 px-10 h-screen w-full'>
            <div id="formWrapper" className='h-full '>
               <DashboardSidebar/>
            </div>
        </div>
    </>
  )
}

export default DashboardScreen