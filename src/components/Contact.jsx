import React from "react";

export default function Contact() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[25vw] md:text-[8vw] ml-10 md:ml-0 uppercase [word-spacing:20px] tracking-tight leading-tight font-serif">
            ha<span className="italic">V</span>e an idea ?
          </h1>
          <h5 className="text-xl md:text-[1.5vw] font-proximanova">
            Drop me an email :{" "}
          </h5>
          <h4 className="text-2xl md:text-[3vw] font-Minerva cursor-pointer">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashwinmaurya30@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@ashwinmaurya.com
            </a>
          </h4>
        </div>
      </div>
    </>
  );
}
