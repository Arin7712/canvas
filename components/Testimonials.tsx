import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
    {
        name: 'Kelsey Baine',
        designation: 'AIRTABLE',
        quote: '"Quisque id elit semper, vehicula tellus in, posuere lacus. Curabitur nisi eros, finibus ac eleifend."',
        img: 'https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbcf9_Portrait009.jpeg'
    },
    {
        name: 'Sarah Macky',
        designation: 'STRIPE',
        quote: '"Cras enim odio, imperdiet nec lacus quis, dictum egestas ante. Viva condim mi nibh auctor."',
        img: 'https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbd02_Avatar003.jpeg'
    }, 
    {
        name: 'Alex Morton',
        designation: 'MICROSOFT',
        quote: '"Duis quis dui nulla. Nam cursus non purus ut sodales. Cras cond, ipsum nec cursus feugiat."',
        img: 'https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbcee_Portrait006.jpeg'
    },
    {
        name: 'Terry Gilbert',
        designation: 'FACEBOOK',
        quote: '"Morbi vel sapien dignissim, commodo nunc eget, finibus teros aliqua iaculis diam."',
        img: 'https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbd01_Portrait002.jpeg'
    },
    {
        name: 'Sarah Pratt',
        designation: 'GOOGLE',
        quote: '"Aliquam vitae ante ipsum. Pellentesque eleifend massa ac dolor gravida lacinia."',
        img: 'https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbcfe_Portrait23.jpeg'
    }
]

export function CarouselDemo() {
  return (
    <div className="relative flex justify-center items-center h-screen bg-[url('/bg2.jpeg')] bg-[center_40%]">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Carousel stays bright */}
      <div className="relative z-10 w-full flex justify-center items-center px-6 md:px-[4rem]">
        <Carousel className="flex w-full justify-center items-center">
          <CarouselContent >
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="w-full">
              <div className="p-1 flex flex-col items-center justify-center text-center gap-6 w-full">
                <div>
                  <h2 className="text-3xl w-full md:max-w-4xl text-wrap">{item.quote}</h2>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex justify-center items-center p-2 border-zinc-500 border-[1px] rounded-full">
                    <Image src={item.img} alt='img' width={20} height={20} className="rounded-full w-20 h-20 object-cover"/>
                  </div>
                  <div className="space-y-1 text-start">
                    <h1 className="text-xl">{item.name}</h1>
                    <p className="uppercase tracking-[0.2rem] text-xs text-zinc-300">{item.designation}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
