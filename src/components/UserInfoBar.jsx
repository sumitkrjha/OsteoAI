import { useContext } from "react"
import avatar from "../assets/SVG/UserAvatar.svg"
import { UserContext } from "../pages/Dashboard"
const UserInfoBar = ({screenwidth}) => {
  
  const {user}=useContext(UserContext)
  return (
    <>
          <div id="navbarwrapper" className='bg-white max-[1100px]:h-20 h-80 max-[400px]:w-full max-[570px]:w-[90%] max-[530px]:w-[85%] ml-2 max-[1100px]:ml-0 p-2 border-2 border-gray-300 rounded-2xl hover:shadow-lg'>
            <div id="userBar" className={screenwidth<=1100 ? "h-[90%] p-2 mt-1 gap-1 flex justify-start items-center":"h-[90%] p-2 mt-5 flex flex-col items-center"}>
              <div id="imageContainer" className="h-34 w-34 p-2 border-2 border-green-300 rounded-full flex items-center justify-center">
                <img src={user.avatar? user.avatar:avatar} alt="profile pic" className={screenwidth<=1100 ? " h-10 w-10 rounded-full":" h-28 w-28 rounded-full"}/>
              </div>
              <div className={screenwidth<=1100 ? 'flex flex-col': 'flex flex-col items-center justify-center'}>
                <h4 className={screenwidth<=1100 ? "text-base font-semibold text-[#3B2B3F]": "text-base font-semibold text-[#3B2B3F] mt-4 mb-2"}>{user.firstName} {user.lastName}</h4>
                <h4 className="text-base">{user.role}</h4>
              </div>
            </div>
          </div>
    </>
  )
}

export default UserInfoBar