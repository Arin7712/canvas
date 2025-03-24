import React from 'react'
import { socials } from '@/constants'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center  py-6 px-[5rem]'>
      <div className='flex items-center gap-4'>
        {
            socials.map((item, index) => (
                <div key={index} className='flex justify-center items-center  w-10 h-10 p-3 rounded-full border-[1px] text-xs/2 border-zinc-700 hover:bg-white hover:text-black transition-all duration-500'>
                    {item.name}
                </div>
            ))
        }
      </div>

      <div className='text-xl font-semibold tracking-[0.4rem]'>
        <h1>CANVAS</h1>
      </div>
    </nav>
  )
}

export default Navbar
