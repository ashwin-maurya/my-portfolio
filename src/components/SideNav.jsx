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
          <ul className="flex-1 flex pb-14 justify-between w-14 flex-col h-screen items-center mt-5  max-md:hidden">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className={`relative px-2  transition-all duration-150 py-1 inline rotate-90 font-medium ${
                  activeLink === item.href.substr(1)
                    ? "text-gray-900 text-xl "
                    : "text-gray-300 text-lg"
                } hover:text-gray-500 transition-colors font-mono duration-200 cursor-pointer`}
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
