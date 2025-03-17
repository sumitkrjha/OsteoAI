import github from "../assets/SVG/Github.svg";

const Footer = () => {
  return (
    <footer className="container mt-10 flex flex-col md:flex-row items-center justify-center py-10 gap-2">
      <p className="cursor-pointer text-center text-md font-semibold font-mono">
        © 2024 OsteoAI. All rights reserved
      </p>
      <a href="https://github.com/sumitkrjha/OsteoAI" target="_blank">
        <button className="h-10 w-auto text-white gap-1 text-lg font-mono bg-gray-800 flex items-center p-2 rounded-lg hover:bg-gray-900">
          <img src={github} alt="OsteoAI Github" className="h-5 w-7" />
          OsteoAI
        </button>
      </a>
    </footer>
  );
};

export default Footer;
