import React from 'react';
import { socials } from '@/constants';
import { SheetDemo } from './SheetDemo';

const Navbar = () => {
  return (
    <nav className="relative flex justify-between items-center py-6 px-6 md:px-[5rem]">
      {/* Social Icons */}
      <div className="md:flex items-center gap-4 hidden">
        {socials.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-10 h-10 p-3 rounded-full border-[1px] text-xs border-zinc-700 hover:bg-white hover:text-black transition-all duration-500"
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Centered "CANVAS" */}
      <div className="md:absolute md:left-1/2 transform md:-translate-x-1/2 text-xl font-semibold tracking-[0.4rem]">
        <h1>CANVAS</h1>
      </div>

      {/* Right-side Component */}
      <div>
        <SheetDemo />
      </div>
    </nav>
  );
};

export default Navbar;
