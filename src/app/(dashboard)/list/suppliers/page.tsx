import TableSearch from '@/components/TableSearch';
import React from 'react'
import Image from 'next/image';
import { role } from '@/lib/data';
import { restokeData } from '@/lib/data';
import Table from '@/components/Table';
import Link from 'next/link';


type supplier = {
   suplierId:number,
   photo?:string,
   contact?:string,
   address?:string,
   name:string,
   product:string,
   quantity:number,
   unitPrice:string,
   TotalPrice: string,
   date: string,
}


const columns = [{
   header: "Supplier Name",
   accessor: "name",
},
{
   header: "Contact",
   accessor: "contact",
   className: "hidden lg:table-cell",

},
{
   header:"Product",
   accessor:"product",
   className:"hidden md:table-cell",
},
{
   header: "Quantity",
   accessor: "quantity",
   className: "hidden md:table-cell",
},
{
   header:"Unit price",
   accessor:"unitprice",
   className:"hidden md:table-cell",
},
{
   header:"Total price",
   accessor:"totalprice",
   className:"hidden md:table-cell",
},
{
   header: "Date",
   accessor: "date",
   className: "hidden lg:table-cell",

},
{
   header: "Action",
   accessor: "action",
},
]


const SupplierListPage = () => {
    
   const renderRow = (item: supplier) => (
      <tr key={item.suplierId} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight'>
         <td className='flex items-center gap-4 p-4'>
            <Image src={item.photo || "/noAvatar.png"}
               width={40} height={40}
               alt='Student profile'
               className='md:hidden xl:block w-10 h-10 object-cover' />

            <div className='flex flex-col'>
               <h3 className='font-semibold'>{item.name}</h3>
               <p className='text-xs text-gray-500'>{item?.address}</p>
            </div>
         </td>
         <td className='hidden md:table-cell'>{item?.contact}</td>
         <td className='hidden md:table-cell'>{item?.product}</td>
         <td className='hidden md:table-cell'>{item?.quantity}</td>
         <td className='hidden md:table-cell'>{item?.unitPrice}</td>
         {role === "admin" && <td className='hidden md:table-cell'>{item?.TotalPrice}</td>}
         <td className='hidden lg:table-cell'>{item?.date}</td>


         <td>
   <div className='flex items-center gap-2'>
      {role === "admin" && (
         <>
            <Link href={`/list/products/1`}>
               <button className='w-7 h-7 flex items-center justify-center rounded-full bg-sky'>
                  <Image src='/update.png' alt='view button' height={16} width={16} />
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
      <h1 className='hidden md:block text-2xl font-semibold'>All Suppliers</h1>


      {/* search barn other options  */}
      <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto items-center'>
         {/* button container  */}
         <TableSearch/>
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
   <Table columns={columns} renderRow={renderRow} data={restokeData} />

</div >
  )
}

export default SupplierListPage