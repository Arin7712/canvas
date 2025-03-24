import Image from "next/image";
import React from "react";

const Works = () => {
  return (
    <div className="flex flex-col px-4 md:px-[6rem] gap-[6rem]">
      <div className="flex">
        <div className="w-full max-w-[1000px] h-[500px] group hover:scale-[0.95] brightness-60 md:brightness-50 hover:brightness-40 hover:cursor-pointer transform transition-all duration-300 relative">
          <Image
            src="https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbce5_Image028.jpeg"
            alt="logo"
            layout="fill"
            objectFit="cover"
            className=""
          />
          <div className="absolute inset-0 flex flex-col px-[2rem] md:px-[3rem] py-[3rem] h-full justify-between">
            <h1 className="text-white text-3xl ">West village corporate</h1>
            <p className="md:hidden block group-hover:block transition-all duration-500 w-[60%]">
              Nunc ac arcu erat. In volutpat ornare massa non condimentum.
              Praesent lacinia interdum mi sit amet volutpat. Integer suscipit
              orci vel fringilla hendrerit.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="w-full max-w-[1000px] h-[500px] group hover:scale-[0.95] brightness-60 md:brightness-50 hover:brightness-40 hover:cursor-pointer transform transition-all duration-300 relative">
          <Image
            src="https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbcb1_Image017.jpeg"
            alt="logo"
            layout="fill"
            objectFit="cover"
            className=""
          />
          <div className="absolute inset-0 flex flex-col px-[2rem] md:px-[3rem] py-[3rem] h-full justify-between">
            <h1 className="text-white text-3xl ">Dumboo coworking space</h1>
            <p className="md:hidden block group-hover:block transition-all duration-500 w-[60%]">
              Nunc ac arcu erat. In volutpat ornare massa non condimentum.
              Praesent lacinia interdum mi sit amet volutpat. Integer suscipit
              orci vel fringilla hendrerit.
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-full max-w-[1000px] h-[500px] group hover:scale-[0.95] brightness-60 md:brightness-50 hover:brightness-40 hover:cursor-pointer transform transition-all duration-300 relative">
          <Image
            src="https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbcc6_Image024.jpeg"
            alt="logo"
            layout="fill"
            objectFit="cover"
            className=""
          />
          <div className="absolute inset-0 flex flex-col px-[2rem] md:px-[3rem] py-[3rem] h-full justify-between">
            <h1 className="text-white text-3xl ">Hell's kitchen cafe</h1>
            <p className="md:hidden block group-hover:block transition-all duration-500 w-[60%]">
              Nunc ac arcu erat. In volutpat ornare massa non condimentum.
              Praesent lacinia interdum mi sit amet volutpat. Integer suscipit
              orci vel fringilla hendrerit.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="w-full max-w-[1000px] h-[500px] group hover:scale-[0.95] brightness-60 md:brightness-50 hover:brightness-40 hover:cursor-pointer transform transition-all duration-300 relative">
          <Image
            src="https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbcb7_Image013.jpeg"
            alt="logo"
            layout="fill"
            objectFit="cover"
            className=""
          />
          <div className="absolute inset-0 flex flex-col px-[2rem] md:px-[3rem] py-[3rem] h-full justify-between">
            <h1 className="text-white text-3xl ">Tribeca ventures</h1>
            <p className="md:hidden block group-hover:block transition-all duration-500 w-[60%]">
              Nunc ac arcu erat. In volutpat ornare massa non condimentum.
              Praesent lacinia interdum mi sit amet volutpat. Integer suscipit
              orci vel fringilla hendrerit.
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-full max-w-[1000px] h-[500px] group hover:scale-[0.95] brightness-60 md:brightness-50 hover:brightness-40 hover:cursor-pointer transform transition-all duration-300 relative">
          <Image
            src="https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbcb6_Image016.jpeg"
            alt="logo"
            layout="fill"
            objectFit="cover"
            className=""
          />
          <div className="absolute inset-0 flex flex-col px-[2rem] md:px-[3rem] py-[3rem] h-full justify-between">
            <h1 className="text-white text-3xl ">Soho galaxy house club</h1>
            <p className="md:hidden block group-hover:block transition-all duration-500 w-[60%]">
              Nunc ac arcu erat. In volutpat ornare massa non condimentum.
              Praesent lacinia interdum mi sit amet volutpat. Integer suscipit
              orci vel fringilla hendrerit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
