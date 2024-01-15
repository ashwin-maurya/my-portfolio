import React from "react";
import "./About.css";
export default function QuoteCard() {
  return (
    <div className="w-full h-full flex max-md:flex-col justify-center  items-center flex-row">
      <div className="flex justify-center flex-col gap-10 text-[#E1E1E1] items-center mt-10">
        <div className="p-5 px-10 w-full bg-gray-800 flex flex-col justify-center items-center rounded shadow hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
          <span className="text-2xl">
            <span className="font-Minerva">50</span>+
          </span>
          <span className="font-bold text-2xl font-PlayfairDisplay">
            Projects
          </span>
        </div>
        <div className="p-5 px-10 w-full bg-gray-800 flex flex-col justify-center items-center rounded shadow hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
          <span className="text-2xl">
            <span className="font-Minerva">3</span>+
          </span>
          <span className="font-bold text-2xl font-PlayfairDisplay">
            Experience
          </span>
        </div>
        <div className="p-5 px-10 w-full bg-gray-800 flex flex-col justify-center items-center rounded shadow hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
          <span className="text-2xl">
            <span className="font-Minerva">15</span>+
          </span>
          <span className="font-bold text-2xl font-PlayfairDisplay">
            Clients
          </span>
        </div>
      </div>
      <div className="ml-40 max-md:m-10">
        <blockquote className="font-thin text-xl leading-8 relative p-2 max-w-[500px] max-sm:w-[300px]font-sans">
          I am an accomplished freelancer based in Pune with a solid three-year
          background, specializing in technical domains. I possess a
          demonstrated history of consistently working as a Full stack
          developer.
          <br />
          I prioritize the creation of distinctive layouts, engaging
          interactions, and effective typography usage. I seamlessly blend these
          elements to produce a user experience that is not only captivating but
          also leaves a lasting impression.
          <br />
          Through my skilled and professional approach, I prioritize client
          satisfaction, and deliever the best I can.
        </blockquote>
      </div>
    </div>
  );
}
