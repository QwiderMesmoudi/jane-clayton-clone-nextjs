'use client'
import Image from 'next/image'
import React from 'react'
import CurrencyInput from 'react-currency-input-field'

function FabricProducts({products}) {
  return (
    <div className='p-16 grid grid-cols-2 lg:grid-cols-4 gap-16'>
            {
                products?.items?.map((item,value)=>(
                       <div key={value} className='space-y-2'>
                            <Image src={item.media_gallery[0].url} height={250} width={250}/>
                            <h1 className='font-semibold'>{item.name}</h1>
                            <p className='text-gray-400 text-sm font-mono'>{item.categories[1].name}</p>
                            <p className='text-sm'>
                            <CurrencyInput
                            className='font-mono bg-transparent w-16'
                                    id="currency-field"
                                  name="currency"
                                  placeholder="Enter amount"
                                  defaultValue={1000}
                                  value={300.55}
                                  decimalsLimit={2}
                                  prefix="$"
                                  disabled={true}
                                  
                                /> 
                                <span className='font-mono'>PER METER</span>     
                            </p>
                      </div> 
                ))
            }
        </div>
  )
}

export default FabricProducts