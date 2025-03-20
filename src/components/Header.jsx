import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

const Header = ({ isLoginIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
        <div className="container flex items-center justify-between h-24 px-5">
          <div className="flex items-center gap-8">
            <a href="#home">
              <img alt="OsteoAI Logo" width="120" height="auto" src={logo} />
            </a>
            <nav className="relative z-10 hidden md:flex max-w-max flex-1 items-center justify-center">
              <div className="relative">
                <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                  <li className="hover:scale-105">
                    <a href="#about" className="text-lg font-medium px-4 py-2">
                      <span className="cursor-pointer">About</span>
                    </a>
                  </li>
                  <li className="hover:scale-105">
                    <a
                      href="#working"
                      className="text-lg font-medium px-4 py-2"
                    >
                      <span className="cursor-pointer">How It Works</span>
                    </a>
                  </li>
                  <li className="hover:scale-105">
                    <a href="#team" className="text-lg font-medium px-4 py-2">
                      <span className="cursor-pointer">Our Team</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="absolute left-0 top-full flex justify-center"></div>
            </nav>
          </div>
          <Link to={isLoginIn ? "/" : "/login"}>
            <button className="hidden md:inline-flex items-center justify-center text-md font-medium border-2 border-[#3B2B3F] rounded-3xl h-12 w-36 px-3 hover:bg-[#3B2B3F] hover:text-green-300 hover:shadow-md shadow-[#3B2B3F]">
              <span className="outline-none cursor-pointer select-none">
                {isLoginIn ? "Dashboard" : "Get Started"}
              </span>
            </button>
          </Link>
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-black">
            <ul className="flex flex-col list-none items-center space-y-4 py-4">
              <li>
                <a href="#about" className="text-lg font-medium px-4 py-2">
                  <span className="cursor-pointer">About</span>
                </a>
              </li>
              <li>
                <a href="#working" className="text-lg font-medium px-4 py-2">
                  <span className="cursor-pointer">How It Works</span>
                </a>
              </li>
              <li>
                <a href="#team" className="text-lg font-medium px-4 py-2">
                  <span className="cursor-pointer">Our Team</span>
                </a>
              </li>
              <li>
                <Link to={isLoginIn ? "/" : "/login"}>
                  <button className="inline-flex items-center justify-center text-md font-medium border-2 border-[#3B2B3F] rounded-3xl h-12 w-36 px-3 hover:bg-[#3B2B3F] hover:text-green-300 hover:shadow-md shadow-[#3B2B3F]">
                    <span className="outline-none cursor-pointer select-none">
                      {isLoginIn ? "Dashboard" : "Get Started"}
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
