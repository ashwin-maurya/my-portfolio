import { useState } from "react";
import MainHero from "./components/MainHero";
import SocialIcons from "./components/SocialIcons";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import Project4 from "./Projects/Project4";
import About from "./components/About";
import Contact from "./components/Contact";
import SideNav from "./components/SideNav";
import Reviews from "./components/Reviews";
import NameBar from "./components/NameBar";
function App() {
  return (
    <>
      <div className="relative no-scrollbar ">
        <div className="h-screen w-100vw  flex flex-col snap-y snap-mandatory overflow-hidden overflow-y-auto scroll-smooth no-scrollbar boxPattern transition-all bg-[#f3f3f3] duration-150">
          <section
            id="home"
            className="relative w-screen h-full flex-shrink-0 snap-center overflow-hidden bg-stone-50  flex items-center"
          >
            <MainHero />
          </section>
          <section
            id="project"
            className="relative  w-full h-full flex-shrink-0 snap-center overflow-hidden bg--0"
          >
            <Project1 />
          </section>
          <section
            id="project"
            className="relative w-full h-full flex-shrink-0 snap-center overflow-hidden bg--0"
          >
            <Project2 />
          </section>
          <section
            id="project"
            className="relative w-full h-full flex-shrink-0 snap-center overflow-hidden bg--0"
          >
            <Project3 />
          </section>
          <section
            id="project"
            className="relative w-full h-full flex-shrink-0 snap-center overflow-hidden bg--"
          >
            <Project4 />
          </section>
          <section
            id="about"
            className="relative w-full h-full flex-shrink-0 snap-center overflow-hidden bg-stone-50"
          >
            <About />
          </section>
          <section
            id="review"
            className="relative w-full h-full flex-shrink-0 snap-center overflow-hidden bg--0"
          >
            <Reviews />
          </section>
          <section
            id="contact"
            className="relative w-full h-full flex-shrink-0 snap-center overflow-hidden bg--0"
          >
            <Contact />
          </section>
        </div>
        <SocialIcons />
        <NameBar />
        <SideNav />
      </div>
    </>
  );
}

export default App;
