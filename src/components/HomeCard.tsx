import { useStore } from "../contexts/store";

type Props = {
  title: string;
  children: any;
  category: any;
};

export default function HomeCard(props: Props) {
  const { setCurrentPage, setCategory }: any = useStore();
  return (
    <div
      onClick={() => {
        setCategory(props.category);
        setCurrentPage("noteList");
      }}
      className="text-gray-600 transition duration-400 hover:scale-110 hover:bg-white flex flex-col items-center py-[1.5rem] text-xl font-bold rounded-xl cursor-pointer hover:shadow-lg shadow-xl "
    >
      {props.title}
      <div>{props.children}</div>
    </div>
  );
}
