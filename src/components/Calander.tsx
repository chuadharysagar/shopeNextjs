'use client'
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Calander = () => {
   const [value, onChange] = useState<Value>(new Date());


   return (
      <div className='bg-white p-4 rounded-md h-full w-full'>
         <Calendar onChange={onChange} value={value} />
      </div>
   )
}

export default Calander