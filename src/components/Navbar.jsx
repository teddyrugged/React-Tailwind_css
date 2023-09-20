import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center mx-auto px-4 h-24">
      <h1 className="w-full text-3xl font-bold text-[#82baa8]"> DOLICO.</h1>
      <ul className="md:flex hidden">
        <li className="p-4"><a href="# ">Company</a></li>
        <li className="p-4"><a href="# ">Home</a></li>
        <li className="p-4"><a href="# ">Resources</a></li>
        <li className="p-4"><a href="# ">About</a></li>
        <li className="p-4"><a href="# ">Contact</a></li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#82baa8] m-7">
            REACT.
          </h1>
          <li className="p-4 border-b border-r-gray-600"><a href="# ">Company</a></li>
          <li className="p-4 border-b border-r-gray-600"><a href="# ">Home</a></li>
          <li className="p-4 border-b border-r-gray-600"><a href="# ">Resources</a></li>
          <li className="p-4 border-b border-r-gray-600"><a href="# ">About</a></li>
          <li className="p-4  ">Contact</li>
          {/* <li>Theme</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
