import React, { useEffect, useRef } from "react";
// import "./index.css";

export default function Project3() {
  const moveWrapRef = useRef(null);
  const project1Ref = useRef(null);

  useEffect(() => {
    const moveWrap = moveWrapRef.current;
    const project1 = project1Ref.current;

    if (!moveWrap || !project1) {
      return;
    }

    let mouseX = 0,
      mouseY = 0;

    const handleMouseMove = (e) => {
      const offset = moveWrap.getBoundingClientRect();
      mouseX = Math.min(
        e.pageX - offset.left,
        offset.width - project1.offsetWidth
      );
      mouseY = Math.min(
        e.pageY - offset.top,
        offset.height - project1.offsetHeight
      );

      if (mouseX < 0) mouseX = 0;
      if (mouseY < 0) mouseY = 0;
    };

    const handleMouseEnter = () => {
      project1.style.display = "block";
    };

    const handleMouseLeave = () => {
      project1.style.display = "none";
    };

    document.addEventListener("mousemove", handleMouseMove);
    moveWrap.addEventListener("mouseenter", handleMouseEnter);
    moveWrap.addEventListener("mouseleave", handleMouseLeave);

    let xp = 0,
      yp = 0;

    const loop = () => {
      xp += (mouseX - xp) / 10;
      yp += (mouseY - yp) / 10;
      project1.style.left = xp - 30 + "px";
      project1.style.top = yp - 30 + "px";
      requestAnimationFrame(loop);
    };

    loop();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      moveWrap.removeEventListener("mouseenter", handleMouseEnter);
      moveWrap.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const openModal = () => {
    console.log("hello");
  };

  return (
    <>
      <div className="flex w-full h-full max-md:flex-col justify-center items-center  flex-row-reverse  background">
        <div className="relative cursor-pointer rounded-md" ref={moveWrapRef}>
          <span
            id="project1"
            ref={project1Ref}
            className="absolute transition-all z-[999999] duration-0 text-white opacity-80  backdrop-blur-sm  bg-black p-5 rounded-full "
            style={{ display: "none" }}
            onClick={openModal}
          >
            <span className="backdrop-blur-sm">Visit</span>
          </span>
          <div
            className="w-[500px] max-sm:w-[300px] h-[400px] float-left cursor-pointer m-2 shadow-md bg-cover bg-center bg-white"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1445966275305-9806327ea2b5?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=14a02fab1200216368d682ecaa91e540)`,
            }}
          >
            <span className="h-10 bg-gray-800 flex justify-start items-center rounded-tl-6 rounded-tr-6 z-100000">
              <ul className="list-none p-0 flex pl-3">
                <li className="h-4 w-4 rounded-full inline-block mr-3 box-border bg-red-500 border-2 border-red-700"></li>
                <li className="h-4 w-4 rounded-full inline-block mr-3 box-border bg-yellow-500 border-2 border-yellow-700"></li>
                <li className="h-4 w-4 rounded-full inline-block mr-3 box-border bg-green-500 border-2 border-green-700"></li>
              </ul>
            </span>
          </div>
        </div>
        <div className="max-w-[400px] mr-28">
          <h1 className="pb-5 max-sm:pb-2 font-semibold text-5xl relative font-PlayfairDisplay capitalize">
            The Twin Towers
          </h1>
          <p className="pb-5 text-lg font-Minerva">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            laborum suscipit doloremque, expedita voluptatum maiores corporis
            modi assumenda esse consectetur error nulla, vero alias. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Minus, laborum suscipit
            doloremque, expedita voluptatum maiores corporis modi assumenda esse
            consectetur error nulla, vero alias.
          </p>
          <span className="font-Minerva cursor-pointer font-bold text-base">
            #content curation #art direction #copywriting #web design
            #interaction design #webflow development
          </span>
        </div>
      </div>
    </>
  );
}
