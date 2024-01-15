import React from "react";
import "./MainHero.css";
export default function MainHero() {
  return (
    <>
      <div className="mx-[11vw] w-full flex">
        <div className="absolute top-0 max-md:top-10 left-0">
          <div className="p-2 pl-10 text-[1.5vw] font-Minerva max-md:text-xl text-gray-600">
            I <span className="font-semibold">Design</span> and{" "}
            <span className="font-semibold">Develop</span>
            <span> </span>
            websites for passion.
          </div>
        </div>
        <div className="relative bottom-7">
          <p className="text-[6.75vw] max-md:text-7xl relative top-10 max-md:top-0 text-gray-400 font-Minerva">
            I'm a
          </p>
          <br />
          <div className="shad">
            <section className="animation h-[20vh] text-[5.5vw] max-md:text-3xl font-PlayfairDisplay font-bold text-gray-700 overflow-hidden">
              <div className="first  bg-gray-200  rounded px-[1vw] mb-[1vh]">
                <div className="inline-block h-[17vh] ">
                  Full Stack Developer
                </div>
              </div>
              <div className="second bg-gray-200 rounded px-[1vw]  mb-[1vh]">
                <div className="inline-block h-[17vh] ">Web Designer</div>
              </div>
              <div className="third bg-gray-200 rounded px-[1vw]  mb-[1vh]">
                <div className="inline-block h-[17vh] ">Devops Engineer</div>
              </div>
            </section>
          </div>
          <br />
        </div>
        <div className="absolute right-32">
          <img
            className="h-96 z-[999]"
            src="https://www.nicepng.com/png/full/174-1741281_beautiful-sound-black-white-men-png.png"
            alt=""
          />
        </div>
        <p className="text-gray-700 pb-5 absolute bottom-0 drop-shadow-md drop font-lg font-proximanova mt-0">
          <h5 className="text-[1vw] font-PlayfairDisplay">
            Drop me an email :{" "}
          </h5>
          <h4 className="text-[2vw] font-Minerva cursor-pointer">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashwinmaurya30@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ashwinmaurya@gmail.com
            </a>
          </h4>
        </p>
      </div>
    </>
  );
}
