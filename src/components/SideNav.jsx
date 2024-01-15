import React, { useEffect, useState } from "react";
import { navLinks } from "./constants";

export default function SideNav() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0% -50% 0%" }
    );

    navLinks.forEach((item) => {
      const targetElement = document.getElementById(item.href.substr(1));
      if (targetElement) {
        observer.observe(targetElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-0 h-screen right-0 text-gray-600 ">
        <div>
          <ul className="flex-1 flex pb-[10vh] justify-between w-[10vh] flex-col h-screen items-center mt-[4vh]  max-md:hiden max-md:mt-16">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className={`relative px-2  transition-all duration-150 py-[1vh] inline rotate-90 font-medium ${
                  activeLink === item.href.substr(1)
                    ? "text-gray-900 text-[1.6vw]"
                    : "text-gray-300 text-[1.4vw] max-md:hidden "
                } hover:text-gray-500 transition-colors font-Minerva font-semibold duration-200 cursor-pointer`}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
