import { Hero } from "@/components/home/Hero";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { PainPoints } from "@/components/home/PainPoints";
import { EnglishTestTeaser } from "@/components/home/EnglishTestTeaser";
import { CoursesSection } from "@/components/home/CoursesSection";
import { HowClassesWork } from "@/components/home/HowClassesWork";
import { AboutAnita } from "@/components/home/AboutAnita";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <PainPoints />
      <EnglishTestTeaser />
      <CoursesSection />
      <HowClassesWork />
      <AboutAnita />
      <Testimonials />
      <FinalCta />
    </>
  );
}
