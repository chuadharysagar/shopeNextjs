import React from 'react'
import Table from './Table'
import { restokeData } from '@/lib/data'

type restoke = {
   name: string,
   quantity: number,
   date: string,
}


const columns = [{
   header: "Supplier Name",
   accessor: "name",
},
{
   header: "Quantity",
   accessor: "quantity",
},
{
   header: "Date",
   accessor: "date",
}
]

const Restoks = () => {
   const renderRow = (item: restoke) => (
      <tr key={item.name} className='border-b border-gray-200 even:bg-slate-100 text-sm hover:bg-purple'>
         <td className='hidden md:table-cell'>{item.name}</td>
         <td className='hidden md:table-cell'>{item.quantity}</td>
         <td className='hidden md:table-cell'>{item.date}</td>
      </tr>
   );


   return (
      <div className='bg-white rounded-md p-4'>
         <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Restokes</h1>
            <span>Veiw all</span>
         </div>
         <div>
            <Table columns={columns} renderRow={renderRow} data={restokeData} />
         </div>
      </div>
   )
}

export default Restoks