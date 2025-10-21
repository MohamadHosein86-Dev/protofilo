import { motion } from "framer-motion";
import ScrollSection2 from "../../scrollanimation/Scrollanimation2";
import ScrollSection3 from "../../scrollanimation/Scrollanimation3";
import ScrollanimationHead from "../../scrollanimation/ScrollanimationHead";

export default function ProfileSec() {
  return (
    <div className="mx-auto   relative  max-w-[1200px]   px-6 md:px-4 pt-12  lg:p-4">
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
        <div className=" z-10 flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]" style={{ opacity: "1", transform: "none" }}>
          <ScrollSection2>
            <div className=" text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
              <img src="image.png" alt="Hossein Ghanimati - Front End Developer" decoding="async" data-nimg="1" className="scale-110  rounded-full object-contain p-7" style={{ color: "transparent" }}></img>
              <motion.svg width="412" height="413" viewBox="0 0 412 413" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }}>
                <circle cx="206" cy="206.401" r="204.5" stroke="#18f2e5" strokeWidth="3" strokeLinecap="round" strokeDasharray="18 36 54 72" />
              </motion.svg>
            </div>
          </ScrollSection2>
        </div>
        <div className="order-1 hidden   md:flex min-h-48  text-white flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]" style={{ opacity: "1", transform: "none;" }}>
          <ScrollSection3>
            <h1>
              <span className="  mb-2 block text-2xl lg:text-4xl font-black ">Hi - I&apos;m Hossein Ghanimati</span>
              <span className=" block  text-secondary text-[1.6rem] lg:text-[1.95rem] font-black ">Next.js Developer</span>
            </h1>
            <h2 className="text-neutral text-[16px] lg:text-lg mt-3">Crafting innovative solutions to solve real-world problems</h2>
            <div className="mt-6 flex flex-wrap gap-6">
              <a href="/resume" aria-label="Connect with me" className="bg-secondary min-w-32 cursor-pointer rounded-lg font-medium px-[16px] py-[10px] text-center   text-[#00071E]">
                Download Resume
              </a>
              <a href="https://github.com/MohamadHosein86-Dev" target="_blank" aria-label="View Github Profile" className=" font-medium cursor-pointer rounded-lg px-[14px] py-[10px] ">
                Github Profile
              </a>
            </div>
          </ScrollSection3>
        </div>
        <div className="order-1    flex md:hidden min-h-48  text-white flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]" style={{ opacity: "1", transform: "none;" }}>
          <ScrollanimationHead>
            <h1>
              <span className="  mb-2 block text-2xl lg:text-4xl font-black ">Hi - I&apos;m Hossein Ghanimati</span>
              <span className=" block  text-secondary text-[1.6rem] lg:text-[1.95rem] font-black ">Next.js Developer</span>
            </h1>
            <h2 className="text-neutral text-[16px] lg:text-lg mt-3">Crafting innovative solutions to solve real-world problems</h2>
            <div className="mt-6 flex flex-wrap gap-6">
              <a href="/resume" aria-label="Connect with me" className="bg-secondary min-w-32 cursor-pointer rounded-lg font-medium px-[16px] py-[10px] text-center   text-[#00071E]">
                Download Resume
              </a>
              <a href="https://github.com/hossein-ghanimati" target="_blank" aria-label="View Github Profile" className=" font-medium cursor-pointer rounded-lg px-[14px] py-[10px] ">
                Github Profile
              </a>
            </div>
          </ScrollanimationHead>
        </div>
      </div>
      <div>
        <ScrollSection2>
          <div className=" gap-[1rem] md:justify-around grid md:flex  mx-auto grid-cols-2 md:grid-cols-3 xl:grid-cols-4  mt-[5rem]  text-white  justify-center items-center text-center mb-16">
            <div className="mb-8 items-center gap-[4px] md:mb-0 flex flex-col  w-full md:w-[15%] ">
              <div className="text-4xl  font-bold ">1.5</div>
              <div className="text-sm md:text-base text-gray-400">Years of Experience</div>
            </div>
            <div className="mb-8 items-center gap-[4px] md:mb-0 flex flex-col  w-full md:w-[15%] ">
              <div className="text-4xl  font-bold ">+5</div>
              <div className="text-sm md:text-base text-gray-400">Projects Completed</div>
            </div>
            <div className="mb-8 items-center gap-[4px] md:mb-0 flex flex-col  w-full md:w-[15%] ">
              <div className="text-4xl  font-bold ">3</div>
              <div className="text-sm md:text-base text-gray-400">Happy Clients</div>
            </div>
            <div className="mb-8 items-center gap-[4px] md:mb-0 flex flex-col  w-full md:w-[15%] ">
              <div className="text-4xl  font-bold ">02</div>
              <div className="text-sm md:text-base text-gray-400">Work experience</div>
            </div>
          </div>
        </ScrollSection2>
      </div>
<<<<<<< HEAD
      <ScrollSection3>
        <div className="order-1 hidden   md:flex min-h-48  text-white flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]" style={{ opacity: "1", transform: "none;" }}>
          <h1>
            <span className="  mb-2 block text-2xl lg:text-4xl font-black ">Hi - I&apos;m Hossein Ghanimati</span>
            <span className=" block  text-secondary text-[1.6rem] lg:text-[1.95rem] font-black ">Next.js Developer</span>
          </h1>
          <h2 className="text-neutral text-[16px] lg:text-lg mt-3">Crafting innovative solutions to solve real-world problems</h2>
          <div className="mt-6 flex flex-wrap gap-6">
            <a href="/resume" aria-label="Connect with me" className="bg-secondary min-w-32 cursor-pointer rounded-lg font-medium px-[16px] py-[10px] text-center   text-[#00071E]">
              Download Resume
            </a>
            <a href="https://github.com/MohamadHosein86-Dev" target="_blank" aria-label="View Github Profile" className=" font-medium cursor-pointer rounded-lg px-[14px] py-[10px] ">
              Github Profile
            </a>
          </div>
        </div>
      </ScrollSection3>
      <ScrollanimationHead>
        <div className="order-1    flex md:hidden min-h-48  text-white flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]" style={{ opacity: "1", transform: "none;" }}>
          <h1>
            <span className="  mb-2 block text-2xl lg:text-4xl font-black ">Hi - I&apos;m Hossein Ghanimati</span>
            <span className=" block  text-secondary text-[1.6rem] lg:text-[1.95rem] font-black ">Next.js Developer</span>
          </h1>
          <h2 className="text-neutral text-[16px] lg:text-lg mt-3">Crafting innovative solutions to solve real-world problems</h2>
          <div className="mt-6 flex flex-wrap gap-6">
            <a href="/resume" aria-label="Connect with me" className="bg-secondary min-w-32 cursor-pointer rounded-lg font-medium px-[16px] py-[10px] text-center   text-[#00071E]">
              Download Resume
            </a>
            <a href="https://github.com/hossein-ghanimati" target="_blank" aria-label="View Github Profile" className=" font-medium cursor-pointer rounded-lg px-[14px] py-[10px] ">
              Github Profile
            </a>
          </div>
        </div>
      </ScrollanimationHead>

=======
>>>>>>> c026af8 (add)
      <img className=" top-50 xl:top-10 -left-17 xl:-left-55 w-full xl:w-10/12 z-1 absolute " src="bg-sm.e20d3662.svg" alt="" />
    </div>
  );
}
