import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function MainHero() {
  return (
    <>
      <div className="md:mx-[5vw] gap-[4vw] mx-2  w-full max-md:mb-10 md:flex">
        <div className="flex w-full lg:w-9/12 flex-col">
          <p className="text-4xl md:text-[2vw]  relative top-10 max-md:top-0 text-gray-400 font-Minerva">
            Im a
          </p>
          <section className="text-[2rem] md:text-[5.5vw] xl:text-[5.5vw] 2xl:text-[5.7vw] 3xl:text-[6vw] whitespace-nowrap  font-PlayfairDisplay font-semibold text-gray-700 overflow-hidden flex flex-col">
            {" "}
            <p>WordPress </p>
            <p className="text-right w-full leading-tight">
              {" "}
              & a Web Developer
            </p>{" "}
            <p> on Mission</p>
          </section>
          <div className="flex items-center text-2xl lg:text-[2vw] mt-5 text-gray-600 gap-5">
            <a
              href="https://www.linkedin.com/in/ashwin-maurya/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ashwin-maurya"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-3/12  mx-auto max-lg:max-h-44 max-lg:max-w-36 overflow-hidden bg-red-200 max-lg:mb-12">
          <img
            className="w-full h-full object-center object-cover"
            src="https://www.nicepng.com/png/full/174-1741281_beautiful-sound-black-white-men-png.png"
            alt=""
          />
        </div>
        <p className="text-gray-700 pb-5 absolute bottom-0 drop-shadow-md drop font-lg font-proximanova mt-0">
          <h5 className="text-lg md:text-[1vw] font-PlayfairDisplay">
            Drop me an email :{" "}
          </h5>
          <h4 className="text-2xl md:text-[1.5vw] font-Minerva cursor-pointer">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashwinmaurya30@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@ashwinmaurya.com
            </a>
          </h4>
        </p>
      </div>
    </>
  );
}
