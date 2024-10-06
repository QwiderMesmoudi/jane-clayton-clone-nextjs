import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative items-center '>
        <Image className='w-[100%] object-cover p-10' src={'https://www.janeclayton.co.uk/media/module/janeclayton/widgets/resized/1440x/Home_Page_Test/furley-colefax-and-fowler-red-fabric-f4870-02-image03.jpg'} width={1000} height={500}/>
        <div className='w-[50%] md:w-[40%] lg:w-[30%]   flex flex-col items-center space-y-4   text-[#fff] p-5  bg-[rgba(0,0,0,0.4)] absolute top-[20%]  md:top-[30%] left-[30%] md:left-[35%] '>
           <h1 className='text-xs  lg:text-base uppercase '>made to measure</h1>
           <h1 className='text-lg md:text-xl lg:text-3xl   text-center'>Curtains in your home for Christmas</h1>
           <p className='text-xs lg:text-base text-center'>Prepare your home for festive gatherings with made to measure curtains. Place your order by Thursday 24th October</p>
           <p className='text-xs lg:text-base'>CURTAINS</p> 
        </div>
    </div>
  )
}

export default Banner