import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "./pages/Profile"
import History from "./pages/History"
import Home from "./pages/Home"
import Sidebar from "./components/Sidebar"
import UserInfoBar from "./components/UserInfoBar"


function App() {

  return (
    <>
      <BrowserRouter>
        <div id="dashboardWrapper" className='h-screen w-full flex'>
            <div id="sidebarContainer" className='bg-white basis-[15%] h-screen rounded-r-2xl p-1 border-y-2 border-r-2 border-r-gray-300 hover:shadow-lg'>
                <Sidebar/>
            </div>
            <div id="contentAreaContainer" className='basis-[85%] p-1'>
              <div id="contentcontainer" className='h-full flex'>
                <div id="mainContentContainer" className='basis-[80%] overflow-y-auto'>
                <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/profile" element={<Profile/>}></Route>
                  <Route path="/history" element={<History/>}></Route>
                </Routes>
                </div>
                <div id="userInfoContainer" className=' basis-[20%]'>
                  <UserInfoBar/>
                </div>
              </div>
            </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
