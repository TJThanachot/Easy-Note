import React from "react";
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import YourNote from "../components/main/YourNote";
import { BiListPlus } from "react-icons/bi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { useStore } from "../contexts/store";
import NoteHistory from "../components/main/NoteHistory";
import NoteList from "../components/NoteList";
import CustomersList from "../components/main/CustomersList";
type Props = {};

export default function Home({}: Props) {
  const { currentPage }: any = useStore();

  return (
    <div>
      <TopNav />
      <div className="flex gap-[2rem] p-[2rem] max-sm:flex-col">
        <aside className="w-[18rem] rounded-md flex flex-col gap-[2rem] max-sm:w-full">
          <SideNav />
          <div className="bg-gradient-to-br from-primary to-secondary transition duration-400 hover:scale-110 flex flex-col items-center py-[1.5rem] text-xl font-bold rounded-lg cursor-pointer hover:shadow-lg ">
            New Note
            <div>
              <BiListPlus className="text-[5rem]" />
            </div>
          </div>
          <div className="bg-gradient-to-br from-secondary to-primary transition duration-400 hover:scale-110 flex flex-col items-center py-[1.5rem] text-xl font-bold rounded-lg cursor-pointer hover:shadow-lg ">
            New Customer
            <div>
              <FaArrowsDownToPeople className="text-[5rem]" />
            </div>
          </div>
        </aside>
        <main className="bg-gradient-to-b from-fifthdary to-thirdary min-h-[46rem] flex flex-col items-center p-[2rem] gap-[2rem] w-full rounded-md">
          {currentPage === "yourNote" ? (
            <YourNote />
          ) : currentPage === "noteHistory" ? (
            <NoteHistory />
          ) : currentPage === "customers" ? (
            <CustomersList />
          ) : currentPage === "noteList" ? (
            <NoteList />
          ) : null}
        </main>
      </div>
    </div>
  );
}
