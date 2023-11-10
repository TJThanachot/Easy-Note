import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import YourNote from "../components/main/YourNote";
import { BiListPlus } from "react-icons/bi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { useStore } from "../contexts/store";
import NoteHistory from "../components/main/NoteHistory";
import NoteList from "../components/NoteList";
import CustomersList from "../components/main/CustomersList";
import CRUDNote from "../components/crud/CRUDNote";
import CRUDCustomer from "../components/crud/CRUDCustomer";
import { Link, Routes, Route } from "react-router-dom";
type Props = {};

export default function Home({}: Props) {
  const {
    setCurrentPage,
    noteDataById,
    setNoteDataById,
    customerDataById,
    setCustomerDataById,
  }: any = useStore();

  return (
    <div>
      <TopNav />
      <div className="flex gap-[2rem] p-[2rem] max-sm:flex-col">
        <aside className="w-[18rem] rounded-md flex flex-col gap-[2rem] max-sm:w-full">
          <SideNav />
          <Link
            to="/dashboard/CRUDNote"
            onClick={() => {
              setNoteDataById({});
              setCurrentPage("CRUDNote");
            }}
            className="bg-gradient-to-br from-primary to-secondary transition duration-400 hover:scale-110 flex flex-col items-center py-[1.5rem] text-xl font-bold rounded-lg cursor-pointer shadow-lg "
          >
            New Note
            <div>
              <BiListPlus className="text-[5rem]" />
            </div>
          </Link>
          <Link
            to="/dashboard/CRUDCustomer"
            onClick={() => {
              setCustomerDataById({});
              setCurrentPage("CRUDCustomer");
            }}
            className="bg-gradient-to-br from-secondary to-primary transition duration-400 hover:scale-110 flex flex-col items-center py-[1.5rem] text-xl font-bold rounded-lg cursor-pointer shadow-lg "
          >
            New Customer
            <div>
              <FaArrowsDownToPeople className="text-[5rem]" />
            </div>
          </Link>
        </aside>
        <main className="w-[80%] max-sm:w-full bg-gradient-to-b from-fourthdary to-fifthdary min-h-[46rem] flex flex-col items-center p-[2rem] gap-[2rem] rounded-md">
          <Routes>
            <Route path="/" element={<YourNote />} />
            <Route path="/CustomersList" element={<CustomersList />} />
            <Route path="/NoteHistory" element={<NoteHistory />} />
            <Route path="/NoteList" element={<NoteList />} />
            <Route
              path="/CRUDNote"
              element={<CRUDNote props={noteDataById ? noteDataById : null} />}
            />
            <Route
              path="/CRUDCustomer"
              element={
                <CRUDCustomer
                  props={customerDataById ? customerDataById : null}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}
