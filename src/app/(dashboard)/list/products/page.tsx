import React from 'react'
import TableSearch from '@/components/TableSearch'
import Image from 'next/image'
import { role } from '@/lib/data'
import Link from 'next/link'
import { productData } from '@/lib/data'
import Table from '@/components/Table'

type product = {
   productId: string,
   name: string,
   category?: string,
   brand?: string,
   photo?: string,
   price: string,
   supplier?: string,
   restock?: string,
}


const columns = [
   {
      header: "Name",
      accessor: "name"
   },
   {
      header: "Quantity",
      accessor: "quantity",
      className: "hidden md:table-cell",
   },
   {
      header: "Category",
      accessor: "category",
      className: "hidden md:table-cell"
   },
   {
      header: "Price Per Unit",
      accessor: "price",
      className: "hidden md:table-cell"
   },
   ...(role === "admin" ? [{
      header: "Supplier",
      accessor: "supplier",
      className: "hidden md:table-cell"
   }] : []),
   {
      header: "Re-Stock",
      accessor: "restock",
      className: "hidden md:table-cell"
   },
   ...(role === "admin" ? [{
      header: "Actions",
      accessor: "action"
   }] : []),
];




const ProductPageList = () => {


   const renderRow = (item: product) => (
      <tr key={item.productId} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight'>
         <td className='flex items-center gap-4 p-4'>
            <Image src={item.photo || "/noAvatar.png"}
               width={40} height={40}
               alt='Student profile'
               className='md:hidden xl:block w-10 h-10 object-cover' />

            <div className='flex flex-col'>
               <h3 className='font-semibold'>{item.name}</h3>
               <p className='text-xs text-gray-500'>{item?.brand}</p>
            </div>
         </td>
         <td className='hidden md:table-cell'>{item?.productId}</td>
         <td className='hidden md:table-cell'>{item?.category}</td>
         <td className='hidden md:table-cell'>$ {item?.price}</td>
         {role === "admin" && <td className='hidden md:table-cell'>{item?.supplier?.[0]}</td>}
         <td className='hidden md:table-cell'>{item?.restock}</td>


         <td>
   <div className='flex items-center gap-2'>
      {role === "admin" && (
         <>
            <Link href={`/list/products/1`}>
               <button className='w-7 h-7 flex items-center justify-center rounded-full bg-sky'>
                  <Image src='/view.png' alt='view button' height={16} width={16} />
               </button>
            </Link>
            
            <button className='w-7 h-7 flex items-center justify-center rounded-full bg-purple'>
               <Image src='/delete.png' alt='delete button' height={16} width={16} />
            </button>
         </>
      )}
   </div>
</td>

      </tr>
   );


   return (
      <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
         {/* top section  */}
         <div className='flex justify-between items-center p-2'>
            {/* Header all  */}
            <h1 className='hidden md:block text-2xl font-semibold'>All Products</h1>


            {/* search barn other options  */}
            <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto items-center'>
               {/* button container  */}
               <TableSearch />
               <div className='flex items-center gap-4 self-end'>
                  <div className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'>
                     <Image src="/filter.png" alt='filter image' width={16} height={16} />
                  </div>
                  <div className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'>
                     <Image src="/search.png" alt='filter image' width={16} height={16} />
                  </div>


                  {role === "admin" && (
                     < div className='w-8 h-8 flex items-center justify-center rounded-full bg-yellow'>
                        <Image src="/create.png" alt='add Image' width={16} height={16} />
                     </div>
                  )}
               </div>
            </div>
         </div>

         {/* list of all the products  */}
         <Table columns={columns} renderRow={renderRow} data={productData} />

      </div >
   )
}

export default ProductPageList