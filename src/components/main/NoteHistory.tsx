import { useState, useEffect } from "react";
import { useStore } from "../../contexts/store";
import mockNoteHook from "../../hooks/mockNoteHook";

type Props = {};

export default function NoteHistory({}: Props) {
  const { mockNote }: any = useStore();
  const { filterNote, GetInitialMockNote }: any = mockNoteHook();
  const [categoryStatus, setCategoryStatus]: any = useState("");

  const initCategory: string[] = ["todo", "appointment", "task", "note"];
  useEffect(() => {
    GetInitialMockNote();
  }, []);

  return (
    <div className="max-w-[50rem] w-full">
      {" "}
      <div className="list-filter flex items-center mb-6 justify-between max-sm:flex-col">
        <div className="text-2xl font-bold">Note History</div>
        <div className="flex justify-center gap-[2rem] max-sm:flex-col max-sm:gap-[0.5rem]">
          <div>
            <input
              type="Search"
              className="outline-none flex items-center gap-2 self-stretch py-3 pl-3 pr-4 border-[1px] rounded-[8px] border-gray-200  text-black  h-12 bg-etc-white w-[240px]"
              placeholder="Customer name search..."
              onChange={(e) => {
                e.preventDefault;
                if (categoryStatus) {
                  filterNote(e.target.value, true, categoryStatus);
                } else {
                  filterNote(e.target.value, true);
                }
              }}
            />
          </div>
          <div>
            <div>
              <label htmlFor="category-dropdown"></label>
              <select
                id="category-dropdown"
                className="outline-none flex items-center gap-2 self-stretch py-3 pl-3 pr-4 border-[1px] rounded-[8px] border-gray-200  text-black h-12 bg-white w-[240px]"
                onChange={(e) => {
                  setCategoryStatus(e.target.value);
                  filterNote(e.target.value);
                }}
              >
                <option value="">All Categories</option>
                {initCategory.map((item: string) => (
                  <option key={item} value={item} className="">
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* table head ***************************************************
       ************************************************************* */}
      <div className="sticky top-0 flex flex-row w-full font-semibold bg-gradient-to-br from-primary to-secondary text-black rounded-t-2xl ">
        <div className=" w-[20%] px-4 py-3 max-sm:hidden">
          <h3 className=" w-full h-auto">Noted</h3>
        </div>
        <div className=" w-[20%] px-4 py-3 max-sm:w-full">
          <h3 className=" w-full h-auto">Category</h3>
        </div>
        <div className=" w-[20%] px-4 py-3 max-sm:w-full">
          <h3 className=" w-full h-auto">Customer Name</h3>
        </div>
        <div className=" w-[20%] px-4 py-3 max-sm:w-full">
          <h3 className=" w-full h-auto ">Title</h3>
        </div>
        <div className=" w-[20%] px-4 py-3 max-sm:hidden">
          <h3 className=" w-full h-auto ">Updated</h3>
        </div>
      </div>
      {/* // out put ******************************************************** //
       ******************************************************** */}
      {mockNote.map((note: any) => {
        return (
          <div
            key={note.id}
            className="flex flex-row w-full bg-white text-black last:rounded-b-2xl "
          >
            <div className=" w-[20%] px-4 py-3 max-sm:px-1 max-sm:hidden">
              <h3 className=" w-full h-auto">{note.noted_date}</h3>
            </div>
            <div className=" w-[20%] px-4 py-3 max-sm:px-1 max-sm:w-full">
              <h3 className=" w-full h-auto">{note.category}</h3>
            </div>
            <div className=" w-[25%] px-4 py-3 max-sm:px-1 max-sm:w-full">
              <h3 className=" w-full h-auto">{note.customer_name}</h3>
            </div>
            <div className=" w-[20%] px-4 py-3 max-sm:px-1 max-sm:w-full">
              <h3 className=" w-full h-auto ">{note.title}</h3>
            </div>
            <div className=" w-[20%] px-4 py-3 max-sm:px-1 max-sm:hidden">
              <h3 className=" w-full h-auto ">{note.updated_at}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
