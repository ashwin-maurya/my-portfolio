import { useState } from "react";
import MainHero from "./components/MainHero";
import SocialIcons from "./components/SocialIcons";
import Projects from "./components/Projects";
import QuoteCard from "./components/QuoteCard";
import Contact from "./components/Contact";
import SideNav from "./components/SideNav";
import Reviews from "./components/Reviews";
function App() {
  return (
    <>
      <div className="relative no-scrollbar">
        <div className="h-screen w-screen flex flex-col snap-y snap-mandatory overflow-hidden overflow-y-auto scroll-smooth no-scrollbar">
          <section
            id="home"
            className="relative w-screen h-full flex-shrink-0 snap-center overflow-hidden bg-stone-50 flex items-center"
          >
            <MainHero />
          </section>
          <section
            id="about"
            className="relative w-full h-full flex-shrink-0 snap-center overflow-hidden bg-stone-50"
          >
            <QuoteCard />
          </section>
          <section
            id="project"
            className="relative w-full h-full flex-shrink-0 snap-center overflow-hidden bg-stone-50"
          >
            <Projects />
          </section>
          <section
            id="review"
            className="relative w-full h-full flex-shrink-0 snap-center overflow-hidden bg-stone-50"
          >
            <Reviews />
          </section>
          <section
            id="contact"
            className="relative w-full h-full flex-shrink-0 snap-center overflow-hidden bg-stone-50"
          >
            <Contact />
          </section>
        </div>
        <SocialIcons />
        <SideNav />
      </div>
    </>
  );
}

export default App;
