import { SERVICES } from '@/Shared/Services'
import Image from 'next/image'
import React from 'react'

function Services() {
  return (
    <div className='my-16 p-8 bg-[#f4f1ed] flex flex-col items-center space-y-8'>
        <h1 className='text-3xl text-center my-8'>Our made to measure service is at the heart of what we do
        </h1>
        <p className='w-[40%] text-center '>Our dedicated team of in-house makers can transform fabrics into bespoke cushions, blinds, curtains and headboards, all of which are skillfully finished by hand.</p>
         <div className='grid grid-cols-2 lg:grid-cols-4 gap-16'>
            {
                SERVICES.map((item,index)=>(
                    <div key={index} className='text-center'>
                        <Image src={item.image} width={300} height={300}/>
                        <h1 className='text-2xl text-wrap py-4'>{item.title}</h1>
                    </div>
                ))
            }
        
        </div>   
    </div>
  )
}

export default Services