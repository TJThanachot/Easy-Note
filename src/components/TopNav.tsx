import { GiNotebook } from "react-icons/gi";
import { Link } from "react-router-dom";
type Props = {};

export default function TopNav({}: Props) {
  return (
    <div className=" shadow-lg sm:w-[72rem] md:w-full bg-gradient-to-b from-fifthdary to-secondary text-xl h-[5rem] flex flex-row items-center justify-between px-[2rem]">
      <Link
        className="transition duration-200 flex items-center gap-[0.5rem] text-4xl font-bold hover:scale-110 "
        to={"/"}
      >
        <GiNotebook />
        LOGO
      </Link>
      <Link
        className="transition duration-400 hover:scale-110 hover:opacity-80 font-bold bg-gradient-to-br from-primary to-secondary w-[10rem] h-[3rem] rounded-lg flex items-center justify-center"
        to={"/dashboard"}
      >
        Dashboard
      </Link>
    </div>
  );
}
