import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import Github from "../assets/SVG/Github.svg"
import rightArrow from "../assets/SVG/RightArrow.svg"

const Footer = () => {
  return (
    <>
        <div id="footerContainer" className='pt-5 px-10 h-28 w-full'>
            <div id="footer" className='p-2 h-20 bg-white rounded-xl border-2 flex shadow-lg'>
                <div id="logo" className=' basis-1/12 flex items-center'>
                    <img src={logo} alt="logo" className='h-16 w-32 cursor-pointer' />
                </div>
                <div id="copyright" className="pl-2 basis-3/5 flex items-center ">
                    <p className="pl-4 h-10 border-l-2 border-gray-600 flex items-center text-sm text-gray-700">© 2024 OsteoAI - <a href="https://github.com/sumitkrjha/OsteoAI" target="_blank" className="hover:text-gray-900 pl-1">@OsteoAI</a></p>
                </div>
                <div id="githubBtn" className='basis-1/3 flex justify-end'>
                    <Link to="https://github.com/sumitkrjha/OsteoAI" target="_blank">             
                        <button className='p-2 h-14 w-40 flex justify-center items-center gap-7 border-2 rounded-xl bg-gray-800 font-bold text-white hover:border-gray-900 hover:bg-gray-900'>
                            <div id="githubLogo&Text" className="flex justify-center items-center gap-2">
                                <img src={Github} alt="githubLogo" />GitHub 
                            </div>
                            <img src={rightArrow} alt="arrow" />
                        </button>
                    </Link>
                </div>         
            </div>
        </div>
    </>
  )
}

export default Footer