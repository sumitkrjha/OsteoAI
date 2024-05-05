import React, { useState } from 'react'
import logo from "../assets/logo.png"
import github from "../assets/SVG/Github.svg"
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [activeBtn, setActiveBtn] = useState('home');
    const handleClick=(buttonId)=>{
        setActiveBtn(buttonId)
    }

  return (
    <>
        <div id="sidebarContainer" className=' h-full flex flex-col'>
            <div id="logo" className='basis-[10%] p-2 flex items-center justify-center'>
                <img src={logo} alt="OsteoAI logo" />
            </div>
            <div id="menu" className='basis-[80%] p-2 flex flex-col'>
                <div id="list" className='basis-[90%] p-2'>
                    <section className='flex flex-col gap-3'>
                        <Link to="/">
                            <button className={`${activeBtn=='home' ? 'h-12 w-48 p-3 flex justify-start items-center rounded-lg font-semibold bg-[#3B2B3F] text-green-300 gap-3':'h-12 w-48 p-3 flex justify-start items-center rounded-lg font-semibold hover:bg-[#3B2B3F] hover:text-green-300 gap-3'}`}
                            onClick={()=>{handleClick('home')}}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                                </svg>
                                Home
                            </button>
                        </Link>
                        
                        <Link to="/history">
                            <button className={`${activeBtn=='history' ? 'h-12 w-48 p-3 flex justify-start items-center rounded-lg font-semibold bg-[#3B2B3F] text-green-300 gap-3':'h-12 w-48 p-3 flex justify-start items-center rounded-lg font-semibold hover:bg-[#3B2B3F] hover:text-green-300 gap-3'}`}
                            onClick={()=>{handleClick('history')}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
                                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
                                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                                History
                            </button>
                        </Link>

                        <Link to="/profile">
                            <button className={`${activeBtn=='profile' ? 'h-12 w-48 p-3 flex justify-start items-center rounded-lg font-semibold bg-[#3B2B3F] text-green-300 gap-3':'h-12 w-48 p-3 flex justify-start items-center rounded-lg font-semibold hover:bg-[#3B2B3F] hover:text-green-300 gap-3'}`}
                            onClick={()=>{handleClick('profile')}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                </svg>
                                Profile
                            </button>
                        </Link>

                    </section>
                </div>
                <div id="logout" className='basis-[10%] p-3 flex items-center justify-center'>
                    <button className='h-12 w-48 flex items-center justify-center gap-7 border-2 border-red-500 rounded-xl text-red-500 font-semibold text-base hover:bg-red-500 hover:text-white hover:shadow-[#9e9d9d] hover:shadow-md'>
                        Logout
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div id="footer" className='basis-[10%] p-3 flex items-center justify-center gap-2'>
                <div id="copyright">
                    © 2024 OsteoAI — 
                </div>
                <button className='h-10 w-10 bg-gray-800 flex items-center p-2 rounded-lg hover:bg-gray-900'>
                    <img src={github} alt="OsteoAI Github" className='h-5 w-7' />
                </button>
            </div>
        </div>
    </>
  )
}

export default Sidebar