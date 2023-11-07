import React from "react";

type cardType = {
  title: string;
  des: string;
  icon: any;
};

export default function Card(props: cardType) {
  return (
    <div className="max-sm:w-full w-[18%] h-[11rem] p-[1rem] flex flex-col gap-[1.5rem] rounded-md bg-[#7bd5f5]">
      <h2 className="text-xl font-bold flex items-center gap-[0.5rem]">
        {props.icon}
        {props.title}
      </h2>
      <div className="break-words">{props.des}</div>
    </div>
  );
}
