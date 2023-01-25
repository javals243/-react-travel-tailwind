import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1>BEACHES</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="text-right lg:flex">
            <li className="hover:cursor-pointer">Home</li>
            <li className="hover:cursor-pointer">Destinations</li>
            <li className="hover:cursor-pointer">Travel</li>
            <li className="hover:cursor-pointer">View</li>
            <li className="hover:cursor-pointer">Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
