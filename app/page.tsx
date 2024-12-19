import AccordionMenu from "@/ui/about/AccordionMenu/Accordion";
import CountUpSection from "@/ui/about/countUp/CountUp";
import HeroSection from "@/ui/about/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen flex flex-col">
      <HeroSection />
      {/* <CountUpSection /> */}
      <AccordionMenu />
    </main>
  );
}
