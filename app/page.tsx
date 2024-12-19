import AccordionMenu from "@/ui/about/AccordionMenu/Accordion";
import HeroSection from "@/ui/about/hero/Hero";

export default function Home() {
  return (
    <main className="w-screen flex flex-col">
      <HeroSection />
      <AccordionMenu />
    </main>
  );
}
