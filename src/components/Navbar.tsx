import React from 'react'
import Image from 'next/image'



const Navbar = () => {
   return (
      <div className='flex items-center justify-between p-4'>
         <div className='hidden md:flex items-center justify-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-3'>
            <Image src='/search.png' alt='search option' height={14} width={14} />
            <input type="text" placeholder='Search ...'
               className='w-[200px] bg-transparent p-2 outline-none'
            />
         </div>

         {/* user icons  */}
         <div className='flex items-center gap-6 justify-end w-full'>

            <div className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
               <Image src="/announcement.png" alt="" width={20} height={20} />
               <div className="absolute top-3 left-5 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
                  1
               </div>
            </div>

            < div className='flex flex-col'>
               <span className='text-xs leading-3 font-medium'>John Doe</span>
               <span className='text-[10px] text-gray-500 text-right'>Admin</span>
            </div>
             <Image src='/avatar.png' alt='profile picture' width={36} height={36} className='rounded-full'/>
            
         </div>
      </div>
   )
}

export default Navbar