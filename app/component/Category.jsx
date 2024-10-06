import { CATEGORY } from '@/Shared/category';
import Image from 'next/image';
import React from 'react'

function Category() {
  return (
    <div className='py-8 items-center flex flex-col'>
        <p className='w-[500px] text-center text-xl py-8'>
        We're the leading online retailer of designer wallpaper, fabric, rugs and made to measure furnishings.
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='relative '>
            <Image src={CATEGORY[0].image} width={400} height={800}/>
            <div className='p-2 text-white absolute bottom-10 z-50'>
            <h1  className='text-3xl'>{CATEGORY[0].title}</h1>
            <p>{CATEGORY[0].desc}</p>
            </div>
            <div className='absolute bottom-0 w-[100%] h-[300px] bg-gradient-to-t from-[rgba(0,0,0,0.4)] '/>
          </div>
          <div className='flex flex-col space-y-8'>
          <div className='relative '>
            <Image src={CATEGORY[1].image} width={400} height={350}/>
            <div className='p-2 text-white absolute bottom-10 z-50'>
            <h1  className='text-3xl'>{CATEGORY[1].title}</h1>
            <p>{CATEGORY[1].desc}</p>
            </div>
            <div className='absolute bottom-0 w-[100%] h-[300px] bg-gradient-to-t from-[rgba(0,0,0,0.4)] '/>
          </div>
          
        
        
          <div className='relative '>
            <Image src={CATEGORY[2].image} width={400} height={350}/>
            <div className='p-2 text-white absolute bottom-10 z-50'>
            <h1  className='text-3xl'>{CATEGORY[2].title}</h1>
            <p>{CATEGORY[2].desc}</p>
            </div>
            <div className='absolute bottom-0 w-[100%] h-[300px] bg-gradient-to-t from-[rgba(0,0,0,0.4)] '/>
          </div>     
          </div>
          <div className='relative '>
            <Image src={CATEGORY[3].image} width={400} height={800}/>
            <div className='p-2 text-white absolute bottom-10 z-50'>
            <h1  className='text-3xl'>{CATEGORY[3].title}</h1>
            <p>{CATEGORY[3].desc}</p>
            </div>
            <div className='absolute bottom-0 w-[100%] h-[300px] bg-gradient-to-t from-[rgba(0,0,0,0.4)] '/>
          </div>
          
        </div>
    </div>
  )
}
export default Category;