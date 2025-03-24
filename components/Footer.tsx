import { socials } from '@/constants'
import React from 'react'

const Footer = () => {
  return (
    <div className='border-b-[1px] border-zinc-800 md:py-[10rem] md:gap-0 gap-[4rem] py-[6rem] md:px-[6rem] px-[2rem] flex md:flex-row flex-col justify-between items-center'>
      <div className='flex flex-col gap-6 w-full md:w-auto'>
        <h1 className='uppercase tracking-[0.2rem] text-xl text-zinc-300'>canvas</h1>
        <p className='max-w-sm text-lg font-light text-zinc-300'>Praesent lacinia interdum mi sit amet volutpat. Integer suscipit orci vel fringilla hendrerit.
        </p>
        <div className='flex items-center gap-4'>
                {
                    socials.map((item, index) => (
                        <div key={index} className='flex justify-center items-center  w-10 h-10 p-3 rounded-full border-[1px] text-xs/2 border-zinc-700 hover:bg-white hover:text-black transition-all duration-500'>
                            {item.name}
                        </div>
                    ))
                }
              </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-6 w-full md:w-auto'>
                <div>
                    <p className='py-4 md:w-[18rem] w-full font- text-zinc-300 text-sm flex uppercase tracking-[0.2rem] border-t-[1px] border-zinc-800 border-b-[1px]'>home 1</p>
                    <p className='py-4 md:w-[18rem] w-full font- text-zinc-300 text-sm flex uppercase tracking-[0.2rem] border-zinc-800 border-b-[1px]'>home 2</p>
                    <p className='py-4 md:w-[18rem] w-full font- text-zinc-300 text-sm flex uppercase tracking-[0.2rem] border-zinc-800 border-b-[1px]'>home 3</p>
                    <p className='py-4 md:w-[18rem] w-full font- text-zinc-300 text-sm flex uppercase tracking-[0.2rem] border-zinc-800 border-b-[1px]'>home 4</p>

                </div>

                <div>
                    <p className='py-4 md:w-[18rem] w-full font- text-zinc-300 text-sm flex uppercase tracking-[0.2rem] md:border-t-[1px] border-zinc-800 border-b-[1px]'>ABOUT</p>
                    <p className='py-4 md:w-[18rem] w-full font- text-zinc-300 text-sm flex uppercase tracking-[0.2rem] border-zinc-800 border-b-[1px]'>SERVICES</p>
                    <p className='py-4 md:w-[18rem] w-full font- text-zinc-300 text-sm flex uppercase tracking-[0.2rem] border-zinc-800 border-b-[1px]'>PROJECTS</p>
                    <p className='py-4 md:w-[18rem] w-full font- text-zinc-300 text-sm flex uppercase tracking-[0.2rem] border-zinc-800 border-b-[1px]'>CONTACT</p>

                </div>
      </div>
    </div>
  )
}

export default Footer
