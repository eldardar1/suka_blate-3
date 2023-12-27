'use client';
import React, { useState, useEffect } from 'react';


 export function Ade({ valueAde }: { valueAde: number }): JSX.Element {
 // let radius : string = 270;
 //const backgroundColor = `rgba(0, 26, 255, ${valueAde})`;
 let val1 = valueAde.toString() + '%';
 let valstam : number = 100 - valueAde ;
 let val2 : string = valueAde + '%' ;
  return (
    <div className="Ade" style={{width: 273, height: 1024, paddingTop: 275, paddingBottom: 474, paddingLeft: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
    <div className="Ellipse7" style={{width: 275, height: 275, background: `linear-gradient(180deg,#0047FF ${val1},#00FF0A  ${val2})`, borderRadius: 9999}} />
  </div>
    )
  }
  export default Ade;
  /*  <div className="Ade w-[273px] h-[1024px] pt-[281px] pb-[483px] flex-col justify-start items-center inline-flex">
        <div style={{backgroundColor}} className={`Ellipse2 w-[273px] h-[260px] rounded-full border-4 border-black`} />
        
        </div>           
        */
       /*
       <div className="Ade w-72 h-96 pl-1 pr-1.5 pt-72 pb-96 flex-col justify-start items-center inline-flex">
    <div className="Group9 h-64 relative">
    <div className="Rectangle7" style={{width: radius, height: radius/2, background: '#0038FF', borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomRightRadius: 200, borderBottomLeftRadius: 200,  borderLeft: '1px black solid', borderRight: '1px black solid', borderBottom: '1px black solid', rotate: '180deg'}} />
    <div className="Rectangle7" style={{width: radius, height: radius/2, background: 'linear-gradient(180deg, #00FF0A 0%, #0047FF 100%)', borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomRightRadius: 200, borderBottomLeftRadius: 200,  borderLeft: '1px black solid', borderRight: '1px black solid', borderBottom: '1px black solid' }} />
   </div>
    </div>
    */
  
