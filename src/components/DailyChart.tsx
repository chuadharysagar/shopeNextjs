import React, { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, PieLabelRenderProps } from 'recharts';
import Image from 'next/image';


const data01 = [
  { name: 'Group A', value: 400,fill:'#AADEF7' },
  { name: 'Total Sales', value: 300,fill:'#F3D871'},
];

// main chart 
const DailyChart = () => {


  

  return (
    <div className='bg-white rounded-xl h-full w-full p-4'>
       <div className='flex justify-between items-center'>
           <h1 className='text-xl font-semibold'>Daily Sales</h1>
            <Image src="/moreDark.png" alt='More options' width={20} height={20}/>
       </div>

       {/* middle chart  */}
      <div className='h-[75%] w-full'>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
        <Pie data={data01} dataKey="value"
         cx="50%" cy="50%" 
         innerRadius={65} 
         outerRadius={100} 
         fill="#82ca9d" 
         paddingAngle={5}
         label={{fontSize:"18px",fontWeight:"600"}} />
        </PieChart>
      </ResponsiveContainer>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-sky rounded-full" />
          <h1 className="font-bold">$1,234</h1>
          <h2 className="text-xs text-gray-300">Total</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow rounded-full" />
          <h1 className="font-bold">$1,234</h1>
          <h2 className="text-xs text-gray-300">Daily</h2>
        </div>
      </div>

    </div>
  );
};

export default DailyChart;
