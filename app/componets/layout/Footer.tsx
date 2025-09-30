"use client";
import LogoFooter from "../logo/LogoFooter";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="contaner flex items-center flex-col justify-center mx-auto ">
      <LogoFooter />
      <ul className=" hidden md:flex text-white my-4 text-lg  items-center gap-8 ">
        <Link to="Skills" smooth="easeInOutQuart" duration={1200} offset={-60} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-cnolors ease-in delay-150   ">
          Skills
        </Link>
        <Link to="projects" smooth="easeInOutQuart" duration={1200} offset={-60} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-colors ease-in delay-150   ">
          Projects
        </Link>
        <Link to="Services" smooth="easeInOutQuart" duration={1200} offset={-60} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-colors ease-in delay-150   ">
          Services
        </Link>
        <Link to="about" smooth="easeInOutQuart" duration={1200} offset={-60} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-colors ease-in delay-150   ">
          Testimonials
        </Link>
      </ul>
      <p className=" text-primeText text-sm mt-4 md:mt-0 sm:text-[16px]  mb-6 ">© 2024 Mahdi Baghri. All rights reserved.</p>
    </footer>
  );
}
