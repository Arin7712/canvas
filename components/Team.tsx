import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Team = () => {

    const teamImg = [
        {
            img: 'https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbd03_Portrait06.jpeg'
        },
        {
            img: 'https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbd02_Avatar003.jpeg'
        },
        {
            img: 'https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbcfb_Portrait07.jpeg'
        },
        {
            img: 'https://cdn.prod.website-files.com/679352f6d4635488ea6dbc3e/679352f7d4635488ea6dbd00_Portrait003.jpeg'
        }
    ]

  return (
    <div className='py-[10rem] flex md:flex-row flex-col items-center gap-10 justify-center border-b-[1px] border-b-zinc-800'>
        <div className='flex flex-col w-full md:w-[80%]'>
      <div className='flex gap-0 m-0 p-0'>
                <div className="w-[350px] h-[350px] overflow-hidden relative m-0 p-0">
                    <Image 
                        src={teamImg[0].img} 
                        alt={`Team Member`} 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>
                <div className="w-[350px] h-[350px] overflow-hidden relative m-0 p-0">
                    <Image 
                        src={teamImg[1].img} 
                        alt={`Team Member`} 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>
      </div>
      <div className='flex gap-0 m-0 p-0'>
                <div className="w-[350px] h-[350px] overflow-hidden relative m-0 p-0">
                    <Image 
                        src={teamImg[2].img} 
                        alt={`Team Member`} 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>
                <div className="w-[350px] h-[350px] overflow-hidden relative m-0 p-0">
                    <Image 
                        src={teamImg[3].img} 
                        alt={`Team Member`} 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>
      </div>
        </div>



      <div className='flex flex-col gap-[3rem] md:px-0 px-[2rem] md:pt-0 pt-6'>
            <div className='uppercase tracking-[0.2rem] text-xs text-zinc-300'>Our team</div>
            <h1 className='text-5xl font-bold'>Team of talented web designers in Brookyln.</h1>
            <p className='text-lg font-light text-zinc-300 w-full md:w-[80%]'>Nunc ac arcu erat. In volutpat ornare massa non condimentum. Praesent lacinia interdum mi sit amet volutpat. Integer suscipit orci vel fringilla hendrerit.            </p>
            <div>

            <Button className='bg-transparent border-zinc-800 border-[1px] rounded-2xl px-6 py-2 uppercase tracking-[0.2rem]'>Meet the team</Button>
            </div>
      </div>
    </div>
  )
}

export default Team
