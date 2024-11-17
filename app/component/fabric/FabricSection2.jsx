import Image from 'next/image'
import React from 'react'

function FabricSection2() {
  return (
    <div className='py-16 flex flex-col md:flex-row space-x-16 items-center justify-center'>
            <Image src='https://www.janeclayton.co.uk/static/version1727853663/frontend/Janeclayton/default/en_GB/images/tmp/canhelp_d.jpg' width={300} height={500}/>
            <div className='w-[400px] space-y-16'>
                <h1 className='text-3xl'>
                Can’t find what you’re looking for? We can help.
                </h1>
                <p>
                Call our dedicated team of specialists on<span className='border-b border-gray-400'> 01761 404505 </span> or email us.
                </p>
            </div>

        </div>
  )
}

export default FabricSection2