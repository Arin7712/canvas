import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Contact = () => {
  return (
    <div className='flex md:flex-row flex-col md:gap-0 gap-[4rem]'>
      <div className='flex flex-col px-[2rem] md:px-[6rem] md:py-0 pb-[6rem] md:pb-0  gap-8 justify-center w-full md:w-[50%] md:h-[800px] md:border-t-[1px] border-b-[1px] border-zinc-800 md:border-zinc-800'>
            <div className='uppercase tracking-[0.2rem] text-xs text-zinc-300'>let's talk</div>
            <h1 className='text-5xl font-bold'>Team of talented web designers in Brookyln.</h1>
            <p className='text-lg font-light text-zinc-300 w-full md:w-[80%]'>Nunc ac arcu erat. In volutpat ornare massa non condimentum. Praesent lacinia interdum mi sit amet volutpat. Integer suscipit orci vel fringilla hendrerit.            </p>
            <div>

            <Button className='bg-transparent border-zinc-800 border-[1px] rounded-2xl px-6 py-2 uppercase tracking-[0.2rem]'>schedule a call</Button>
            </div>
      </div>

      <div className='w-full md:w-[50%] h-[500px] md:h-[800px] md:order-1 -order-1 relative'>
        <Image
        src='https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbcb3_Image018.jpeg'
        alt='logo'

        layout='fill'
        objectFit='cover'/>
      </div>
    </div>
  )
}

export default Contact
