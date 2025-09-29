import React from "react";
import ScrollanimationProject from "../../scrollanimation/ScrollanimationProject";
import ScrollSection from "../../scrollanimation/ScrollSection";

export default function ServicesSec() {
  return (
    <div className=" contaner overflow-hidden mb-8 ">
      <div className=" px-1.5 ">
        <div className="lg:max-w-[50dvw] pt-10 undefined">
          <h2 className="text-primeText text-xl sm:text-2xl font-bold tracking-wider">{"// Services / Offers:"}</h2>
          <p className="text-primeText mt-5 text-[16px] sm:text-lg text-pretty">I offer a wide range of services to ensure you have the best written code and stay ahead in the competition.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-3">
          <ScrollanimationProject direction={"left"}>
            <div className="bg-[#011221] border-border flex flex-col items-center rounded-[14px] border p-5" id="/services/wordpress.png" style={{ opacity: "1", transform: "none" }}>
              <img src={"services/developer.webp"} alt="Create Web By Wordpress" loading="lazy" width="128" height="128" decoding="async" data-nimg="1" className="my-1 size-14" style={{ color: "transparent" }} />
              <h5 className="text-[#18f2e5] mt-2 mb-5 text-center text-base font-semibold">Connecting and Interacting with RESTful APIs</h5>
              <div className=" bg-[#011627] rounded-2xl p-4">
                <p className="text-primeText text-center text-sm font-normal">Analyzing user needs and improving user flows to enhance engagement and satisfaction. </p>
              </div>
            </div>
          </ScrollanimationProject>
          <ScrollSection>
            <div className="bg-[#011221] border-border flex flex-col items-center rounded-[14px] border p-5" id="/services/wordpress.png" style={{ opacity: "1", transform: "none" }}>
              <img src={"services/developer.webp"} alt="Create Web By Wordpress" loading="lazy" width="128" height="128" decoding="async" data-nimg="1" className="my-1 size-14" style={{ color: "transparent" }} />
              <h5 className="text-[#18f2e5] mt-2 mb-5 text-center text-base font-semibold">Web Application Development with Next.js</h5>
              <div className=" bg-[#011627] rounded-2xl p-4">
                <p className="text-primeText text-center text-sm font-normal">Designing beautiful, practical, and modern user interfaces using React and Tailwind CSS. </p>
              </div>
            </div>
          </ScrollSection>
          <ScrollanimationProject direction={"right"}>
            <div className="bg-[#011221] border-border flex flex-col items-center rounded-[14px] border p-5" id="/services/wordpress.png" style={{ opacity: "1", transform: "none" }}>
              <img src={"services/developer.webp"} alt="Create Web By Wordpress" loading="lazy" width="128" height="128" decoding="async" data-nimg="1" className="my-1 size-14" style={{ color: "transparent" }} />
              <h5 className="text-[#18f2e5] mt-2 mb-5 text-center text-base font-semibold">Connecting to APIs and Managing Data</h5>
              <div className=" bg-[#011627] rounded-2xl p-4">
                <p className="text-primeText text-center text-sm font-normal">Implementing secure and efficient communication with APIs, state management with Redux/Context, and handling data on the client side. </p>
              </div>
            </div>
          </ScrollanimationProject>
        </div>
      </div>
    </div>
  );
}
