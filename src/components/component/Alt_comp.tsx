"use client";
import AltCursor from "../cursor's/Alt_cursor";
import React from "react";

export function Alt({ valueAlt }: { valueAlt: string }): JSX.Element {
  return (
    <div className="Alt w-[223px] h-[1024px] left-55 top-29 relative">
      <div className="Group8 w-[116px] h-[510px] left-[55px] top-[192px] absolute">
        <div className="Rectangle3 w-[116px] h-[510px] left-0 top-0 absolute bg-zinc-300" />
        <div className="Frame2 w-[72px] h-[466px] left-[22px] top-[16px] absolute flex-col justify-start items-center gap-[74px] inline-flex">
          <div className=" text-center text-black text-3xl font-normal font-['JetBrains Mono']">
            3000
          </div>
          <div className=" text-center text-black text-3xl font-normal font-['JetBrains Mono']">
            2000
          </div>
          <div className=" text-center text-black text-3xl font-normal font-['JetBrains Mono']">
            1000
          </div>
          <div className=" text-center text-black text-3xl font-normal font-['JetBrains Mono']">
            0
          </div>
        </div>
      </div>
      <div style={{ top: `${valueAlt}px` }} className="Cursor w-52 h-[0px] left-[9px] absolute">
        <AltCursor />
      </div>
    </div>
  );
}

export default Alt;
