import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaChevronDown,
} from "react-icons/fa";

export default function SocialIcons() {
  const [isChevronOpen, setIsChevronOpen] = useState(true);

  const toggleChevron = () => {
    setIsChevronOpen(!isChevronOpen);
  };

  return (
    <>
      <div
        className={`fixed text-[1.7vw] mb-[1vh] bottom-0 left-0 text-gray-600 overflow-hidden`}
      >
        <div
          className={`flex flex-col justify-center items-center shadow p-1 transition-all duration-500 bg-gray-100 rounded mx-2 ${
            isChevronOpen ? "" : "translate-y-64"
          }`}
        >
          <div className="p-[.7vw] transition-all duration-100 hover:scale-105">
            <FaFacebook />
          </div>
          <div className="p-[.7vw] transition-all duration-100 hover:scale-105">
            <FaLinkedin />
          </div>
          <div className="p-[.7vw] transition-all duration-100 hover:scale-105">
            <FaTwitter />
          </div>
          <div className="p-[.7vw] transition-all duration-100 hover:scale-105">
            <FaInstagram />
          </div>
        </div>
        <div
          className="shadow my-[.7vh] py-[1vw] transition-all duration-100 hover:scale-105 flex justify-center items-center bg-gray-100 rounded mx-2 cursor-pointer"
          onClick={toggleChevron}
        >
          <FaChevronDown />
        </div>
      </div>
    </>
  );
}
