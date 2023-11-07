import React from "react";

type cardType = {
  title: string;
  des: string;
  icon: any;
};

export default function Card(props: cardType) {
  return (
    <div className="w-[11rem] h-[10rem] p-[0.5rem] flex flex-col justify-between gap-[0.5rem] rounded-md">
      <h2 className="text-xl font-bold flex items-center gap-[0.5rem]">
        {props.icon}
        {props.title}
      </h2>
      <div className="break-words">{props.des}</div>
    </div>
  );
}
