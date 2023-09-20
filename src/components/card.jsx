import React from "react";
import single from "../Images/single.png";
import double from "../Images/double.png"
import triple  from "../Images/triple.png"

const Card = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1024px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={single}
            alt="a "
          />
          <h1 className="text-2xl font-bold text-center py-8">Partnership</h1>
          <p className="text-center font-medium text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="border-b py-2 mx-8 mt-8">500GB Storage</p>
            <p className="border-b py-2 mx-8">1 Granted User </p>
            <p className="border-b py-2 mx-8 ">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-500">
          Start Trial
        </button>
        </div>
        <div className="w-full border bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg shadow-xl hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent bg-white"
            src={double}
            alt="a "
          />
          <h1 className="text-2xl font-bold text-center py-8">Group Account</h1>
          <p className="text-center font-medium text-4xl">$199</p>
          <div className="text-center font-medium">
            <p className="border-b py-2 mx-8 mt-8">1 TB Storage</p>
            <p className="border-b py-2 mx-8">3 Users Allowed</p>
            <p className="border-b py-2 mx-8 ">Send up to 10GB</p>
          </div>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-500 hover:text-black">
          Start Trial
        </button>
        </div>
        <div className="w-full border flex flex-col p-4 my-4 rounded-lg shadow-xl hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt="a "
          />
          <h1 className="text-2xl font-bold text-center py-8">Single User</h1>
          <p className="text-center font-medium text-4xl">$299</p>
          <div className="text-center font-medium">
            <p className="border-b py-2 mx-8 mt-8">5TB Storage</p>
            <p className="border-b py-2 mx-8">10 Users Allowed</p>
            <p className="border-b py-2 mx-8 ">Send up to 20GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-500">
          Start Trial
        </button>
        </div>

      </div>


    </div>
  );
};

export default Card;
