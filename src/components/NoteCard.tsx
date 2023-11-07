import React from "react";

type Props = {
  customer_name: string;
  note_detail: string;
  title: string;
  noted_date: string;
};

export default function NoteCard(props: Props) {
  return (
    <div className="bg-sixthdary p-[1rem] max-w-[50rem] w-full rounded-md transition duration-400 hover:scale-110 shadow-lg cursor-pointer">
      <div className="flex items-center gap-[2rem] max-sm:flex-col max-sm:items-start max-sm:gap-[1rem]">
        <div className="flex items-center gap-[1rem]">
          <h4 className="text-l font-semibold bg-[#7BE495] rounded-md px-[0.5rem]">
            Title
          </h4>
          {props.title}
        </div>
        <div className="flex items-center gap-[1rem]">
          <h4 className="text-l font-semibold bg-[#7BE495] rounded-md px-[0.5rem]">
            Noted date
          </h4>
          {props.noted_date}
        </div>
        <div className="flex items-center gap-[1rem]">
          <h4 className="text-l font-semibold bg-[#7BE495] rounded-md px-[0.5rem]">
            Customer name
          </h4>
          {props.customer_name}
        </div>
      </div>
      <main className="mt-[1rem]">
        <h4 className="text-l font-semibold bg-[#7BE495] rounded-md px-[0.5rem] mb-[0.5rem]">
          Details
        </h4>
        <p className="truncate overflow-hidden px-[0.5rem]">
          {props.note_detail}
        </p>
      </main>
    </div>
  );
}
