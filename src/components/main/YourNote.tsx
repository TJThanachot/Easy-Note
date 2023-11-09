import { BiTask } from "react-icons/bi";
import { GiCalendar } from "react-icons/gi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { MdOutlineNoteAlt } from "react-icons/md";
import HomeCard from "../HomeCard";
type Props = {};

export default function YourNote({}: Props) {
  return (
    <div className="w-full">
      <h1 className="text-center text-5xl font-bold mb-[2rem]">Categories</h1>
      <div className="grid grid-cols-2 w-full gap-[2rem] h-full max-sm:grid-cols-1">
        <HomeCard category="note" title="Regular Note">
          <MdOutlineNoteAlt className="text-[10rem]" />
        </HomeCard>
        <HomeCard category="todo" title="Todo List">
          <AiOutlineUnorderedList className="text-[10rem]" />
        </HomeCard>
        <HomeCard category="appointment" title="Appointment">
          <GiCalendar className="text-[10rem]" />
        </HomeCard>
        <HomeCard category="task" title="Task">
          <BiTask className="text-[10rem]" />
        </HomeCard>
      </div>
    </div>
  );
}
