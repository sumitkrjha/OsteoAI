import { Outlet, useNavigate} from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import UserInfoBar from '../components/UserInfoBar'
import { createContext, useEffect, useState } from 'react';
import menu from "../assets/SVG/Menu.svg"

export const UserContext = createContext();

const Dashboard = () => {
  const navigate=useNavigate();
  const token=localStorage.getItem("token");
  const [user, setUser] = useState('');
  const [isCollasp, setIsCollasp] = useState(false);
  const [buttonClick, setButtonClick] = useState(false);
  const [screenwidth, setScreenwidth]=useState("")
  
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
    
    useEffect(()=>{

      const screenSize=()=>{
        setScreenwidth(window.innerWidth)
      }
      window.addEventListener('resize', screenSize)
      screenSize();

      if(screenwidth<=1200){
        setIsCollasp(true)
      }
      return ()=> window.removeEventListener('resize', screenSize)
    },[])

    const handleCollasp =()=>{
        setIsCollasp(!isCollasp)
        setButtonClick(true)
    }
    
    return (
    <>
          <div id="dashboardWrapper" className='h-screen w-full flex'>
              <div id="sidebarContainer" className={(screenwidth<=1200 && isCollasp===true) ? 'hidden':'basis-[15%] bg-white h-screen rounded-r-2xl p-1 border-y-2 border-r-2 border-r-gray-300 hover:shadow-lg '}>
                  <p>Screen size is {screenwidth}</p>
                  <Sidebar screenwidth={screenwidth} setIsCollasp={setIsCollasp} setButtonClick={setButtonClick}/>
              </div>
              {buttonClick==true ? <></> :
              <button onClick={handleCollasp} className={screenwidth>=1200 ? 'hidden' : 'h-8 w-8 mt-2 shrink-0'}>
                <img src={menu} alt="menu" className='sm:shrink-0'/>
              </button>
              }
              <div id="contentAreaContainer" className={(screenwidth<=1200 || isCollasp===true) ? 'basis-[100%] p-1':' basis-[85%] p-1'}>
                <div id="contentcontainer" className={screenwidth<=1100 ? 'h-full flex flex-col' : 'h-full flex'}>
                  <div id="mainContentContainer" className='max[1100px]:basis-[90%] max-[530px]:basis-[95%] basis-[80%] min-[1100px]:overflow-y-auto'>
                    <UserContext.Provider value={{user, setUser}}>
                      <Outlet/>
                    </UserContext.Provider>
                  </div>
                  <div id="userInfoContainer" className='max-[1100px]:basis-[10%] basis-[20%]'>
                    <UserContext.Provider value={{user, setUser}}>
                      <UserInfoBar screenwidth={screenwidth}/>
                    </UserContext.Provider>
                  </div>
                </div>
              </div>
          </div>
    </>
  )
}

export default Dashboard