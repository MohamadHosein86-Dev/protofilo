import React from "react";
import LogoFooter from "../logo/LogoFooter";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="contaner flex items-center flex-col justify-center mx-auto ">
      <LogoFooter />
      <ul className=" text-white hidden my-4 text-lg md:flex items-center gap-8 ">
        <Link href={"/"} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-cnolors ease-in delay-150   ">
          Skills
        </Link>
        <Link href={""} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-colors ease-in delay-150   ">
          projects
        </Link>
        <Link href={""} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-colors ease-in delay-150   ">
          services
        </Link>
        <Link href={""} className=" z-10000 py-0 border-[#1e2d3d] hover:text-white transition-colors ease-in delay-150   ">
          Testimonials
        </Link>
      </ul>
      <p className=" text-primeText text-sm mt-4 md:mt-0 sm:text-[16px]  mb-6 ">© 2024 Mahdi Baghri. All rights reserved.</p>
    </footer>
  );
}
