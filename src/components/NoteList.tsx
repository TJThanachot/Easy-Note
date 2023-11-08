import { useEffect, useState } from "react";
import { useStore } from "../contexts/store";
import NoteCard from "./NoteCard";
import mockNoteHook from "../hooks/noteHook";

type Props = {};

export default function NoteList({}: Props) {
  const { mockNote, category, setCurrentPage, setNoteDataById }: any =
    useStore();
  const { filterNoteListByCategory, filterByTitle, filterByDate }: any =
    mockNoteHook();

  useEffect(() => {
    filterNoteListByCategory(category);
  }, []);

  const [dateTime, setDateTime] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
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
        <div className="flex gap-[1rem] max-sm:flex-col max-sm:gap-0">
          <input
            type="Search"
            className="font-normal text-base outline-none mt-[1.5rem] self-stretch py-3 pl-3 pr-4 border-[1px] rounded-[8px] border-gray-200  text-black  h-12 bg-white w-full"
            placeholder="Title search..."
            onChange={(e) => {
              e.preventDefault;
              setTitleSearch(e.target.value);
              if (dateTime) {
                filterByTitle(category, e.target.value, dateTime);
              } else {
                filterByTitle(category, e.target.value);
              }
            }}
          />
          <input
            type="Search"
            className="font-normal text-base outline-none mt-[1.5rem] self-stretch py-3 pl-3 pr-4 border-[1px] rounded-[8px] border-gray-200  text-black  h-12 bg-white w-full"
            placeholder="Date time search..."
            onChange={(e) => {
              e.preventDefault;
              setDateTime(e.target.value);
              if (titleSearch) {
                filterByDate(category, e.target.value, titleSearch);
              } else {
                filterByDate(category, e.target.value);
              }
            }}
          />
        </div>
      </h1>

      <main>
        <ul className="flex flex-col gap-[2rem]">
          {mockNote?.map((item: any) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  // go to detail and edite*******************************
                  setNoteDataById({
                    ...item,
                    update: true,
                  });
                  setCurrentPage("CRUDNote");
                }}
              >
                <NoteCard
                  title={item.title}
                  noted_date={item.noted_date}
                  customer_name={item.customer_name}
                  detail={item.detail}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
