import React from "react";
import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";
type Props = {};

export default function TopNav({}: Props) {
  return (
    <div className="bg-gradient-to-b from-fifthdary to-secondary text-xl h-[5rem] flex flex-row items-center justify-between px-[2rem]">
      <Link
        className="flex items-center gap-[0.5rem] text-4xl font-bold"
        to={"/"}
      >
        <GiNotebook />
        Logo
      </Link>
      <Link
        className="transition duration-400 hover:scale-110 font-bold bg-primary w-[10rem] h-[3rem] rounded-lg flex items-center justify-center"
        to={"/dashboard"}
      >
        Dashboard
      </Link>
    </div>
  );
}
