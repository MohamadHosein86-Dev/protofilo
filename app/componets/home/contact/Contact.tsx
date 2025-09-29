import { Phone, Mail, MapPin } from "lucide-react";

import ScrollanimationContact from "../../scrollanimation/ScrollanimationContact";

export default function Contact() {
  return (
    <section className=" flex-col xl:flex-row flex gap-20 xl:gap-40 mx-auto container overflow-hidden items-center  justify-center py-16" id="contact">
      <ScrollanimationContact direction="left">
        <div className=" flex flex-col justify-between ">
          <div className="  ">
            <div className=" text-white space-y-6">
              <div className={`contact-item flex items-center gap-4 `}>
                <div className="w-12 h-12 bg-[hsl(210,40%,98%)]/20  rounded-full flex items-center justify-center lottie-container hover:bg-[hsl(210,40%,98%)]/30 transition-all duration-300">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg  ">Phone</h3>
                  <p className="text-muted-foreground text-primeText  ">(+98) 936 853 5209</p>
                </div>
              </div>
              <div className={`contact-item flex items-center gap-4 `}>
                <div className="w-12 h-12 bg-[hsl(210,40%,98%)]/20  rounded-full flex items-center justify-center lottie-container hover:bg-[hsl(210,40%,98%)]/30 transition-all duration-300">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg  ">Email</h3>
                  <p className="text-muted-foreground text-primeText  ">mahdibaghrichanel@gmail.com</p>
                </div>
              </div>
              <div className={`contact-item flex items-center gap-4 `}>
                <div className="w-12 h-12 bg-[hsl(210,40%,98%)]/20  rounded-full flex items-center justify-center lottie-container hover:bg-[hsl(210,40%,98%)]/30 transition-all duration-300">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg  ">Addres</h3>
                  <p className="text-muted-foreground text-primeText  ">Isfahan, Iran</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollanimationContact>

      <div className=" text-white basis-1/2 bg-[#011221] rounded-4xl p-10 gap-12  justify-between   ">
        <div className={`text-center mb-16  `}>
          <h2 className="text-3xl text-left font-bold mb-4">
            Let&apos;s Talk <br /> <span className=" text-secondary ">We&apos;d love to help</span>
          </h2>
          <p className="text-muted-foreground text-left max-w-2xl text-lg mt-6">Crafting innovative solutions to solve real-world problems</p>
        </div>
        <form className=" text-white  space-y-6">
          <ScrollanimationContact direction="right">
            <div className=" flex gap-4 ">
              <input type="text" placeholder={"Name"} className="bg-card mt-2 border border-[#1e2d3d] focus:border-secondary focus:border-2 rounded-lg p-3 w-full focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground" />
              <input type="text" placeholder={"Phone"} className="bg-card border mt-2 border-[#1e2d3d] focus:border-secondary focus:border-2 rounded-lg p-3 w-full focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground" />
            </div>

            <input type="email" placeholder={"Email"} className="bg-card border mt-4 border-[#1e2d3d] focus:border-secondary focus:border-2 rounded-lg p-3 w-full focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground" />
            <textarea placeholder={"Text"} rows={6} className="bg-card mt-6 border border-[#1e2d3d] focus:border-secondary focus:border-2 rounded-lg p-3 w-full focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground" />
            <button className="bg-secondary mt-2 w-full cursor-pointer rounded-lg font-medium px-[16px] py-[10px] text-center   text-[#00071E]">submit</button>
          </ScrollanimationContact>
        </form>
      </div>
    </section>
  );
}
