"use client";
import React from 'react';
import { useRouter } from "next/navigation";

const PetPage = () => {
  const router = useRouter();
  
  const bottomCardData = [
    { id: 46, title: "Vet Visits", img: "/assets/Vet visits.jpeg", slug: "vet-visits" },
    { id: 47, title: "Pet Playdate", img: "/assets/Pet Playdate.jpeg", slug: "pet-playdate" },
    { id: 48, title: "Litter/Cage Cleaning", img: "/assets/Littercage.jpeg", slug: "cleaning" },
    { id: 49, title: "Grooming", img: "/assets/Grooming.jpeg", slug: "grooming" },
    { id: 50, title: "Dog Walking", img: "/assets/Dog Walking.jpeg", slug: "dog-walking" },
    { id: 51, title: "Pet Sitting", img: "/assets/Pet Sitting.jpeg", slug: "pet-sitting" },
    { id: 52, title: "Feeding", img: "/assets/Feeding.jpeg", slug: "feeding" },
    { id: 53, title: "Light Bathing", img: "/assets/carpet.jpeg", slug: "bathing" },
    { id: 54, title: "Car Ride Assistance", img: "/assets/seasonal cleanup.jpeg", slug: "transport" },
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-6"
      style={{ backgroundImage: "url('/assets/TBBackround.jpeg')" }}
    >

      <div className="w-full max-w-149 min-h-24 bg-[#5F4F4F]/25 rounded-2xl flex items-center justify-center my-8 p-4">
        <h1 className="text-4xl md:text-[64px] font-extrabold text-black tracking-tight text-center">
          Pet Help
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
                onClick={() => router.push(`/pet-help/${item.slug}`)}
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
         "Give what you know, get what you need."
        </p>
      </div>
    </div>
  );
};

export default PetPage;