import { GiStabbedNote } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useStore } from "../contexts/store";
type Props = {};

export default function SideNav({}: Props) {
  const { currentPage, setCurrentPage }: any = useStore();
  return (
    <div className="bg-gradient-to-b from-fourthdary to-fifthdary flex flex-col gap-[1rem] py-[1rem] min-w-[15rem] w-full rounded-lg  h-fit">
      <h1 className="text-2xl font-bold h-[3rem] flex items-center pl-[1rem]">
        Note
      </h1>
      <div className="flex flex-col gap-[1rem] font-semibold h-auto rounded-lg">
        <div
          onClick={() => {
            setCurrentPage("yourNote");
          }}
          className={`${
            currentPage === "yourNote" || currentPage === "noteList"
              ? "bg-red-400"
              : null
          } transition duration-400 hover:scale-110 rounded-md flex items-center gap-[0.5rem] h-[2.5rem] pl-[1rem] cursor-pointer hover:bg-red-500`}
        >
          <GiStabbedNote />
          Your Note
        </div>
        <div
          onClick={() => {
            setCurrentPage("customers");
          }}
          className={`${
            currentPage === "customers" ? "bg-red-400" : null
          } transition duration-400 hover:scale-110 rounded-md flex items-center gap-[0.5rem] h-[2.5rem] pl-[1rem] cursor-pointer hover:bg-red-500`}
        >
          <IoIosPeople />
          Customers
        </div>
        <div
          onClick={() => {
            setCurrentPage("noteHistory");
          }}
          className={`${
            currentPage === "noteHistory" ? "bg-red-400" : null
          } transition duration-400 hover:scale-110 rounded-md flex items-center gap-[0.5rem] h-[2.5rem] pl-[1rem] cursor-pointer hover:bg-red-500 rounded-b-md`}
        >
          <AiOutlineUnorderedList />
          Note History
        </div>
      </div>
    </div>
  );
}
