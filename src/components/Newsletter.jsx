import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white w-full py-16 px-4">
      <div className="mx-auto grid lg:grid-cols-3 max-w-[1240px] ">
        <div className="lg:col-span-2 my-4 py-4">
          <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl py-2">Want tips and trick to optimize your flow?</h1>
          <p>Sign up to our news letter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className=" flex flex-col sm:flex-row items-center justify-center">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="p-3 text-black mx-2 flex w-full rounded-md"
            />
            <button className="bg-[#00df9a] w-[200px]  text-black  rounded-md font-medium my-6 mx-auto py-3 hover:bg-red-200">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of our data.Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
