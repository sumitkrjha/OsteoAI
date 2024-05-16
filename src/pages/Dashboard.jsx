import { Outlet, useNavigate} from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import UserInfoBar from '../components/UserInfoBar'
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const navigate=useNavigate();
  const token=localStorage.getItem("token");
  const [user, setUser] = useState('');

  useEffect(() => {
      const fetchUser = async(e)=>{
        try {
          const response=await fetch("http://localhost:5100/api/user",{
            headers:{
              "Authorization": `Bearer ${token}`,
            },
          });
  
          const result=await response.json();
          setUser(result)
        } catch (error) {
          console.error(error.message);
        }
      }  
      if(token){
        fetchUser();
      }else{
        navigate("/login")
      }
    }, [navigate, token])

  return (
    <>
        <div id="dashboardWrapper" className='h-screen w-full flex'>
            <div id="sidebarContainer" className='bg-white basis-[15%] h-screen rounded-r-2xl p-1 border-y-2 border-r-2 border-r-gray-300 hover:shadow-lg'>
                <Sidebar/>
            </div>
            <div id="contentAreaContainer" className='basis-[85%] p-1'>
              <div id="contentcontainer" className='h-full flex'>
                <div id="mainContentContainer" className='basis-[80%] overflow-y-auto'>
                  <Outlet/>
                </div>
                <div id="userInfoContainer" className=' basis-[20%]'>
                  <UserInfoBar user={user}/>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard