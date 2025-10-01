"use client";
import React, { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import { Link } from "react-scroll";

export default function Header() {
  //
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className=" px-0  text-lg text-primeText py-5 border-b border-[#1e2d3d] ">
      <div className=" contaner flex items-center justify-between ">
        <div className=" flex items-center gap-4 ">
          <Logo />
          <h2 className=" text-[16px] hidden md:block  md:text-[18px] ">Hossein Ghanimati</h2>
        </div>
        <div className={`md:hidden z-100 absolute bg-primery top-[6rem] h-full left-0 right-0 bgbox1 shadow-lg transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
          <ul className="flex flex-col items-center h-[100vh] py-4 gap-8">
            <Link onClick={() => setIsMenuOpen(false)} to="Skills" smooth="easeInOutQuart" duration={1200} offset={-60} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-cnolors ease-in delay-150   ">
              Skills
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} to="projects" smooth="easeInOutQuart" duration={1200} offset={-60} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-colors ease-in delay-150   ">
              Projects
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} to="Services" smooth="easeInOutQuart" duration={1200} offset={-60} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-colors ease-in delay-150   ">
              Services
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} to="Testimonials" smooth="easeInOutQuart" duration={1200} offset={-60} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-colors ease-in delay-150   ">
              Testimonials
            </Link>
            <Link onClick={() => setIsMenuOpen(false)} to="contact" smooth="easeInOutQuart" duration={1200} offset={-60} className="hidden lg:block " href={""}>
              contact-me
            </Link>
          </ul>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden flex flex-col cursor-pointer gap-1.5 p-2">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        <ul className=" hidden lg:flex items-center gap-8 ">
          <Link to="Skills" smooth="easeInOutQuart" duration={1200} offset={-60} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-cnolors ease-in delay-150   ">
            Skills
          </Link>
          <Link to="projects" smooth="easeInOutQuart" duration={1200} offset={-60} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-colors ease-in delay-150   ">
            Projects
          </Link>
          <Link to="Services" smooth="easeInOutQuart" duration={1200} offset={-60} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-colors ease-in delay-150   ">
            Services
          </Link>
          <Link to="Testimonials" smooth="easeInOutQuart" duration={1200} offset={-60} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-colors ease-in delay-150   ">
            Testimonials
          </Link>
        </ul>
        <Link to="contact" smooth="easeInOutQuart" duration={1200} offset={-60} className="hidden lg:block " href={""}>
          contact-me
        </Link>
      </div>
    </header>
  );
}
