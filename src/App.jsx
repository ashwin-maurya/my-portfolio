import MainHero from "./sections/home/MainHero";
import Project1 from "./sections/projects/Project1";
import About from "./sections/about/About";
import Contact from "./components/Contact";
import SideNav from "./components/SideNav";
import Reviews from "./sections/reviews/Reviews";
import NameBar from "./components/NameBar";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      getDirection: true,
    });

    return () => {
      if (scroll) scroll.destroy(); // Cleanup the scroll instance when the component unmounts
    };
  }, []);

  return (
    <>
      <Scrollbars
        autoHide
        autoHideDuration={500}
        autoHideTimeout={400}
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="relative">
          <div className="flex flex-col snap-y snap-mandatory bg-fixed overflow-y-auto scroll-smooth no-scrollbar boxPattern transition-all bg-[#f3f3f3] duration-150">
            <div ref={scrollRef}>
              <section
                id="home"
                className="relative w-screen h-[800px] md:h-screen  bg-stone-50  flex items-center"
              >
                <MainHero />
              </section>
              <section
                id="project"
                className="relative  w-screen h-full  bg--0"
              >
                <Project1 />
              </section>

              <section
                id="about"
                className="relative w-screen h-screen  bg-stone-50"
              >
                <About />
              </section>
              <section
                id="review"
                className="relative w-screen h-[600px] md:h-screen bg--0"
              >
                <Reviews />
              </section>
              <section
                id="contact"
                className="relative w-screen h-screen  bg-stone-50"
              >
                <Contact />
              </section>
            </div>
          </div>
          <NameBar />
          <SideNav />
        </div>
      </Scrollbars>
    </>
  );
}

export default App;
