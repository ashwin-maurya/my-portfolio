import React, { useEffect, useRef } from "react";

export default function ProjectWindow({ image }) {
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
    <div className="relative cursor-pointer rounded-md" ref={moveWrapRef}>
      <span
        id="project1"
        ref={project1Ref}
        className="absolute transition-all z-[999999] duration-0 text-white opacity-80  backdrop-blur-sm  bg-black p-5 py-7 rounded-full "
        style={{ display: "none" }}
        onClick={openModal}
      >
        <span className="backdrop-blur-sm text-lg font-semibold">View</span>
      </span>
      <div className="w-[90vw] h-72 md:w-[35vw] md:h-[60vh] float-left cursor-pointer m-2 shadow-md bg-cover bg-center bg-white">
        <img
          src={image}
          className="absolute object-top w-full w-contain top-0 left-0 right-0 "
          alt=""
        />
        <span className="h-10 relative bottom-1 bg-gray-200 flex justify-start items-center rounded-tl-6 rounded-tr-6 z-100000">
          <ul className="list-none p-0 flex pl-3">
            <li className="h-4 w-4 rounded-full inline-block mr-3 box-border bg-red-500 border-2 border-red-700"></li>
            <li className="h-4 w-4 rounded-full inline-block mr-3 box-border bg-yellow-500 border-2 border-yellow-700"></li>
            <li className="h-4 w-4 rounded-full inline-block mr-3 box-border bg-green-500 border-2 border-green-700"></li>
          </ul>
        </span>
      </div>
    </div>
  );
}
