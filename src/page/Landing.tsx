import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import CardWrapped from "../components/CardWrapped";
import L5 from "../assets/L5.png";
import L1 from "../assets/L1.png";
import L2 from "../assets/L2.png";
import L4 from "../assets/L4.png";
type Props = {};

export default function Landing({}: Props) {
  return (
    <div>
      <TopNav />
      <main className="flex flex-col items-center p-[2rem] gap-[2rem]">
        <div className="flex flex-col items-center gap-[1rem]">
          <h1 className="text-4xl font-extrabold">The Easiest Note</h1>
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
      </main>
      <Footer />
    </div>
  );
}
