'use client'
import React, { PureComponent, useState } from 'react';
import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer,
} from 'recharts';

//Daily data 
const dailyData = Array.from({ length: 31 }, (_, i) => ({
   name: `${i + 1}`,
   expense: Math.floor(Math.random() * 3000) + 1000,
   income: Math.floor(Math.random() * 3000) + 2000,
}));

//Monthly Data
const monthlyData = [
   {
      name: "Jan",
      expense: 2400,
      income: 4000,
   },
   {
      name: "Feb",
      expense: 1398,
      income: 3000,
   },
   {
      name: "Mar",
      expense: 9800,
      income: 2000,
   },
   {
      name: "Apr",
      expense: 3908,
      income: 2780,

   },
   {
      name: "May",
      expense: 4800,
      income: 1890,

   },
   {
      name: "Jun",
      expense: 3800,
      income: 2390,

   },
   {
      name: "Jul",
      expense: 4300,
      income: 3490,

   },
   {
      name: "Aug",
      expense: 4300,
      income: 3490,

   },
   {
      name: "Sep",
      expense: 4300,
      income: 3490,

   },
   {
      name: "Oct",
      expense: 4300,
      income: 3490,

   },
   {
      name: "Nov",
      expense: 4300,
      income: 3490,
   },
   {
      name: "Dec",
      expense: 4300,
      income: 3490,
   },
];

//Yearly Data
const yearlyData = [
   { name: '2018', expense: 32000, income: 24000 },
   { name: '2019', expense: 28000, income: 23000 },
   { name: '2020', expense: 27000, income: 22000 },
   { name: '2021', expense: 29000, income: 25000 },
   { name: '2022', expense: 34000, income: 28000 },
];

const CustomizedLabel: React.FC<any> = ({ x, y, stroke, value }) => (
   <text x={x} y={y} dy={-12} fill={stroke} fontSize={14} textAnchor="middle">
      ${value}
   </text>
);

const CustomizedAxisTick: React.FC<any> = ({ x, y, payload }) => (
   <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-30)" className='font-semibold'>
         {payload.value}
      </text>
   </g>
);

const YearlyChart: React.FC = () => {
   const [data, setData] = useState(monthlyData);
   const [view, setView] = useState("monthly");

   const handleDataChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedView = e.target.value;
      setView(selectedView);

      // Set data based on the selected view
      if (selectedView === 'daily') {
         setData(dailyData);
      } else if (selectedView === 'monthly') {
         setData(monthlyData);
      } else if (selectedView === 'yearly') {
         setData(yearlyData);
      }
   };



   return (
      <div className=' relative w-full h-full bg-white p-4'>
         <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Finance</h1>

            <select onChange={handleDataChange}
               value={view}
               className='p-2 bg-gray-300 text-sm font-semibold rounded-md outline-none border-none'>
               <option value="daily">Daily Sales</option>
               <option value="monthly">Monthly Sales</option>
               <option value="yearly">Yearly Sales</option>
            </select>
         </div>


         <ResponsiveContainer width="100%" height="100%" className='mt-2'>
            <LineChart
               width={500}
               height={300}
               data={data}
               margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 10,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
               <YAxis />
               <Tooltip />
               <Legend
                  align='center'
                  verticalAlign='top'
                  wrapperStyle={{ paddingTop: '5px', paddingBottom: '30px' }}
               />
               <Line type="monotone"
                  dataKey="income"
                  stroke="#68EA76"
                  label={<CustomizedLabel />}
                  strokeWidth={4}
               />

              {view !== "daily" && (<Line type="monotone"
                  dataKey="expense"
                  stroke="#D57867"
                  label={<CustomizedLabel />}
                  strokeWidth={4} />)}
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
};

export default YearlyChart;
