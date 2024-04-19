import React from 'react'
import Sidebar from '../components/Sidebar'
import ContentArea from '../components/ContentArea'

const Dashboard = () => {
  return (
    <>
        <div id="dashboardWrapper" className='h-screen w-full flex'>
            <div id="sidebarContainer" className='bg-[#f0f4f9] basis-[15%] h-screen rounded-r-2xl p-1 border-y-2 border-r-2 shadow-lg'>
                <Sidebar/>
            </div>
            <div id="contentAreaContainer" className='basis-[85%] p-2'>
                <ContentArea/>
            </div>
        </div>
    </>
  )
}

export default Dashboard