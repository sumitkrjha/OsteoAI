import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const PlatformNavbar = () => {
  return (
    <>
        <div id="navContainer" className='pt-5 px-10 h-28 w-full'>
            <div id="navbar" className='p-2 h-20 bg-white rounded-xl border-2 flex shadow-lg'>
                <div id="logo" className='basis-1/3 flex items-center'>
                    <img src={logo} alt="logo" className='h-16 w-32 cursor-pointer' />
                </div>
                <div id="appMenu" className='basis-1/3 flex items-center justify-center'>
                    <ul className='flex items-center justify-center gap-4'>
                        <li className='p-2 cursor-pointer rounded-lg hover:bg-blue-600 hover:text-white'>Cancer Detector</li>
                        <li className='p-2 cursor-pointer rounded-lg hover:bg-blue-600 hover:text-white'>Fracture Detector</li>
                    </ul>
                </div>
                <div id="dashboardBtn" className='basis-1/3 flex justify-end'>
                    <Link to="/dashboard"><button className='p-2 h-14 w-36 border-2 rounded-xl bg-blue-700 text-white hover:border-blue-900 hover:bg-white hover:text-black'>Dashboard</button></Link>
                </div>               
            </div>
        </div>
    </>
  )
}

export default PlatformNavbar