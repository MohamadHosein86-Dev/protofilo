"use client";

import React, { useEffect, useState, useRef } from "react";

export default function ScrollanimationHead({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-opacity duration-2000 ease-out ${visible ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  );
}
