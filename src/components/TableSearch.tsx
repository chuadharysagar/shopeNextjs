import { fromJSON } from 'postcss';
import React from 'react'
import Image from 'next/image';

const TableSearch = () => {


  return (
    <form className='w-full md:w-auto flex justify-center items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image  src="/search.png" alt='search image' height={16} width={16}/>
        <input type="text" placeholder='Search ..' className='w-[200px] p-2 bg-transparent outline-none' />
    </form>
  )
}

export default TableSearch;