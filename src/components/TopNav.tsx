import React from "react";
import { GiNotebook } from "react-icons/gi";

type Props = {};

export default function TopNav({}: Props) {
  return (
    <div className="text-xl h-[5rem] flex flex-row items-center justify-between px-[2rem]">
      <div className="flex items-center gap-[0.5rem] text-4xl font-bold">
        <GiNotebook />
        Logo
      </div>
      <button className="w-[10rem] h-[3rem] rounded-lg">Let go to note</button>
    </div>
  );
}
