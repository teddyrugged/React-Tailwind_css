import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="flex max-w-[800px] mt-[-96px] w-full h-screen text-center flex-col mx-auto justify-center">
        <p className="text-[#00df9a] font-bold">GROWING WITH DATA ANALYTICS</p>
        <h1 className="font-bold text-4xl md:text-7xl sm:text-6xl md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-gray-500 font-bold md:text-2xl text-xl">
          Monitor your data analytics to increase revenune for BTB,BTC &SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-red-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
