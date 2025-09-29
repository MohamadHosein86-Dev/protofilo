"use client";
import { useState } from "react";
import { CardWrapper } from "../../ui/card-wrapper";

interface TestimonialProps {
  text: string;
  name: string;
  position: string;
  avatar: string;
  rating: number;
}

function TestimonialCard({ text, name, position, avatar, rating }: TestimonialProps) {
  return (
    <CardWrapper className="min-w-[450px] bg-[#011221] mx-4 border border-[hsl(218,16%,27%)]/60  hover:border-[hsl(218,16%,27%)]/80   hover:shadow-[0_4px_10px_hsl(217.2,32.6%,17.5%)]    transition-all duration-300  hover:-translate-y-2 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm">
      <div className="mb-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
              ⭐
            </span>
          ))}
        </div>
        <p className="text-muted-foreground italic text-primeText text-lg  leading-relaxed">{text}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
          <img src={avatar} alt={name} className="object-cover w-full h-full" />
        </div>
        <div>
          <h4 className="font-bold text-lg text-white text-primary">{name}</h4>
          <p className="text-sm text-muted-foreground text-primeText  font-medium">{position}</p>
        </div>
      </div>
    </CardWrapper>
  );
}

export function TestimonialsSec() {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: TestimonialProps[] = [
    {
      text: "Mahdi's technical expertise and problem-solving skills are outstanding. He transformed our vision into reality perfectly.",
      name: "sara hoseini",
      position: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },

    {
      text: "Mahdi's technical expertise and problem-solving skills are outstanding. He transformed our vision into reality perfectly.",
      name: "sara hoseini",
      position: "Data Analyst",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "Mahdi's technical expertise and problem-solving skills are outstanding. He transformed our vision into reality perfectly.",
      name: "sara hoseini",
      position: "Tech Lead",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "Mahdi's technical expertise and problem-solving skills are outstanding. He transformed our vision into reality perfectly.",
      name: "sara hoseini",
      position: "UX Designer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "Mahdi's technical expertise and problem-solving skills are outstanding. He transformed our vision into reality perfectly.",
      name: "sara hoseini",
      position: "UX Designer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-30 relative contaner overflow-hidden" id="testimonials">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container pb-20 pt-40 mx-auto  relative z-10">
        <div className="lg:max-w-[50dvw] pb-12 undefined">
          <h2 className=" text-primeText text-xl sm:text-2xl font-bold tracking-wider">{"// Testimonials"}</h2>
          <p className="text-primeText mt-5 text-[16px] sm:text-lg text-pretty">Don&#39;t just take our word for it - see what actual users of our service have to say about their experience.</p>
        </div>

        {/* ریل اسلایدر */}
        <div className="relative pt-4 overflow-hidden">
          <div className={`inline-flex  marquee ${isPaused ? "paused" : ""}`} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {duplicatedTestimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>

        {/* گرادیان لبه‌ها */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bac to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
