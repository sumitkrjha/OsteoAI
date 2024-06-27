import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div class="flex items-center justify-center h-screen">
        <div class="flex-col space-y-4 text-center">
          <div class="text-3xl font-medium text-[#3B2B3F]">Osteo.A.I</div>
          <div class="text-5xl font-medium">Page not found</div>
          <div class="text-gray-500">
            Sorry, the page you're looking for isn't available.
          </div>
          <div class="flex items-center justify-center">
            <Link to="/">
              <div class="h-12 w-48 p-2 flex justify-center items-center rounded-lg font-semibold bg-[#3B2B3F] text-green-300  hover:scale-105 cursor-pointer hover:bg-white hover:border-[#3B2B3F] hover:border-2 hover:text-[#3B2B3F]">
                Visit Homepage
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
