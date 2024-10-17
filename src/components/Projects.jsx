import React, { useEffect, useRef } from "react";
// import "./index.css";

export default function Project1() {
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

    // Hide the actual cursor
    // moveWrap.style.cursor = "none";

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
      <div className="flex w-full h-full max-md:flex-col justify-center items-center background">
        <div
          className="relative bg-black min-h-[450px] min-w-[350px] cursor-pointer bg-cover bg-center bg-no-repeat"
          ref={moveWrapRef}
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1445966275305-9806327ea2b5?ixlib=rb-0.3.5&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ&amp;s=14a02fab1200216368d682ecaa91e540)`,
          }}
        >
          <div
            id="project1"
            ref={project1Ref}
            className="absolute transition-all duration-75 text-black opacity-80  backdrop-blur-sm  bg-white p-5 rounded-full"
            style={{ display: "none" }}
            onClick={openModal}
          >
            <span className=" backdrop-blur-sm ">Visit</span>
          </div>
        </div>

        <div className="pb-8 max-w-[350px] mx-32 max-md:p-8 max-sm:pt-4">
          <h1 className="pb-2 max-sm:pb-2 font-semibold text-4xl relative font-PlayfairDisplay capitalize">
            The Twin Towers
          </h1>
          <p className="mb-4 text-lg font-Minerva">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            laborum suscipit doloremque, expedita voluptatum maiores corporis
            modi assumenda esse consectetur error nulla, vero alias. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Minus, laborum suscipit
            doloremque, expedita voluptatum maiores corporis modi assumenda esse
            consectetur error nulla, vero alias.
          </p>
          <div className="max-sm:p-1 max-md:mt-2  max-md:m-0   w-auto max-w-[200px] flex justify-center items-center flex-row text-black   border-2 p-2 gap-2 max-md:gap-1 max-sm:text-[14px]   border-black">
            <span>READ MORE</span>
          </div>
        </div>
      </div>
    </>
  );
}
