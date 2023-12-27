'use client';
import Arrow from '../cursor\'s/His_cursor';
import React, { useState, useEffect } from 'react';

export function His( { valueHis }: { valueHis: string }): JSX.Element {
  let realDeg = '0';
  return (
      
     <div className="His w-[273px] h-[1024px] relative">
     <div style={{ rotate:`${valueHis}deg` }} className="Group4 w-[273px] h-[273px] left-[-1px] top-[281px] absolute">
       <div  className="Ellipse1 w-[273px] h-[260px] left-0 top-0 absolute bg-[#FF5C00] rounded-full border-4 border-black " />
       <div className=" left-[22px] top-[116px] absolute text-center text-black text-[23px] font-normal font-['Joti One']">270 </div>
       <div className=" left-[123px] top-[218px] absolute text-center text-black text-[23px] font-normal font-['Joti One']">180 </div>
       <div className=" left-[129px] top-[2px] absolute text-center text-black text-[23px] font-normal font-['Joti One']">0 </div>
       <div className=" left-[212px] top-[116px] absolute text-center text-black text-[23px] font-normal font-['Joti One']">90</div>
     </div>
     <div className=" left-[80px] top-[365px]   absolute " >
     <Arrow/>
    </div>
   </div>
    )
    
  }
  export default His;
  