'use client'
import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid,Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
   {
      name: 'Mon',
      sales: 3000,
      fill:'#1f77b4',
   },
   {
      name: 'Tue',
      sales: 2000,
   },
   {
      name: 'Wed',
      sales: 2780,
   },
   {
      name: 'Thu',
      sales: 1890,
   },
   {
      name: 'Fri',
      sales: 2390,
   },
   {
      name: 'Sat',
      sales: 3490,
   },
   {
      name: 'Sun',
      sales: 2400,
   },
];
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const SalesBarChart = () => {
   return (
      <div className='bg-white rounded-lg p-4 h-full'>
         <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Weekly Sales</h1>
            <Image src='/moreDark.png' alt='other options' width={20} height={20} />
         </div>

         <ResponsiveContainer width="100%" height="100%">
            <BarChart
               width={500}
               height={300}
               data={data}
               barSize={36}
            >
               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
               <XAxis
                  dataKey="name"
                  axisLine={false}
                  tick={{ fill: "#d1d5db" }}
                  tickLine={false}
               />

               <YAxis axisLine={false}
                  tick={{ fill: "#d1d5db" }}
                  tickLine={false} />

               <Legend
                  align='left'
                  verticalAlign='top'
                  wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
               />
               <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />

               <Bar dataKey="sales"
                  fill="#816AA8"
                  legendType='circle'
                  radius={[6, 6, 0, 0]}
                  label={{position:'top'}}
               />
            </BarChart>
         </ResponsiveContainer>
      </div>
   );
}

export default SalesBarChart;