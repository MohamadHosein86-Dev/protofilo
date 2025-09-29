"use client";
import { Element } from "react-scroll";
import { useState, useEffect, useRef } from "react";
import ScrollSection from "../../scrollanimation/Scrollanimation";

interface SkillProps {
  name: string;
  percentage: number;
  icon: string;
  color: string;
  delay: number;
  isVisible: boolean;
}

function CircularSkill({ name, percentage, icon, color, delay, isVisible }: SkillProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedPercentage((prev) => {
            if (prev >= percentage) {
              clearInterval(interval);
              return percentage;
            }
            return prev + 1;
          });
        }, 20);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div
      className={`group relative flex bg-[#011221] flex-col items-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm border  hover:border-[hsl(218,16%,27%)] w-full mx-auto  transition-all duration-500   hover:shadow-[0_4px_10px_hsl(217.2,32.6%,17.5%)]   hover:-translate-y-2 min-h-[200px] sm:min-h-[220px] ${isVisible ? "animate-in slide-in-from-bottom-8 fade-in" : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={(e) => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{
          background: `linear-gradient(135deg, ${color}20, ${color}10)`
        }}
      />

      {/* Circular Progress */}
      <div className="relative mb-3 sm:mb-4">
        <svg className="transform -rotate-90 w-20 h-20 sm:w-24 sm:h-24" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-muted/20" />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={color}
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out drop-shadow-lg"
            style={{
              filter: `drop-shadow(0 0 8px ${color}40)`
            }}
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="text-xl sm:text-2xl mb-1 transition-transform duration-300 group-hover:scale-110 leading-none flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10"
            style={{
              filter: `drop-shadow(0 0 4px ${color}60)`,
              fontFamily: 'system-ui, -apple-system, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif'
            }}
          >
            {icon}
          </div>
          <span
            className="text-base sm:text-lg font-bold transition-all duration-300 leading-none"
            style={{
              color: color,
              textShadow: `0 0 10px ${color}40`
            }}
          >
            {animatedPercentage}%
          </span>
        </div>
      </div>

      {/* Skill name */}
      <h3 className={`text-sm sm:text-lg font-semibold text-center text-primeText transition-all duration-300 group-hover:text-primary leading-tight px-2 `}>{name}</h3>

      {/* Animated particles */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-ping"
              style={{
                backgroundColor: color,
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 200}ms`,
                animationDuration: "2s"
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SkillsSec() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      name: "React",
      percentage: 95,
      icon: "⚛️",
      color: "#61DAFB",
      delay: 0
    },
    {
      name: "Next.js",
      percentage: 92,
      icon: "▲",
      color: "#ffffff",
      delay: 100
    },
    {
      name: "TypeScript",
      percentage: 88,
      icon: "🔷",
      color: "#3178C6",
      delay: 200
    },
    {
      name: "JavaScript",
      percentage: 93,
      icon: "🟨",
      color: "#F7DF1E",
      delay: 300
    },
    {
      name: "HTML",
      percentage: 98,
      icon: "🌐",
      color: "#E34F26",
      delay: 400
    },
    {
      name: "CSS",
      percentage: 95,
      icon: "🎨",
      color: "#1572B6",
      delay: 500
    },
    {
      name: "Tailwind CSS",
      percentage: 90,
      icon: "💨",
      color: "#06B6D4",
      delay: 600
    },
    {
      name: "Bootstrap",
      percentage: 62,
      icon: "🅱️",
      color: "#7952B3",
      delay: 700
    },
    {
      name: "shadcn/ui",
      percentage: 60,
      icon: "🎭",
      color: "#dfdfdf",
      delay: 800
    },
    {
      name: "React Query",
      percentage: 85,
      icon: "🔄",
      color: "#FF4154",
      delay: 900
    },
    {
      name: "Redux",
      percentage: 87,
      icon: "🔮",
      color: "#764ABC",
      delay: 1000
    },
    {
      name: "Git / GitLab",
      percentage: 90,
      icon: "🌿",
      color: "#F05032",
      delay: 1100
    },
    {
      name: "React Hook Form",
      percentage: 85,
      icon: "📝",
      color: "#EC5990",
      delay: 1200
    },
    {
      name: "MUI",
      percentage: 82,
      icon: "🎯",
      color: "#007FFF",
      delay: 1300
    },
    {
      name: "Sass",
      percentage: 88,
      icon: "💎",
      color: "#CC6699",
      delay: 1400
    },
    {
      name: "Next Auth",
      percentage: 80,
      icon: "🔐",
      color: "#856868",
      delay: 1500
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <Element name="skills" className=" contaner  relative overflow-hidden ">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className=" py-16 mx-auto px-1.5 relative z-10">
          <div className="  mb-12 mt-30 undefined">
            <h2 className="text-primeText text-xl sm:text-2xl font-black tracking-wider">
              {/* My Skills */}
              My Skills
            </h2>
          </div>

          {/* Skills Grid */}
          <ScrollSection>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 w-full lg:gap-8  mx-auto">
              {skills.map((skill, index) => (
                <CircularSkill key={index} name={skill.name} percentage={skill.percentage} icon={skill.icon} color={skill.color} delay={skill.delay} isVisible={isVisible} />
              ))}
            </div>
          </ScrollSection>
        </div>
      </Element>
    </div>
  );
}
