import user from "../assets/user.jpg"

const ContentNavbar = () => {
  return (
    <>
        <div id="navbarwrapper" className='h-24 p-2'>
            <div id="navbar" className='h-20 p-2 flex justify-end'>
                <div id="profileDetail" className='h-16 w-48 p-2 border-2 border-green-500 rounded-2xl flex items-center justify-center gap-2 hover:text-[#3B2B3F] hover:bg-green-500 cursor-pointer'>
                    <img src={user} alt="" className="rounded-lg h-10 border-gray-500 border-2"/>
                    <h5 className="text-base font-medium">Sumit Kumar Jha</h5>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContentNavbar