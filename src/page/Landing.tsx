import React from "react";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import CardWrapped from "../components/CardWrapped";
type Props = {};

export default function Landing({}: Props) {
  return (
    <div>
      <TopNav />
      <main className="flex flex-col items-center p-[2rem] gap-[2rem]">
        <div className="flex flex-col items-center gap-[1rem]">
          <h1 className="text-4xl font-extrabold">The Easiest Note</h1>
          <h4 className="text-2xl">
            note all of you want, todo, appointment, task and manage your
            customers
          </h4>
        </div>
        {/* place image of some page ------------------------------------------------- */}
        <section className="w-full h-[30rem] ">image</section>
        <CardWrapped />
      </main>
      <Footer />
    </div>
  );
}
