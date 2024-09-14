import ProjectWindow from "./components/ProjectWindow";

const projects = [
  {
    title: "The Twin Towers",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                  laborum suscipit doloremque, expedita voluptatum maiores corporis
                  modi assumenda esse consectetur error nulla, vero alias. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.`,
    tags: "#content curation #art direction #copywriting #web design #interaction design #webflow development",
  },
  {
    title: "Project Two",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat suscipit voluptatum maiores corporis expedita assumenda esse
                  consectetur error nulla, vero alias.`,
    tags: "#UI/UX #branding #graphic design #digital marketing",
  },
  {
    title: "Project Three",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                  voluptatum maiores corporis modi assumenda esse consectetur error nulla,
                  vero alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    tags: "#mobile design #app development #user experience",
  },
  {
    title: "Project Four",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                  laborum suscipit doloremque, expedita voluptatum maiores corporis
                  modi assumenda esse consectetur error nulla, vero alias.`,
    tags: "#branding #advertising #graphic design #logo design",
  },
];

export default function ProjectList() {
  return (
    <div className="flex flex-col gap-20 md:gap-40 ">
      <div className="flex justify-center items-center"></div>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex w-full h-full max-md:flex-col justify-center items-center ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row md:gap-20"
          } background`}
        >
          <ProjectWindow />
          <div className="md:max-w-[30vw] md:mr-28 w-[90vw] ">
            <h1 className="pb-5 max-sm:pb-2 font-semibold text-4xl md:text-[3vw] relative font-PlayfairDisplay capitalize">
              {project.title}
            </h1>
            <p className="pb-5 text-xl md:text-[1.4vw] font-proximanova">
              {project.description}
            </p>
            <span className="font-Minerva cursor-pointer font-bold text-xl md:text-[1vw]">
              {project.tags}
            </span>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center"></div>
    </div>
  );
}
