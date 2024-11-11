'use client'
import 'react-calendar/dist/Calendar.css';
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calander = () => {
   const [value, onChange] = useState<Value>(new Date());
   console.log("Selected data",value?.toLocaleString("en-us"));

   return (
      <div className='bg-white p-4 rounded-md w-full'>
         <Calendar onChange={onChange} value={value} />
      </div>
   )
}

export default Calander