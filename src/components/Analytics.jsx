import React from "react";
import laptop from '../Images/laptop.jpeg';

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4 ">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={laptop} alt="a laptop" />
        <div className=" flex flex-col justify-center ">
          <h1 className=" font-bold text-[#00df9a]">Data Analytics Dashboard</h1>
          <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl py-2">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            distinctio sint error cumque blanditiis ea atque sapiente, a
            voluptas pariatur, exercitationem earum. Ea, modi rerum. Dolor non
            dicta consequatur quaerat unde rem accusantium impedit a sed
            voluptatum nam tempore fugit cupiditate porro at nemo repellat eaque
            eius iste, ratione velit recusandae, praesentium delectus maiores.
            Repellat sequi maiores in! Deserunt, placeat!
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white hover:bg-[#00df9a] ">
          Get Started
        </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
