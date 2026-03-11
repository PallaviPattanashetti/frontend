"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";


const experts = [
  {
    name: "Michael Rivers",
    skill: "cleaning",
    bio: "Detail-oriented professional with eco-friendly supplies.",
    img: "",
  },
  {
    name: "Elena Rodriguez",
    skill: "cleaning",
    bio: "Deep cleans and move-out organization expert.",
    img: "",
  },
  {
    name: "David Chen",
    skill: "cleaning",
    bio: "Fast and reliable. I specialize in kitchen and bathroom restoration.",
    img: "",
  },
  {
    name: "Sarah Taylor",
    skill: "cleaning",
    bio: "Eco-conscious cleaner with a focus on non-toxic products.",
    img: "",
  },
  {
    name: "Marcus Thorne",
    skill: "cleaning",
    bio: "Expert at delicate fabrics, ironing, and home organization.",
    img: "",
  },
  {
    name: "Jessica Smith",
    skill: "cleaning",
    bio: "Professional house cleaner with 10 years of experience.",
    img: "",
  },
];

function ExpertContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "cleaning"; 

  const filteredExperts = experts.filter((person) => person.skill === type);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      <div className="w-full max-w-149 min-h-24 border-black bg-[#5F4F4F]/25 rounded-2xl flex items-center justify-center my-8 p-4">
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center capitalize">
          {type.replace(/-/g, " ")} Experts
        </h1>
      </div>

      <div className="w-full max-w-4xl flex flex-col gap-6 mb-12">
        {filteredExperts.length > 0 ? (
          filteredExperts.map((person) => (
            <div
              key={person.name}
              className="w-full p-6 bg-[#F4F4F4]/80 border-2 border-black rounded-2xl flex flex-col md:flex-row justify-between items-center shadow-md"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full border-2 border-black overflow-hidden bg-gray-200">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-black">
                    {person.name}
                  </h2>
                  <p className="text-black text-lg font-medium italic">
                    {person.bio}
                  </p>
                </div>
              </div>
              <button className="mt-4 md:mt-0 px-8 py-3 border-2 border-black bg-[#6F7887] rounded-xl text-black hover:bg-black hover:text-white transition-all duration-200 font-bold text-lg">
                Message to Swap
              </button>
            </div>
          ))
        ) : (
          <div className="p-10 text-center border-2 border-dashed border-black rounded-2xl">
            <p className="text-2xl font-bold text-black">
              No experts found for this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="p-20 text-black">Loading...</div>}>
      <ExpertContent />
    </Suspense>
  );
}
