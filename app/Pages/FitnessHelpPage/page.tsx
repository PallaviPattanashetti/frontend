"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const bottomCardData = [
    { title: "Aerobic", img: "/assets/aerobic.jpeg", slug: "aerobic" },
    { title: "Zumba", img: "/assets/Zumba.jpeg", slug: "zumba" },
    {
      title: "Partner Workouts",
      img: "/assets/partnerworkout.jpeg",
      slug: "partner-workouts",
    },
    {
      title: "Yoga Basics",
      img: "/assets/Yoga.jpeg",
      slug: "yoga-basics",
    },
    {
      title: "Simple Home Exercises",
      img: "/assets/home-exercise.jpeg",
      slug: "home-exercises",
    },
    {
      title: "Nature Trail Walks",
      img: "/assets/naturewalk.jpeg",
      slug: "nature-walks",
    },
    {
      title: "Dance-Based-Cardio",
      img: "/assets/dancecardio.jpeg",
      slug: "dance-cardio",
    },
    {
      title: "Walking Group",
      img: "/assets/walking group.jpeg",
      slug: "walking-group",
    },
    {
      title: "Jump-Rope Basics",
      img: "/assets/jump-rope.jpeg",
      slug: "jump-rope",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      <div className="w-full max-w-[596px] min-h-[96px] bg-[#5F4F4F]/25 rounded-2xl flex items-center justify-center my-8 p-4">
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Fitness Help
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center mb-12">
        {bottomCardData.map((item) => (
          <div
            key={item.title}
            className="w-full max-w-[280px] min-h-[380px] bg-[#F4F4F4]/50 border-[1px] rounded-2xl border-black flex flex-col overflow-hidden shadow-sm"
          >
            <div className="w-full h-[180px] border-b-[1px] border-black overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col items-center flex-grow justify-between">
              <div className="w-full">
                <h5 className="text-xl font-bold text-gray-900 mb-2 text-center leading-tight">
                  {item.title}
                </h5>
              </div>

              <button
                onClick={() => router.push(`/fitness-help/${item.slug}`)}
                className="w-full max-w-[180px] py-3 border-[2px] border-black bg-[#6F7887]/80 rounded-xl text-black hover:bg-black hover:text-white transition-all duration-200 font-bold text-[18px] sm:text-[20px]"
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
