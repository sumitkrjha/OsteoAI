import { Link } from "react-router-dom"
import logo from "../assets/logo.png"


const DashboardNavbar = () => {
  return (
    <>
        <div id="navContainer" className='pt-5 px-10 h-28 w-full'>
            <div id="navbar" className='p-2 h-20 bg-white rounded-xl border-2 flex shadow-lg'>
                <div id="logo" className='basis-1/3 flex items-center'>
                    <img src={logo} alt="logo" className='h-16 w-32 cursor-pointer' />
                </div>
                <div id="dashboardBtn" className=' basis-2/3 flex justify-end gap-5'>
                    <Link to="/">
                        <button className='p-2 h-14 w-36 flex justify-center items-center gap-3 border-2 rounded-xl text-base font-semibold bg-blue-700 text-white hover:border-blue-900 hover:bg-white hover:text-blue-700'>
                        {/* Application SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z"/>
                                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            </svg>
                                {/* end Application SVG */}
                                Application
                        </button>
                    </Link>
                    <button className='p-2 h-14 w-36 flex justify-center items-center gap-7 border-2 rounded-xl text-base font-semibold bg-white text-blue-700 border-blue-900 hover:bg-blue-700 hover:border-white hover:text-white'>
                        Logout
                        {/* Logout SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                        </svg>
                        {/* end Logout SVG */}
                    </button>
                </div>               
            </div>
        </div>
    </>
  )
}

export default DashboardNavbar