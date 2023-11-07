import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <>
      <div className="text-l h-[4rem] flex flex-row justify-center gap-[2rem] items-center px-[2rem]">
        <button>Contact Us</button>
        <button>Help</button>
        <button>Developer</button>
        <div>@COPYRIGHT 2023</div>
      </div>
    </>
  );
}
