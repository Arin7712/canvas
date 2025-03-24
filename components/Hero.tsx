import React from "react";
import Navbar from "./Navbar";
import { ScrollBasedVelocityDemo } from "./ScrollBasedVelocityDemo";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-auto md:h-screen flex flex-col">
      <div className="flex flex-col gap-[6rem]">
        <Navbar />
        <ScrollBasedVelocityDemo />
        <div className="bg-[url(/bg1.jpeg)] w-full md:h-[320px] h-[360px] bg-cover bg-[center_55%] relative">
          <div className="rounded-full h-34 w-34 bg-foreground absolute right-6 -top-17 transform -translate-x-1/2 p-2 flex items-center justify-center">
            <div className="rounded-full  border-[1px] border-zinc-800 h-full w-full flex justify-center items-center text-xs tracking-widest font-light">
              OUR WORK
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex-1 flex border-b-[1px] border-zinc-800 md:h-auto h-16">
        <div className="flex-1"></div>
        <div className="flex-1 flex items-center justify-center text-xs uppercase tracking-[0.4rem] border-r-[1px] border-zinc-800 border-l-[1px]">
          Scroll
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Hero;
