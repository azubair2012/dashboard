"use client";
import { useState } from "react";
import Image from "next/image";
import Cards from "/app/components/Cards.jsx";
import Settings from "/app/components/Settings.jsx";
import Homepage from "/app/components/Home.jsx";
import { GoPeople, GoHome, GoMail, GoGear, GoCreditCard } from "react-icons/go";

export default function Home() {
  const [Display, setDisplay] = useState(<Homepage />);
  return (
    <main className="bg-[url('/img/pexels-terje-sollie-312029.jpg')] bg-cover h-screen flex justify-center items-center gap-20">
      <div className="text-white text-4xl border-[1px] border-[#cecbc3] rounded-full h-fit w-fit flex flex-col items-center justify-evenly px-4 py-4 gap-4 overflow-hidden backdrop-blur-sm">
        <GoHome
          className="cursor-pointer"
          onClick={() => {
            setDisplay(<Homepage />);
          }}
        />
        <GoPeople
          className="cursor-pointer"
          onClick={() => {
            setDisplay("People");
          }}
        />
        <GoMail
          className="cursor-pointer"
          onClick={() => {
            setDisplay("Mail");
          }}
        />
        <GoCreditCard
          className="cursor-pointer"
          onClick={() => {
            setDisplay(<Cards />);
          }}
        />
        <GoGear
          className="cursor-pointer"
          onClick={() => {
            setDisplay(<Settings />);
          }}
        />
      </div>
      <div className="text-white text-4xl border-[1px] border-[#cecbc3] rounded-3xl h-[780px] w-[900px] backdrop-blur-md mx-8 text-center">
        {Display}
      </div>
    </main>
  );
}
