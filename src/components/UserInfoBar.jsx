import user from "../assets/user.jpg"

const UserInfoBar = () => {
  return (
    <>
        <div id="navbarwrapper" className=' bg-white h-80 p-2 ml-2 border-2 border-gray-300 rounded-2xl hover:shadow-lg '>
           <div id="userBar" className=" h-[90%] p-2 mt-5 flex flex-col items-center">
            <div id="imageContainer" className="h-34 w-34 p-2 border-2 border-green-300 rounded-full flex items-center justify-center ">
              <img src={user} alt="profile pic" className=" h-28 w-28 rounded-full"/>
            </div>
              <h4 className="text-base font-semibold text-[#3B2B3F] mt-4 mb-2">Sumit Kumar Jha</h4>
              <h4 className="text-base">Radiologist</h4>
           </div>
        </div>
    </>
  )
}

export default UserInfoBar