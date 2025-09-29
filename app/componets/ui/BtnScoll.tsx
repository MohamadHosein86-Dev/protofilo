"use client";
import React, { useEffect, useState } from "react";

export default function BtnScoll() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button className={`fixed bottom-8 z-[100000] left-8 w-12 h-12 border-[2px] cursor-pointer border-secondary rounded-full flex items-center justify-center text-white shadow-lg opacity-${isVisible ? "100" : "0"} transition-opacity duration-300 pointer-events-${isVisible ? "auto" : "none"}`} onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="text-[#5565e8] w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
      </svg>
    </button>
  );
}
