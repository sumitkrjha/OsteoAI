import React from 'react'

const DashboardSidebar = () => {
  return (
    <>
        <div id="sideBar" className='h-full w-60 p-5 bg-white border-2 rounded-lg shadow-md'>
            <h2 id="heading" className='h-14 flex items-center justify-center font-semibold text-lg '>Dashboard</h2>
            <div id="linkBreak" className=' h-[0.2%] w-full bg-gradient-to-r from-white from-1% via-[#5977e2] via-99% to-white to-1%'></div>
            <div id="menuList">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default DashboardSidebar