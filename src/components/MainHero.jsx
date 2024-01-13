import React from "react";
import "./MainHero.css";
export default function MainHero() {
  return (
    <>
      <div class="mx-36 flex">
        <div className="">
          <p className="text-[3.5rem] text-gray-400 font-extrabold">I'm a</p>
          <br />
          <div className="shad">
            <section class="animation bg-white text-7xl font-serif font-bold text-gray-700">
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
          <p className="text-gray-700 drop-shadow-md drop font-lg font-mono mt-0">
            I design and develop websites for passion.
          </p>
        </div>
        <div className="h-[00px] absolute right-32">
          <img
            className="h-96"
            src="https://www.nicepng.com/png/full/174-1741281_beautiful-sound-black-white-men-png.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
