import React, { useEffect } from "react";
import { useStore } from "../contexts/store";
import NoteCard from "./NoteCard";
import mockNoteHook from "../hooks/mockNoteHook";

type Props = {};

export default function NoteList({}: Props) {
  const { mockNote, category }: any = useStore();
  const { filterNoteListByCategory }: any = mockNoteHook();

  useEffect(() => {
    filterNoteListByCategory(category);
  }, []);
  return (
    <div className="w-full flex flex-col gap-[2rem] md:items-center">
      <h1 className="text-2xl font-bold text-center">
        {category === "todo"
          ? "To Do List"
          : category === "appointment"
          ? "Appointment List"
          : category === "note"
          ? "Regular Note List"
          : "Task List"}
        <p className="text-base font-medium">
          ( click the card for read more details or edit )
        </p>
      </h1>
      <main>
        <ul className="flex flex-col gap-[2rem]">
          {mockNote.map((item: any) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  // go to detail and edite*******************************
                  console.log("first");
                }}
              >
                <NoteCard
                  title={item.title}
                  noted_date={item.noted_date}
                  customer_name={item.customer_name}
                  note_detail={item.note_detail}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
