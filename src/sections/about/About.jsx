const boxData = [
  {
    count: "20+",
    label: "Projects",
  },
  {
    count: "3+ years",
    label: "Experience",
  },
  {
    count: "10+",
    label: "Clients",
  },
];

export default function QuoteCard() {
  return (
    <div className="w-full h-full flex max-md:flex-col justify-center items-center flex-row">
      <div className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-10 text-[#E1E1E1] items-center mt-10 md:w-auto w-[90vw]">
        {boxData.map((box, index) => (
          <div
            key={index}
            className="p-[1vw] md:p-[1vw] px-[2vw] md:px-[3vw] w-full bg-gray-800 flex flex-col justify-center items-center rounded shadow hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
          >
            <span className="text-xl md:text-[2vw]">
              <span className="font-Minerva">{box.count}</span>
            </span>
            <span className="font-medium md:font-bold text-xl md:text-[2vw] font-PlayfairDisplay">
              {box.label}
            </span>
          </div>
        ))}
      </div>
      <div className="md:ml-40 m-8">
        <blockquote className="font-thin text-xl md:text-[1.5vw] font-proximanova leading-8 relative p-2 w-[90vw] md:max-w-[40vw]">
          I am an accomplished freelancer based in Pune with a solid three year
          background, specializing in technical domains. I possess a
          demonstrated history of consistently working as a Full stack
          developer.
          <br className="md:my-0 my-2" />
          I prioritize the creation of distinctive layouts, engaging
          interactions, and effective typography usage. I seamlessly blend these
          elements to produce a user experience that is not only captivating but
          also leaves a lasting memory to the users.
          <br className="md:my-0 my-2" />
          Through my skilled and professional approach, I prioritize client
          satisfaction, and deliver the best I can.
        </blockquote>
      </div>
    </div>
  );
}
