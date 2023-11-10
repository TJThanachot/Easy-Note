import { useEffect, useState } from "react";
import { useStore } from "../contexts/store";
import NoteCard from "./NoteCard";
import mockNoteHook from "../hooks/noteHook";
import Checkbox from "@mui/material/Checkbox";
import { DebounceInput } from "react-debounce-input";
import { Link, useNavigate } from "react-router-dom";
type Props = {};

export default function NoteList({}: Props) {
  const nav = useNavigate();
  const {
    mockNote,
    category,
    setCurrentPage,
    setNoteDataById,
    setMocknote,
  }: any = useStore();
  const {
    filterNoteListByCategory,
    filterByTitle,
    filterByDate,
    sortByUpdate,
  }: any = mockNoteHook();

  useEffect(() => {
    filterNoteListByCategory(category);
  }, []);

  // sort data by date *****************************************************
  //**********************************************************
  const [checked, setChecked] = useState(false);
  const handleChange = (e: any): void => {
    const newNote = sortByUpdate(e.target.checked);
    setMocknote(newNote);
    setChecked(e.target.checked);
  };

  //check search state***********************************************************
  const [dateTime, setDateTime] = useState("");
  const [titleSearch, setTitleSearch] = useState("");
  return (
    <div className="w-full flex flex-col gap-[2rem] md:items-center">
      <h1 className="text-2xl font-bold text-center ">
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
        <div className="flex gap-[1rem] max-sm:flex-col max-sm:gap-0 w-full">
          {/* search bar *****************************************************************
           ******************************************************* */}
          <DebounceInput
            debounceTimeout={500}
            type="Search"
            className="font-normal shadow-md text-base outline-none mt-[1.5rem] self-stretch py-3 pl-3 pr-4 border-[1px] rounded-[8px] border-gray-200  text-black  h-12 bg-white w-full"
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
          <DebounceInput
            debounceTimeout={500}
            type="Search"
            className="font-normal shadow-md text-base outline-none mt-[1.5rem] self-stretch py-3 pl-3 pr-4 border-[1px] rounded-[8px] border-gray-200  text-black  h-12 bg-white w-full"
            placeholder="Noted date search..."
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
        <div className="text-base font-medium flex items-center justify-between mt-[0.5rem] w-full">
          <div className="flex items-center w-[70%] ">
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                color: "purple",
                "&.Mui-checked": {
                  color: "purple",
                },
              }}
            />
            sort by last update
          </div>
          <button
            onClick={() => {
              setCurrentPage("yourNote");
              nav("/dashboard");
            }}
            type="button"
            className="w-[6rem] h-[2rem] font-bold rounded-lg bg-purple-400 hover:opacity-80"
          >
            Back
          </button>
        </div>
      </h1>

      <main className="w-full">
        <ul className="flex flex-col items-center w-full gap-[2rem]">
          {mockNote?.map((item: any) => {
            return (
              <Link
                to="/dashboard/CRUDNote"
                className="w-full flex flex-col items-center"
                key={item.id}
                onClick={() => {
                  // go to detail and edit*******************************
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
                  updated_at={item.updated_at}
                  customer_name={item.customer_name}
                  detail={item.detail}
                />
              </Link>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
