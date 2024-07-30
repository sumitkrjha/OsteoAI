import React from "react";
import "../App.css";
import FractureYes from "../assets/ExampleImages/FractureYes.jpg";
import FractureNo from "../assets/ExampleImages/FractureNo.jpg";
import TumorNo from "../assets/ExampleImages/TumorNo.jpg";
import TumorYes from "../assets/ExampleImages/TumorYes.jpg";
const Dataset = () => {
  const sampleImages = [
    {
      title: "Bone Tumor",
      status: "Found",
      image: TumorYes,
    },
    {
      title: "Bone Tumor",
      status: "Not Found",
      image: TumorNo,
    },
    {
      title: "Bone Fracture",
      status: "Found",
      image: FractureYes,
    },
    {
      title: "Bone Fracture",
      status: "Not Found",
      image: FractureNo,
    },
  ];
  return (
    <>
      <div
        id="contentWrapper"
        className="bg-white h-full max-[400px]:h-[104vh] max-[660px]:h-[98%] max-[570px]:w-[90%] max-[530px]:w-[85%] max-[400px]:w-[105%] p-6 border-2 border-gray-300 rounded-2xl hover:shadow-lg "
      >
        <h2 className="font-bold text-3xl text-gray-800 mb-2">
          Example Images
        </h2>
        <p className=" text-base text-gray-600 mb-2">
          Understanding Our AI: Example X-Ray Images and Diagnoses
        </p>
        <h1 className="text-lg text-red-600 mb-2">
          *
          <span className=" text-base text-red-600 mb-5">
            {" "}
            The below provided images are for demonstration purposes only and
            should not be used for actual medical diagnosis or treatment
          </span>
        </h1>
        <div
          id="itemContainer"
          className="h-[70%] sm:h-[80%] w-full md:px-10 px-2 py-5 grid grid-cols-1 md:grid-cols-2 gap-3 overflow-y-scroll"
        >
          {sampleImages.map((item, index) => (
            <div
              key={index}
              id="sampleImages"
              className="h-auto w-auto p-2 py-5 border-2 border-[#3B2B3F] rounded-2xl flex flex-col items-center justify-center gap-2"
            >
              <h1 className="text-2xl font-semibold ">{item.title}</h1>
              <h3 className="text-lg font-semibold">
                Status :{" "}
                <span
                  className={`text-lg font-semibold ${
                    item.status === "Found" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {item.status}
                </span>
              </h3>
              <img src={item.image} alt="samples" className="h-72" />
              <a href={item.image} download>
                <button className="h-auto w-auto p-2 border-2 border-[#3B2B3F] rounded-xl text-lg font-semibold hover:bg-[#3B2B3F] hover:text-green-300">
                  Download to Use
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dataset;
