"use client";

import React, { useEffect, useState, useRef } from "react";

type Props = {
  children: React.ReactNode;
  once?: boolean; // فقط یک‌بار انیمیت شود
  threshold?: number; // حساسیت مشاهده
};

export default function ScrollSection3({ children, once = true, threshold = 0.2 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out transform will-change-transform  ${visible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-40 translate-y-40"}`} style={{ backfaceVisibility: "hidden", transform: visible ? "translateZ(0)" : undefined }}>
      {children}
    </div>
  );
}
