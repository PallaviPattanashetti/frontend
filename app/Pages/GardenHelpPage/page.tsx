"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const bottomCardData = [
    {
      id: 37,
      title: "Watering",
      img: "/assets/watering.jpeg",
      slug: "watering",
    },
    { id: 38, title: "Weeding", img: "/assets/weeding.jpeg", slug: "weeding" },
    {
      id: 39,
      title: "Harvesting Veggies/Herbs",
      img: "/assets/harvesting.jpeg",
      slug: "harvesting",
    },
    {
      id: 40,
      title: "Plantation",
      img: "/assets/plantation.jpeg",
      slug: "plantation",
    },
    {
      id: 41,
      title: "Soil Turning",
      img: "/assets/soilturning.jpeg",
      slug: "soil-turning",
    },
    {
      id: 42,
      title: "Fertilizing",
      img: "/assets/fertilizing.jpeg",
      slug: "fertilizing",
    },
    {
      id: 43,
      title: "Trimming Small Plants",
      img: "/assets/trimming plants.jpeg",
      slug: "trimming",
    },
    {
      id: 44,
      title: "Light Yard Tidying",
      img: "/assets/yard.jpeg",
      slug: "yard-tidying",
    },
    {
      id: 45,
      title: "Seasonal Cleanup",
      img: "/assets/seasonal cleanup.jpeg",
      slug: "seasonal-cleanup",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      <div className="w-full max-w-149 min-h-24 bg-[#5F4F4F]/25 rounded-2xl flex items-center justify-center my-8 p-4">
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Garden Help
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center mb-12">
        {bottomCardData.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-70 min-h-95 bg-[#F4F4F4]/50 border rounded-2xl border-black flex flex-col overflow-hidden shadow-sm"
          >
            <div className="w-full h-45 border-b border-black overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col items-center grow justify-between">
              <div className="w-full">
                <h5 className="text-xl font-bold text-gray-900 mb-2 text-center leading-tight">
                  {item.title}
                </h5>
              </div>

              <button
                onClick={() => router.push(`/garden-help/${item.slug}`)}
                className="w-full max-w-45 py-3 border-2 border-black bg-[#6F7887]/80 rounded-xl text-black hover:bg-black hover:text-white transition-all duration-200 font-bold font-['Imprima'] text-[18px] sm:text-[20px]"
              >
                Click Here
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="text-[30px] md:text-[40px] mt-10 text-black text-center italic">
          "Time is not a commodity, it is a gift."
        </p>
      </div>
    </div>
  );
};

export default Page;
