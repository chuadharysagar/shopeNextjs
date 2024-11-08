import React from 'react'
import SalesBarChart from '@/components/SalesBarChart';

const SinlgeProdcutPage = () => {
  return (
    <div className='flex md:flex-row flex-col gap-4'>
      {/* letf side  */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>

        {/* upper chart  */}
        <div className='flex gap-4 lg:flex-row md:flex-col'>

          <div className='w-full lg:w-2/3 h-[450px]'>
            <SalesBarChart />
          </div>

          <div className='w-full lg:w-1/3 h-[450px]'>
            daily revenue by that product
          </div>

        </div>


        {/* lower chart  */}
        <div>
          monthly revenue
        </div>
      </div>


      {/* right side  */}
      <div className='w-full lg:w-1/3'>
        right
      </div>

    </div>
  )
}

export default SinlgeProdcutPage;