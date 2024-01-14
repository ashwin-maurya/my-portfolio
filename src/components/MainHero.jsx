import React from "react";
import "./MainHero.css";
export default function MainHero() {
  return (
    <>
      <div class="mx-36 flex">
        <div className="absolute top-0 left-0">
          <div className="p-2 pl-10 text-gray-600 ">
            I <span className="font-semibold">Design</span> and{" "}
            <span className="font-semibold">Develop</span>
            <span> </span>
            websites for passion.
          </div>
        </div>
        <div className="relative bottom-7">
          <p className="text-[5.5rem] relative top-10 text-gray-400 font-Minerva">
            I'm a
          </p>
          <br />
          <div className="shad">
            <section class="animation bg-white text-7xl font-PlayfairDisplay font-bold text-gray-700">
              <div class="first bg-gray-200 rounded px-4 mb-1">
                <div>Full Stack Developer</div>
              </div>
              <div class="second bg-gray-200 rounded px-4  mb-1">
                <div>Web Designer</div>
              </div>
              <div class="third bg-gray-200 rounded px-4 mb-2">
                <div>Devops Engineer</div>
              </div>
            </section>
          </div>
          <br />
        </div>
        <p className="text-gray-700 text-xl pb-5 absolute bottom-0 drop-shadow-md drop font-lg font-proximanova mt-0">
          <h5 className="text-sm font-PlayfairDisplay">Drop me an email : </h5>
          <h4 className="text-base font-Minerva cursor-pointer">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashwinmaurya30@gmail.com"
              target="_blank"
            >
              ashwinmaurya@gmail.com
            </a>
          </h4>
        </p>
        {/* <div className="absolute right-32">
          <img
            className="h-96 z-[999]"
            src="https://www.nicepng.com/png/full/174-1741281_beautiful-sound-black-white-men-png.png"
            alt=""
          />
        </div> */}
      </div>
    </>
  );
}
