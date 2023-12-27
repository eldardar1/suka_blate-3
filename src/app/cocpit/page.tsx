"use client";
import React, { useState } from "react";
import Alt from "../../components/component/Alt_comp";
import His from "../../components/component/His_comp";
import Ade from "../../components/component/Ade_comp";
import mapRange from "../../functions/map";
import mapRangeColor from "@/functions/mapColor";
import F35 from "@/Images/f35";


// let CircleColor: string = "#D9D9D9";
// let cursorY: number;

// let userInput_Alt: string = readlineSync.question(
//   "Enter a number between 0 and 3000: "
// );
// let myNumber_Alt: number = parseFloat(userInput_Alt);
// let AltCoursor = mapRange(myNumber_Alt, 0, 3000, 215, 545);
// if (myNumber_Alt >= 0 && myNumber_Alt <= 3000) {
//   console.log("Valid number:", myNumber_Alt);
//   console.log(`Mapped value: ${AltCoursor}`);
// } else {
//   console.log("Invalid input. Please enter a number between 0 and 3000.");
// }

// let userInput_His: string = readlineSync.question(
//   "Enter a number between 0 and 360: "
// );
// let myNumber_His: number = parseFloat(userInput_His);
// if (myNumber_His >= 0 && myNumber_His <= 360) {
//   console.log("Valid number:", myNumber_His);
// } else {
//   console.log("Invalid input. Please enter a number between 0 and 360.");
// }

// let userInput_Ade: string = readlineSync.question(
//   "Enter a number between -100 and 100 : "
// );
// let myNumber_Ade: number = parseFloat(userInput_Ade);
// if (myNumber_Ade >= -100 && myNumber_Ade <= 100) {
//   console.log("Valid number:", myNumber_Ade);
// } else {
//   console.log("Invalid input. Please enter a number between -100 and 100.");
// }

export default function CockPit() {
  const [altInput, setAltInput] = useState("545");
  const [hisInput, setHisInput] = useState("");
  const [adeInput, setAdeInput] = useState(0);

  const [altValue, setAltValue] = useState("545");
  const [hisValue, setHisValue] = useState("");
  const [adeValue, setAdeValue] = useState(0);

  const handleAltChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setAltInput(input);

    const num = parseFloat(input);
    if (num >= 0 && num <= 3000) {
      setAltValue(mapRange(num, 0, 3000, 545, 215).toString());
    } else {
      console.log("Invalid input. Please enter a number between 0 and 3000.");
    }
  };
  
  const handleHisChange = (e1: React.ChangeEvent<HTMLInputElement>) => {
    const input1 = e1.target.value;
    setHisInput(input1);

    const num1 = parseFloat(input1);
    if (num1 >= 0 && num1 <= 360) {
      setHisValue(num1.toString());
    } else {
      console.log("Invalid input. Please enter a number between 0 and 360.");
    }
  };
  const handleAdeChange = (e2: React.ChangeEvent<HTMLInputElement>) => {
    const input2 = e2.target.value;
    setAdeInput(Number(input2));

    const num2 = parseFloat(input2);
    if (num2 >= -100 && num2 <= 100) {
      setAdeValue(mapRangeColor(num2,-100, 100, 0, 100));
    } else {
      console.log("Invalid input. Please enter a number between -100 and 100.");
    }
  };
  return (
    <div className="w-screen h-screen relative bg-slate-500">
      <div className=" w-[223px] h-[1024px] left-[800px] top-0 absolute">
        <div className="Rectangle1 w-[286px] h-14 left-0 top-0 absolute bg-green-300 rounded-[7px]" />
        <div className="EldarSimulator w-[286px] h-14 left-0 top-0 absolute text-center text-black text-[23px] font-normal font-['Krona One']">
          ELDAR SIMULATOR
        </div>
      </div>

      {/* Input fields for user interaction */}
      <div className="input-container absolute top-0 left-10 text-black">
        <input
          className="w-full py-1 px-4 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          type="text"
          value={altInput}
          onChange={handleAltChange}
          placeholder="Enter Number 0-3000"
        />
      </div>
      <div className="input-container absolute top-10 left-10 text-black">
        <input
          className="w-full py-1 px-4 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          type="text"
          value={hisInput}
          onChange={handleHisChange}
          placeholder="Enter Number 0-360"
        />
      
      </div>
      <div className="input-container absolute top-20 left-10 text-black">
        <input
          className="w-full py-1 px-4 text-base text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          type="text"
          value={adeInput}
          onChange={handleAdeChange}
          placeholder="Enter Number -100-100 "
        />
      
      </div>
      <div className="text-blue-500 h-5 w-5 left-[740px] top-[30px] absolute" >
      <F35/>
      </div>
      <div className="Alt w-[223px] h-[1024px] left-[328px] top-0 absolute">
        <Alt valueAlt={altValue} />
      </div>
      <div className="Alt w-[223px] h-[1024px] left-[728px] top-0 absolute">
        <His valueHis={hisValue} />
      </div>
      <div className="Alt w-[223px] h-[1024px] left-[1128px] top-0 absolute">
        <Ade valueAde = {adeValue} />
      </div>
    </div>
    
  );
}

// 545-215 k=330
