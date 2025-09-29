"use client";

import React, { useEffect, useState, useRef } from "react";

export default function ScrollanimationProject({
  children,
  direction = "left" // می‌تونه "left" یا "right" باشه
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // کلاس جهت‌ها
  const hiddenClass = direction === "left" ? "opacity-0 -translate-x-40" : "opacity-0 translate-x-40";

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out transform ${visible ? "opacity-100 translate-x-0" : hiddenClass}`}>
      {children}
    </div>
  );
}
