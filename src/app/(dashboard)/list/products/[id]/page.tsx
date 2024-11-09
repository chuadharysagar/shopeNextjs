'use client'
import React from 'react'
import SalesBarChart from '@/components/SalesBarChart';
import DailyChart from '@/components/DailyChart';
import YearlyChart from '@/components/YearlyChart';
import Calander from '@/components/Calander';

const SinlgeProdcutPage = () => {
  return (
    <div className='flex  xl:flex-row flex-col gap-4 ml-4'>
      {/* letf side  */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>

        {/* upper chart  */}
        <div className='flex gap-4 flex-col lg:flex-row w-full flex-1'>

          <div className='w-full lg:w-2/3 h-[450px]'>
            <SalesBarChart />
          </div>
          <div className='w-full lg:w-1/3 h-[450px]'>
            <DailyChart/>
          </div>

        </div>


        {/* lower chart  */}
        <div className=' w-full h-[600px]  bg-white'>
          <YearlyChart/>
        </div>
      </div>


      {/* right side  */}
      <div className='w-full lg:w-1/3 h-[450px]'>
        <Calander/>
      </div>

    </div>
  )
}

export default SinlgeProdcutPage;