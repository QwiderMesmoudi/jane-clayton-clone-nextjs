import Image from 'next/image'
import React from 'react'

function FabricSection1() {
  return (
    <div className='bg-[#2a3143] flex space-x-16 p-16 items-center justify-center'>
            <Image className='hidden md:inline-flex md:w-[300px] lg:w-[500px]' src={'https://www.janeclayton.co.uk/media/module/janeclayton/widgets/resized/515x/Category_Header_Test/GP-j-baker-ikat-bokhara.jpg'}
                width={500}
                height={500}
            />
            <div className='space-y-16'>
                <h1 className='text-[#fcd7bb] text-3xl'>Fabric</h1>
                <p className='text-white w-[450px] text-wrap'>
                Shop our extensive range of designer fabric from the world's leading interiors brands. Whether you're looking for upholstery fabric, curtain fabric or fabric for a craft project, we have a huge selection to choose from. Discover embroidered, patterned and plain fabric and use our fabric calculator to find out how much fabric you'll need for your project.
                </p>
                <div className='text-[#fcd7bb] grid grid-cols-2'>
                    <a className=''>
                    Curtain fabric calculator
                    </a>
                    <a>
                    Blind fabric calculator</a>
                    <a>Curtain fabric</a>
                    <a>
                    Upholstery fabric</a>
                </div>
            </div>
        </div>
  )
}

export default FabricSection1