import Contact from "./componets/home/contact/Contact";
import ProfileSec from "./componets/home/profileSec/ProfileSec";
import ProjectsSec from "./componets/home/projects/ProjectsSec";
import ServicesSec from "./componets/home/servicesSec/ServicesSec";
import { SkillsSec } from "./componets/home/skillsSec/SkillsSec";
import { TestimonialsSec } from "./componets/home/testimonialsSec/TestimonialsSec";
import BtnScoll from "./componets/ui/BtnScoll";

export default function Home() {
  return (
    <main className=" overflow-hidden ">
      <ProfileSec />
      <ProjectsSec />
      <SkillsSec />
      <ServicesSec />
      <TestimonialsSec />
      <Contact />
      <BtnScoll />
    </main>
  );
}
