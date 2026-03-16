"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const bottomCardData = [
    {
      title: "Decor",
      img: "/assets/Decor.jpeg",
      slug: "decor",
      path: "../Pages/DecorPage",
    },
    {
      title: "Cleaning",
      img: "/assets/cleaning.jpeg",
      slug: "cleaning",
      path: "../Pages/CleaningPage",
    },
    {
      title: "Organizing/ Decluttering",
      img: "/assets/Org:decl.jpeg",
      slug: "organizing-decluttering",
      path: "/home-help/organizing",
    },
    {
      title: "Elder Support",
      img: "/assets/Eldersupport.jpeg",
      slug: "elder-support",
    },
    {
      title: "Meal Prep",
      img: "/assets/mealpre.jpeg",
      slug: "meal-prep",
    },
    {
      title: "Grocery Shopping",
      img: "/assets/Groceryshop.jpeg",
      slug: "grocery-shopping",
    },
    { title: "Laundry", 
      img: "/assets/laundry.jpeg",
       slug: "laundry" },
    {
      title: "Home safety Checks",
      img: "/assets/Home safety.jpeg",
      slug: "home-safety-checks",
    },
    {
      title: "Childcare",
      img: "/assets/Childcare.jpeg",
      slug: "childcare",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >
      <div className="w-full max-w-149 min-h-24 border-black bg-[#5F4F4F]/25 rounded-2xl flex items-center justify-center my-8 p-4">
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Home Help
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl justify-items-center mb-12">
        {bottomCardData.map((item) => (
          <div
            key={item.title}
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
                onClick={() => {
                  const destination = item.path || `/home-help/${item.slug}`;
                  router.push(destination);
                }}
                className="w-full max-w-45 py-3 border-2 border-black bg-[#6F7887]/80 rounded-xl text-black hover:bg-black hover:text-white transition-all duration-200 font-bold text-[18px] sm:text-[20px]"
              >
                Click Here
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="text-[30px] md:text-[40px] mt-10 text-black text-center font-medium italic">
          "Trade skills, gain time, grow together."
        </p>
      </div>
    </div>
  );
};

export default Page;
