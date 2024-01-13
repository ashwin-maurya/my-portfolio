import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaChevronDown,
} from "react-icons/fa";

export default function SocialIcons() {
  return (
    <>
      <div className="fixed bottom-0 left-0 text-gray-600 ">
        <div className="flex flex-col justify-center items-center shadow p-1 bg-gray-100 rounded mx-2 text-xl">
          <div className="p-2">
            <FaFacebook />
          </div>
          <div className="p-2">
            <FaLinkedin />
          </div>
          <div className="p-2">
            <FaTwitter />
          </div>
          <div className="p-2">
            <FaInstagram />
          </div>
        </div>
        <div className="shadow my-2 p-2 py-3 flex justify-center items-center bg-gray-100 rounded mx-2">
          <FaChevronDown />
        </div>
      </div>
    </>
  );
}
