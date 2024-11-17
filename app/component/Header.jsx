'use client'
import * as HIconsSolid from '@heroicons/react/24/solid'
import * as HIconsOutline from '@heroicons/react/24/outline'
import { BeakerIcon } from '@heroicons/react/24/solid'
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'
import SideBar from './SideBar'
import { useState } from 'react'
import { MENU } from '@/Shared/menu'

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="size-6 text-blue-500" />
      <p>...</p>
    </div>
  )
}
function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    } 
  return (
    <>
    {!isOpen ? (
    <div className='lg:flex flex-col'>    
    <div className='grid grid-cols-3 border-b  gap-16 place-items-center p-5'>
      <div className=' lg:hidden cursor-pointer' onClick={toggle}>
        <HIconsSolid.Bars3Icon className='size-6 '/>
      </div>
      <div className=''>
        <h1 className='sm:text-2xl md:text-3xl lg:text-4xl'>Jane Clayton</h1>
        <p className='uppercase text-xs font-medium flex justify-end'>& Company</p>
      </div>
      <div className='lg:flex space-x-3 hidden  w-[400px]  border px-2 py-4 text-gray-400'>
        <input type='text' placeholder='Search products and brands...' className='flex-1 outline-none' />
       
        <MagnifyingGlassIcon className='size-6'/>
        

         </div>
      <div className='hidden lg:flex flex-col space-y-2  items-center' >
        <div className='text-sm flex space-x-4 '>
            <p className='text-gray-600'>Call 01761 404505 </p>
            <p>Design Service</p>
        </div>
        <div className='flex space-x-3 text-gray-600'>
            <div className='flex space-x-2 text-sm'><p>Sign In</p><HIconsOutline.UserIcon className='size-5 '/></div>
            <div className='flex space-x-2 text-sm'><p>Favourite</p><HIconsOutline.StarIcon className='size-5 '/></div>
            <div className='flex space-x-2 text-sm'><p>Bag</p><HIconsOutline.ShoppingBagIcon className='size-5 '/></div>
            
        </div>
      </div>
        <div className='lg:hidden'>
            <HIconsOutline.ShoppingBagIcon className='size-6'/>
        </div>
    </div>
    <div className='flex flex-wrap text-center  space-x-8 uppercase font-semibold pt-10  text-sm items-center justify-center p-2'>
        
        {MENU.map((item,index)=>(
            <h3 key={index}>{item.name}</h3>
        ))}
    </div>
    </div>
    ) :(<SideBar isOpen={isOpen} toggle={toggle}/>)
}
</>
  )
}

const DynamicHeroicons = (props) => {
  const {...icons} = HIconsSolid
  const TheIcon = icons[props.icon]

  return (
    <>
      <TheIcon className="h-6 w-6 text-white" aria-hidden="true" />
    </>
  )
}

export default Header