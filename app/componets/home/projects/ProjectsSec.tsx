"use client";
import { Element } from "react-scroll";
import ScrollanimationProject from "../../scrollanimation/ScrollanimationProject";

const data = [
  { id: "6", name: "solgen", new: true, describ: "(-✅ deployment ✅-) (-❌ privet code ❌-) An AI-powered Next.js (15.5.2) app with Tailwind CSS (v4), Redux Toolkit, and TypeScript for generating memes/images from text prompts or uploads.Includes prompt and meme pages, chat history, and API routes (generate/upload), with ESLint and PostCSS in the toolchain.", date: "september 2025", img: "/ai-meme100.png", demo: "https://solgen-dev.vercel.app" },
  { id: "2", name: "DashStack", new: false, describ: "(-✅ deployed ✅-) A professional dashboard application with multiple templates and various options for exporting.", date: "March 2025", img: "project/Dashstack.png", demo: "https://dash-stack-murex.vercel.app", github: "https://github.com/MohamadHosein86-Dev/DashStack" },
  { id: "4", name: "Zarinpal", new: true, describ: "(-✅ deployed ✅-) A Next.js web app featuring landing pages (Home, Products, Pricing, About, Contact) and user/admin dashboards with dark/light theme, animations, and charts.Packages: Next 15, React 19, Tailwind CSS 4, Radix UI, lucide-react, framer-motion/motion, Recharts, clsx, class-variance-authority, next-themes, , moment-jalaali, react-icons.", date: "March 2025", img: "/zarinpal1.png", demo: "zarinpalnext.netlify.app", github: "https://github.com/MohamadHosein86-Dev/Zarinpal" },
  { id: "5", name: "Pilisok", new: true, describ: "(-✅ deployed ✅-) Built a responsive, PWA-ready fintech web app with Next.js 15 and React 19, TypeScript, Tailwind CSS 4, Radix UI primitives, smooth animations via Framer Motion/Motion, dark mode with next-themes, and a refined component system using class-variance-authority, clsx, tailwind-merge, and Lucide icons. Delivered interactive analytics dashboards and rich data viz with Recharts and moment-jalaali (Persian calendar), instrumented with Vercel Analytics, leveraging SSR and file-based routing for fast, accessible experiences and a modern developer workflow.", date: "August 2025", img: "/petshop.png", demo: "pilisok.netlify.app", github: "https://github.com/MohamadHosein86-Dev/Pilisok" },
  { id: "1", name: "Cryptoverse", new: false, describ: "(-✅ deployed ✅-) A program for real-time display of cryptocurrencies with interactive charts, including fluctuation charts for each digital currency, with the ability to select and view detailed information.", date: "March 2025", img: "project/Cryptoverse.png", demo: "https://cryptoverse-next.netlify.app/", github: "https://github.com/MohamadHosein86-Dev/Cryptoverse" },
  { id: "1", name: "Tarkhineh restaurant", new: false, describ: "(-✅ deployed ✅-) Modern management dashboard with advanced analytics and data visualization components ", date: "March 2024", img: "/image10.png", demo: "https://tarkhineh-f6ib.vercel.app", github: "https://github.com/MohamadHosein86-Dev/Tarkhineh" }
];
export default function ProjectsSec() {
  return (
    <Element name="projects" className=" mt-15 overflow-hidden   ">
      <div className=" px-1.5 contaner  ">
        <div className=" mt-15  undefined">
          {/*           <h2 className="text-primeText text-xl sm:text-2xl font-black tracking-wider">// Projects</h2>
           */}{" "}
        </div>

        <div className="my-8  grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
          {data.map((res, i) => (
            <ScrollanimationProject key={res.id} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="bg-[#011221] cursor-pointer border-[#1e2d3d] flex flex-col justify-between rounded-[14px] border p-6" id="/projects/nova.png" style={{ opacity: "1", transform: "none" }}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
                      <h3 className="text-[#5565e8] text-lg font-medium md:font-semibold">{res.name}</h3>
                      {res.new && <span className="h-7 w-fit rounded-md bg-[#FFFFFF1A] pl-2.5 p-1 text-sm text-[#18f2e5] animate-blink text-tag backdrop-blur-[80px]">New 🔥</span>}
                    </div>
                    <ul className="mt-3 flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-4">
                      <li className="flex text-white gap-2">
                        <img alt="March 2025" loading="lazy" width="35" height="35" decoding="async" data-nimg="1" className="size-[18px] md:size-5" style={{ color: "transparent" }} src="project\timer.edd9252f.svg" />
                        <span className="text-neutral text-sm">{res.date}</span>
                      </li>
                    </ul>
                  </div>
                  <figure className="flex justify-end overflow-hidden">
                    <img src={res.img} alt="Project Cover" loading="lazy" width="150" height="80" decoding="async" data-nimg="1" className="h-[80px] w-[150px] rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]" style={{ color: "transparent" }} />
                  </figure>
                </div>
                <div>
                  <div className="bg-primery h-[100px] noScrollbar overflow-y-scroll text-primary-content my-4 text-primeText rounded-2xl px-4 py-2">
                    <p className="text-[14px] font-normal md:text-base">{res.describ}</p>
                  </div>
                  <div className="flex gap-5"></div>
                </div>
                <div className="flex gap-5">
                  <a href={res.demo} className="text-[#18f2e5] flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base" target="_blank">
                    <svg width="18" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-[18px] md:w-5">
                      <path d="M19.25 6.69867C16.94 3.06867 13.56 0.978668 10 0.978668C8.22 0.978668 6.49 1.49867 4.91 2.46867C3.33 3.44867 1.91 4.87867 0.75 6.69867C-0.25 8.26867 -0.25 10.8187 0.75 12.3887C3.06 16.0287 6.44 18.1087 10 18.1087C11.78 18.1087 13.51 17.5887 15.09 16.6187C16.67 15.6387 18.09 14.2087 19.25 12.3887C20.25 10.8287 20.25 8.26867 19.25 6.69867ZM10 13.5887C7.76 13.5887 5.96 11.7787 5.96 9.54867C5.96 7.31867 7.76 5.50867 10 5.50867C12.24 5.50867 14.04 7.31867 14.04 9.54867C14.04 11.7787 12.24 13.5887 10 13.5887Z" fill="currentColor"></path>
                    </svg>
                    <span>Live Preview</span>
                  </a>
                  {res.name !== "solgen" ? (
                    <a href={res.github} className="text-[#18f2e5] flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base" target="_blank">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] md:w-5">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0099 0.548676C5.36875 0.548676 0 5.957 0 12.6478C0 17.9962 3.43994 22.5234 8.21205 24.1258C8.80869 24.2462 9.02724 23.8655 9.02724 23.5451C9.02724 23.2646 9.00757 22.3032 9.00757 21.3014C5.6667 22.0227 4.97099 19.8591 4.97099 19.8591C4.43409 18.4569 3.63858 18.0965 3.63858 18.0965C2.54511 17.3553 3.71823 17.3553 3.71823 17.3553C4.93117 17.4354 5.56763 18.5972 5.56763 18.5972C6.64118 20.44 8.37111 19.9193 9.06706 19.5988C9.16638 18.8175 9.48473 18.2767 9.82275 17.9763C7.15817 17.6958 4.35469 16.6542 4.35469 12.0067C4.35469 10.6846 4.8316 9.60295 5.58729 8.76171C5.46807 8.4613 5.0504 7.21911 5.70677 5.55654C5.70677 5.55654 6.72083 5.23597 9.00732 6.79849C9.98625 6.53364 10.9958 6.39892 12.0099 6.39778C13.024 6.39778 14.0577 6.53815 15.0123 6.79849C17.299 5.23597 18.3131 5.55654 18.3131 5.55654C18.9695 7.21911 18.5515 8.4613 18.4323 8.76171C19.2079 9.60295 19.6652 10.6846 19.6652 12.0067C19.6652 16.6542 16.8617 17.6756 14.1772 17.9763C14.6148 18.3568 14.9924 19.0779 14.9924 20.2197C14.9924 21.8422 14.9727 23.1444 14.9727 23.5449C14.9727 23.8655 15.1915 24.2462 15.7879 24.126C20.56 22.5232 23.9999 17.9962 23.9999 12.6478C24.0196 5.957 18.6312 0.548676 12.0099 0.548676Z" fill="currentColor"></path>
                      </svg>
                      <span>Github Link</span>
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </ScrollanimationProject>
          ))}
        </div>
      </div>
    </Element>
  );
}
