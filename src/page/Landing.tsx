import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import CardWrapped from "../components/CardWrapped";
import L5 from "../assets/L5.png";
import L1 from "../assets/L1.png";
import L2 from "../assets/L2.png";
import L4 from "../assets/L4.png";
import SwiperCompo from "../components/SwiperCompo";
import { useStore } from "../contexts/store";
import Swal from "sweetalert2";
type Props = {};

export default function Landing({}: Props) {
  const { swipState, setSwipstate }: any = useStore();
  return (
    <div>
      <TopNav />
      <main className="flex flex-col items-center p-[2rem] gap-[2rem]">
        <div className="flex flex-col items-center gap-[1rem]">
          <h1 className="text-4xl font-extrabold">THE EASIEST NOTE</h1>
          <h4 className="text-2xl px-[1rem]">
            note all of you want, todo, appointment, task and manage your
            customers
          </h4>
        </div>
        {/* place image of some page ------------------------------------------------- */}
        <section className="w-full h-[30rem] flex gap-[2rem] justify-center max-sm:flex-col max-sm:h-auto">
          <img
            className="rounded-xl shadow-xl max-sm:w-full w-[20rem]"
            src={L4}
            alt=""
          />
          <img
            className="rounded-xl shadow-xl max-sm:w-full w-[20rem]"
            src={L5}
            alt=""
          />
          <div className="flex flex-col gap-[1rem] h-full">
            <img
              className="rounded-xl shadow-xl max-sm:w-full w-[30rem] h-full"
              src={L1}
              alt=""
            />
            <img
              className="rounded-xl shadow-xl max-sm:w-full w-[30rem] h-full"
              src={L2}
              alt=""
            />
          </div>
        </section>
        <CardWrapped />
        {/* feedback section ------------------------------------------------- */}
        <section className="w-full px-[5rem] max-sm:px-0 h-[20rem] flex gap-[2rem] justify-center max-sm:flex-col max-sm:h-auto">
          <div className=" flex flex-col items-center justify-around   shadow-2xl rounded-xl p-[2rem]">
            <h1 className="text-5xl font-extrabold">FEEDBACK</h1>
            <p className="text-3xl">
              Give feedback <br /> to help us improve
              <br /> this website
            </p>
            <button
              className="w-full text-left text-purple-700 font-semibold"
              onClick={() => {
                Swal.fire({
                  title: `Are you sure to give feedback?`,
                  input: "text",
                  showDenyButton: true,
                  confirmButtonText: "Yes confirm",
                  denyButtonText: `No I'm not sure`,
                }).then((result) => {
                  if (result.isConfirmed) {
                    const newResult = [...swipState, result.value];
                    setSwipstate(newResult);
                    Swal.fire(
                      `You have given feedback successfully`,
                      "",
                      "success"
                    );
                  } else if (result.isDenied) {
                    Swal.fire("You canceled", "", "error");
                  }
                });
              }}
            >
              Click
            </button>
          </div>
          <div className="w-[70%] max-sm:w-full max-sm:h-[30rem] h-full flex flex-col gap-[2rem] shadow-2xl rounded-xl p-[2rem]">
            <h1 className="text-5xl font-extrabold">OUR FEEDBACK</h1>
            <SwiperCompo />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
