import React from "react";
import "./About.css";
export default function QuoteCard() {
  return (
    <div className="w-full h-full flex justify-center  items-center flex-row">
      <div className="flex justify-center flex-col gap-10 items-center mt-10">
        <div className="p-5 px-10 bg-gray-200 flex flex-col justify-center items-center rounded shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-150">
          <span className="text-2xl">
            <span className="font-Minerva">50</span>+
          </span>
          <span className="font-bold text-2xl font-PlayfairDisplay">
            Projects
          </span>
        </div>
        <div className="p-5 px-10 bg-gray-200 flex flex-col justify-center items-center rounded shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-150">
          <span className="text-2xl">
            <span className="font-Minerva">3</span>+
          </span>
          <span className="font-bold text-2xl font-PlayfairDisplay">
            Experience
          </span>
        </div>
        <div className="p-5 px-10 bg-gray-200 flex flex-col justify-center items-center rounded shadow hover:-translate-y-1 hover:shadow-lg transition-all duration-150">
          <span className="text-2xl">
            <span className="font-Minerva">15</span>+
          </span>
          <span className="font-bold text-2xl font-PlayfairDisplay">
            Clients
          </span>
        </div>
      </div>
      <div className="ml-40">
        <blockquote className="s font-sans">
          I am a seasoned Pune-based freelancer with 3 years of dedicated
          experience, offering technical expertise and a proven track record in
          delivering high-quality work.
          <br />
          Committed to excellence, I bring reliability and proficiency to every
          project, ensuring client satisfaction through my skilled and
          professional approach.
        </blockquote>
      </div>
    </div>
  );
}
