export default function NameBar() {
  return (
    <>
      <div className="fixed top-0 w-full p-1 md:p-2 text-[#e1e1e1] mix-blend-difference flex justify-between	">
        <div className="mix-blend-difference flex flex-col justify-center items-center gap-5">
          <div className="max-md:hidden font-Minerva md:text-[1.4vw] md:leading-none ">
            Open for offers and <br /> collaborations —
          </div>
          <div className="md:hidden text-lg  leading-tight font-Minerva ">
            Open for <br /> work —
          </div>
        </div>
        <div className="mix-blend-difference lg:mr-14">
          <span className="text-xl md:text-[2vw] md:font-medium font-semibold font-Minerva ">
            Ashwin Maurya
          </span>
        </div>
        <div>
          <a
            href="https://blog.ashwinmaurya.com"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer font-Minerva text-lg mr-2  md:mr-0 md:text-[1.4vw] leading-none"
          >
            My Blog
          </a>
        </div>
      </div>
    </>
  );
}
