import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-300 max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#82baa8]"> DOLICO.</h1>
        <p className="py-4 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          inventore eligendi fugiat delectus incidunt impedit
          quibusdam?
        </p>
        <div className="flex justify-between my-6 md:w-[75%]">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaTwitter size={30} />
          <FaGithub size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <div className="flex justify-between lg:col-span-2 mt-6">
        <div>
          <h2 class="text-gray-400 font-medium ">Solutions</h2>
          <ul>
            <li className="py-2 text-sm">
              <a href="# ">Analytics</a>
            </li>
            <li className="py-2 text-sm">
              <a href="# ">Marketing</a>
            </li>
            <li className="py-2 text-sm">
              <a href="# ">Commerce</a>
            </li>
            <li className="py-2 text-sm">
              <a href="# ">Insight</a>
            </li>
          </ul>
        </div>
        {/* Column 3 - Social Media Links with Icons */}
        <div>
          <h2 class="text-gray-400 font-medium ">Support</h2>
          <ul>
            <li className="py-2 text-sm">
              <a href="# ">Pricing</a>
            </li>
            <li className="py-2 text-sm">
              <a href="# ">Documentation</a>
            </li>
            <li className="py-2 text-sm">
              <a href="# ">Guide</a>
            </li>
            <li className="py-2 text-sm">
              <a href="# ">Api Status</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-gray-400 font-medium ">Company</h2>
          <ul>
            <li className="py-2 text-sm">
              <a href="# ">About</a>
            </li>
            <li className="py-2 text-sm">
              <a href="# ">Blog</a>
            </li>
            <li className="py-2 text-sm">
              <a href="# ">Job</a>
            </li>
            <li className="py-2 text-sm">
              <a href="# ">Press</a>
            </li>
            <li className="py-2 text-sm">
              <a href="# ">Partner</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-gray-400 font-medium ">Legal</h2>
          <ul>
            <li className="py-2 text-sm">
              <a href="# ">Claim</a>
            </li>
            <li className="py-2 text-sm">
              <a href="# ">Policy</a>
            </li>
            <li className="py-2 text-sm">
              <a href="# ">Terms</a>
            </li>

          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
