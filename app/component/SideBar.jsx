'use client'
import React , {useState} from 'react'
// React
import * as motion from "framer-motion/client"
import { MENU } from '@/Shared/menu'
import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

function SideBar({isOpen,toggle}) {
    
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }
  return (
    <div className='flex w-[100vw] h-[100vh] bg-[#e8e8e8]'>
    <motion.nav className='bg-white w-[50%]'
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
     
      <div className='space-y-4 items-center p-2 uppercase'>
        <div className='flex justify-center font-semibold border-b p-2'>Menu</div>
            {
                MENU.map((item,index)=>(
                    <div className='border-b p-2 flex'>
                        <p className='flex-1'>{item.name}</p>
                        <ChevronRightIcon className='size-5'/>
                    </div>
                ))
            }
      </div>
    </motion.nav>
    <div className='p-3'>
    {isOpen && <button className='' onClick={toggle} ><XMarkIcon className='size-5'/></button>}
    </div>
    </div>
  )
}

export default SideBar