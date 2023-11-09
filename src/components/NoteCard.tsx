type Props = {
  customer_name: string;
  detail: string;
  title: string;
  noted_date: string;
  updated_at: string;
};

export default function NoteCard(props: Props) {
  return (
    <div className="bg-white p-[1rem]  w-[80%] max-sm:w-full rounded-xl transition duration-400 hover:scale-110 shadow-lg cursor-pointer">
      <div className="flex items-center w-full justify-between gap-[0.5rem] max-sm:flex-col max-sm:items-start max-sm:gap-[1rem]">
        <div className="flex items-center gap-[1rem]">
          <h4 className="font-semibold bg-[#7BE495] rounded-md px-[1rem]">
            Title
          </h4>
          {props.title}
        </div>
        <div className="flex items-center gap-[1rem]">
          <h4 className="font-semibold bg-[#7BE495] rounded-md px-[1rem]">
            Noted
          </h4>
          {props.noted_date}
        </div>
        <div className="flex items-center gap-[1rem]">
          <h4 className="font-semibold bg-[#7BE495] rounded-md px-[1rem]">
            Updated
          </h4>
          {props.updated_at}
        </div>
      </div>
      <main className="mt-[1rem]">
        <h4 className="text-l font-semibold bg-[#7BE495] rounded-md px-[0.5rem] mb-[0.5rem]">
          Customer name
        </h4>
        <p className="truncate overflow-hidden px-[0.5rem]">
          {props.customer_name}
        </p>
        <h4 className="mt-[0.5rem] text-l font-semibold bg-[#7BE495] rounded-md px-[0.5rem] mb-[0.5rem]">
          Details
        </h4>
        <p className="truncate overflow-hidden px-[0.5rem]">{props.detail}</p>
      </main>
    </div>
  );
}
