import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollRotateChange from "@/components/FramerScroll";
import Hero from "@/components/Hero";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Navbar from "@/components/Navbar";
import No from "@/components/No";
import { ScrollBasedVelocityDemo } from "@/components/ScrollBasedVelocityDemo";
import ScrollToUnlock from "@/components/ScrollToUnlock";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import Team from "@/components/Team";
import { CarouselDemo } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Works from "@/components/Works";
import Image from "next/image";

export default function Home() {
  return (
<div>
<Hero/>
<AnimatedTestimonialsDemo />
<No/>
<CarouselDemo/>
<Team/>
<div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-[8rem]">
      <VelocityScroll className="uppercase">View our award winning projects
      </VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4"></div>
    </div>
    <Works/>
    <div className="flex flex-col items-center justify-center py-[6rem] gap-6">
      <h1 className="text-2xl">Discover more of our work</h1>
      <p className="text-xl max-w-xl text-center font-light text-zinc-300">Nunc ac arcu erat. In volutpat ornare massa non condimentum. Praesent lacinia interdum.
      </p>
      <Button className='bg-transparent border-zinc-800 border-[1px] rounded-2xl px-6 py-2 uppercase tracking-[0.2rem]'>View all projects</Button>

    </div>
    <Contact/>
    <Footer/>
</div>
  );
}
